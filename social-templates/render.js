// Renders every entry in content.json to PNG at 2x (2160 px wide) in out/.
// Usage: node render.js            -> everything
//        node render.js education  -> one template
//        node render.js --1x       -> 1080 px JPEG instead (Facebook, Google)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = __dirname;
let OUT = path.join(ROOT, 'out');
const args = process.argv.slice(2);
const only = args.find(a => !a.startsWith('--'));
const oneX = args.includes('--1x');
const backdrop = args.includes('--backdrop');
const contentFile = (args.find(a => a.startsWith('--content=')) || '--content=content.json').split('=')[1];
const outSub = (args.find(a => a.startsWith('--out=')) || '--out=').split('=')[1];

const content = JSON.parse(fs.readFileSync(path.join(ROOT, contentFile), 'utf8'));
const tpl = name => fs.readFileSync(path.join(ROOT, 'templates', name + '.html'), 'utf8')
  .replace(/\{\{>(\w+)\}\}/g, (_, p) => fs.readFileSync(path.join(ROOT, 'templates', '_' + p + '.html'), 'utf8'));
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// *word* -> <em>, **word** -> <strong>, straight quotes -> curly, no em dashes expected.
function rich(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/'/g, '’')
    .replace(/"(.+?)"/g, '“$1”');
}

function fill(html, data) {
  let prev; do { prev = html; html = html.replace(/\{\{#(\w+)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (_, k, inner) => (data[k] ? inner : '')); } while (html !== prev);
  return html.replace(/\{\{(\w+)\}\}/g, (_, k) => {
    const v = data[k];
    if (v == null) return '';
    if (k === 'progress' || k === 'size' || k === 'image' || k === 'focus') return v; // raw
    return rich(v);
  });
}

function page(body, cls = '') {
  return `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="post.css"></head><body class="${cls}">${body}</body></html>`;
}

// Expand content.json into flat jobs: { file, template, data }
function jobs() {
  const sizes = content.sizes || ['square'];
  const list = [];
  const push = (template, id, data, sz) => {
    const d = { ...data, size: sz };
    if (d.image && !fs.existsSync(path.join(ROOT, d.image))) {
      const fallback = template === 'doctor' ? 'assets/placeholders/headshot.png' : sz === 'story' ? 'assets/placeholders/photo-story.png' : template === 'education' ? 'assets/placeholders/band.png' : template === 'frame' ? 'assets/placeholders/frame-photo.png' : 'assets/placeholders/photo-portrait.png';
      console.warn(`  NOTE ${template}-${id}: ${d.image} not found, using ${fallback}`);
      d.image = fallback; d.focus = 'center';
    }
    if (template === 'carousel-cover') d.tone = d.tone || 'dark';
    if (template === 'doctor' && d.name) d.nameClass = d.name.length > 16 ? 'long' : '';
    list.push({ file: `${template}-${id}-${sz}`, template, data: d });
  };
  for (const p of content.pages || []) for (const sz of p.sizes || sizes) push(p.template, p.id || p.template, p, sz);
  for (const t of ['education', 'announcement', 'photo', 'review', 'doctor', 'frame']) {
    for (const e of content[t] || []) for (const sz of e.sizes || sizes) push(t, e.id, e, sz);
  }
  for (const c of content.carousel || []) {
    for (const sz of c.sizes || sizes) {
      push('carousel-cover', c.id + '-0', { eyebrow: c.eyebrow, ...c.cover }, sz);
      const total = c.slides.length;
      c.slides.forEach((s, i) => {
        const n = i + 1;
        const progress = Array.from({ length: total }, (_, j) => `<i class="${j <= i ? 'on' : ''}"></i>`).join('');
        push('carousel-slide', `${c.id}-${n}`, {
          eyebrow: c.eyebrow, index: String(n).padStart(2, '0'), total: String(total).padStart(2, '0'),
          headline: s.headline, body: s.body, progress, footerNote: c.footerNote || ''
        }, sz);
      });
    }
  }
  if (backdrop) { const seen = new Set(); return list.filter(j => { const k = j.template + '-' + j.data.size; if (seen.has(k)) return false; seen.add(k); j.file = 'backdrops/' + k; return true; }); }
  // series: an ordered set of mixed templates that make up one carousel post
  for (const s of content.series || []) {
    for (const sz of s.sizes || sizes) {
      const total = s.items.length, counted = s.items.filter(i => i.template === 'carousel-slide').length;
      let k = 0;
      s.items.forEach((it, i) => {
        const d = { eyebrow: s.eyebrow, footerNote: s.footerNote || '', ...it };
        if (it.template === 'carousel-slide') {
          k++;
          d.index = d.index || String(k).padStart(2, '0'); d.total = d.total || String(counted).padStart(2, '0');
          d.progress = Array.from({ length: counted }, (_, j) => `<i class="${j < k ? 'on' : ''}"></i>`).join('');
        }
        if (it.template === 'frame' && d.count === undefined && i > 0) d.count = `${i} / ${total - 1}`;
        push(it.template, `${s.id}-${i}`, d, sz);
      });
    }
  }
  return only ? list.filter(j => j.template.startsWith(only)) : list;
}

module.exports = { jobs, fill, tpl, page, outDir: () => outSub ? path.join(ROOT, 'out', outSub) : path.join(ROOT, 'out') };
if (require.main === module) (async () => {
  if (outSub) OUT = path.join(OUT, outSub);
  fs.mkdirSync(path.join(OUT, 'backdrops'), { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ deviceScaleFactor: oneX ? 1 : 2 });
  const pg = await ctx.newPage();
  for (const j of jobs()) {
    const h = j.data.size === 'portrait' ? 1350 : j.data.size === 'story' ? 1920 : 1080;
    await pg.setViewportSize({ width: 1080, height: h });
    fs.mkdirSync(path.dirname(path.join(OUT, j.file)), { recursive: true });
    const tmp = path.join(ROOT, `_render-${path.basename(j.file)}.html`);
    fs.writeFileSync(tmp, page(fill(tpl(j.template), j.data), backdrop ? 'backdrop' : ''));
    await pg.goto('file://' + tmp);
    await pg.evaluate(() => document.fonts.ready);
    await pg.waitForTimeout(80);
    const over = await pg.evaluate(() => { const p = document.querySelector('.post').getBoundingClientRect(); const f = document.querySelector('.foot'); const b = f ? f.getBoundingClientRect().bottom : 0; const pad = parseFloat(getComputedStyle(document.querySelector('.post')).paddingBottom); return b - (p.height - pad); });
    if (over > 1) console.warn(`  WARNING ${j.file}: content overflows the safe margin by ${Math.round(over)}px, shorten the text`);
    const file = path.join(OUT, j.file + (oneX ? '.jpg' : '.png'));
    await pg.screenshot({ path: file, type: oneX ? 'jpeg' : 'png', quality: oneX ? 90 : undefined, clip: { x: 0, y: 0, width: 1080, height: h } });
    fs.unlinkSync(tmp);
    console.log('wrote', path.relative(ROOT, file));
  }
  await browser.close();
})();
