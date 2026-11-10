// Measures every rendered element of each template (one sample per template and size)
// and writes out/spec.json, which build-pptx.js turns into an editable PPTX for Canva.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { jobs, fill, tpl, page, outDir } = require('./render.js');

const ROOT = __dirname;

(async () => {
  const browser = await chromium.launch();
  const pg = await browser.newPage();
  const seen = new Set();
  const spec = [];
  for (const j of jobs()) {
    const key = j.template + '-' + j.data.size;
    if (seen.has(key)) continue;
    seen.add(key);
    const h = j.data.size === 'portrait' ? 1350 : j.data.size === 'story' ? 1920 : 1080;
    await pg.setViewportSize({ width: 1080, height: h });
    const tmp = path.join(ROOT, '_measure.html');
    fs.writeFileSync(tmp, page(fill(tpl(j.template), j.data)));
    await pg.goto('file://' + tmp);
    await pg.evaluate(() => document.fonts.ready);
    const items = await pg.evaluate(() => {
      const out = [];
      const post = document.querySelector('.post');
      const box = el => { const r = el.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; };
      const rgb = s => { const m = s.match(/rgba?\(([^)]+)\)/); if (!m) return null; const [r, g, b, a] = m[1].split(',').map(parseFloat); if (a === 0) return null; return [r, g, b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('').toUpperCase(); };
      const style = el => {
        const c = getComputedStyle(el);
        return { font: c.fontFamily.split(',')[0].replace(/"/g, ''), size: parseFloat(c.fontSize), weight: parseInt(c.fontWeight), italic: c.fontStyle === 'italic', color: rgb(c.color), tracking: parseFloat(c.letterSpacing) || 0, lineHeight: parseFloat(c.lineHeight), upper: c.textTransform === 'uppercase', align: c.textAlign };
      };
      // Words with per-word rects, so headline line breaks can be reproduced.
      const words = el => {
        const res = [];
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
        let n;
        while ((n = walker.nextNode())) {
          if (n.nodeType === 1) { if (n.tagName === 'BR') res.push({ t: '\n', y: 0, x: 0, st: style(el) }); continue; }
          const parent = n.parentElement;
          if (parent.closest('.motif')) continue;
          // skip text that belongs to a nested block (measured separately)
          if (parent !== el && getComputedStyle(parent).display === 'block') continue;
          const st = style(parent);
          const text = n.textContent;
          const re = /\S+|\s+/g; let m;
          while ((m = re.exec(text))) {
            const r = document.createRange(); r.setStart(n, m.index); r.setEnd(n, m.index + m[0].length);
            const rects = r.getClientRects(); const rr = rects[0] || r.getBoundingClientRect();
            res.push({ t: m[0], y: Math.round(rr.top), x: rr.left, st });
          }
        }
        return res;
      };
      const isBlockText = el => {
        if (el.closest('.motif')) return false;
        return [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
      };
      const all = [...post.querySelectorAll('*')].filter(e => !e.closest('.motif'));
      for (const el of all) {
        const c = getComputedStyle(el);
        if (c.visibility === 'hidden' || c.display === 'none') continue;
        const b = box(el);
        if (el.tagName === 'IMG') { out.push({ kind: 'image', src: el.getAttribute('src'), ...b, focus: c.objectPosition, cover: c.objectFit === 'cover', radius: parseFloat(c.borderRadius) || 0, z: el.classList.contains('bg') ? 0 : 2 }); continue; }
        if (el.tagName === 'svg') {
          if (el.closest('.motif')) continue;
          const color = rgb(c.color);
          const svg = el.outerHTML.replace(/currentColor/g, '#' + color);
          out.push({ kind: 'svg', svg, ...b, z: 3 });
          continue;
        }
        if (el.tagName.match(/^(path|circle)$/i)) continue;
        const bg = rgb(c.backgroundColor);
        const hasGradient = c.backgroundImage !== 'none';
        const bw = parseFloat(c.borderTopWidth) || 0, bc = bw ? rgb(c.borderTopColor) : null;
        if ((bg || hasGradient) && !el.classList.contains('post')) {
          out.push({ kind: 'rect', ...b, line: bc ? { color: bc, width: bw } : null, fill: bg || '102040', alpha: hasGradient ? 55 : (parseFloat(c.backgroundColor.split(',')[3]) < 1 && c.backgroundColor.startsWith('rgba') ? Math.round((1 - parseFloat(c.backgroundColor.split(',')[3])) * 100) : 0), radius: parseFloat(c.borderRadius) || 0, z: el.classList.contains('overlay') ? 1 : 2, cls: el.className });
        }
        if (!bg && !hasGradient && bc && !el.classList.contains('post')) {
          out.push({ kind: 'rect', ...b, fill: null, line: { color: bc, width: bw }, alpha: 100, radius: parseFloat(c.borderRadius) || 0, z: 2, cls: el.className });
        }
        if (isBlockText(el)) {
          const ws = words(el).filter(w => w.t.trim() || true);
          if (!ws.length) continue;
          // text box bounds = union of word rects
          const st = style(el);
          const tb = box(el);
          const padL = parseFloat(c.paddingLeft), padT = parseFloat(c.paddingTop), padR = parseFloat(c.paddingRight), padB = parseFloat(c.paddingBottom);
          out.push({ kind: 'text', display: c.display, blockKids: [...el.children].some(ch => getComputedStyle(ch).display === 'block'), x: tb.x + padL, y: tb.y + padT, w: tb.w - padL - padR, h: tb.h - padT - padB, st, words: ws, cls: el.className, z: 4, balance: c.textWrap === 'balance' || el.classList.contains('headline') || el.classList.contains('name') });
        }
      }
      return out;
    });
    spec.push({ template: j.template, size: j.data.size, width: 1080, height: h, items, sample: j.data });
    fs.unlinkSync(tmp);
    console.log(key, items.length, 'items');
  }
  await browser.close();
  fs.mkdirSync(outDir(), { recursive: true });
  fs.writeFileSync(path.join(outDir(), 'spec.json'), JSON.stringify(spec, null, 1));
  console.log('spec ->', path.relative(ROOT, path.join(outDir(), 'spec.json')));
})();
