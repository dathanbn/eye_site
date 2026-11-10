// Builds the Canva import files from out/spec.json (written by measure.js):
//   out/canva/eye-site-social-templates-square.pptx
//   out/canva/eye-site-social-templates-portrait.pptx
// Every text run is a real text box in Playfair Display / Inter, so Canva keeps it editable.
// Usage: node measure.js && node build-pptx.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pptxgen = require('pptxgenjs');

const ROOT = __dirname;
const OUTDIR = path.join(ROOT, 'out', 'canva');
const ASSETS = path.join(OUTDIR, 'assets');
fs.mkdirSync(ASSETS, { recursive: true });
const args = process.argv.slice(2);
const specDir = path.join(ROOT, 'out', (args.find(a => a.startsWith('--out=')) || '--out=').split('=')[1]);
const baseName = (args.find(a => a.startsWith('--name=')) || '--name=eye-site-social-templates').split('=')[1];
const sizesWanted = ((args.find(a => a.startsWith('--sizes=')) || '--sizes=square,portrait').split('=')[1]).split(',');
const spec = JSON.parse(fs.readFileSync(path.join(specDir, 'spec.json'), 'utf8'));
const PX = 1 / 96;                   // px -> inches
const PT = 0.75;                     // px -> points

const ORDER = [...new Set(spec.map(s => s.template))];
const NOTES = {
  education: 'Education (paper). Tips, condition explainers, FAQ answers. Swap or delete the photo band; keep one amber element (the rule). Chip is optional.',
  announcement: 'Announcement (navy). Hours, closures, new services. Keep the phone number of the office concerned in the serif.',
  photo: 'Photo. Team news, awards, office photos. Replace the photograph; the navy overlay stays on top so white text always reads.',
  review: 'Review (ice). Quote real reviews with permission, under about 40 words. Stars are the one amber element.',
  doctor: 'Doctor spotlight. Replace the portrait (at least 1200px tall), name, role and one sourced accolade.',
  'carousel-cover': 'Carousel cover (navy). Page 1 of a multi-slide explainer; the logo appears here only.',
  'carousel-slide': 'Carousel slide. Duplicate per step; update the number, counter and progress bar.'
};

async function cropCover(src, w, h, focus) {
  const file = path.join(ROOT, src);
  const img = sharp(file); const meta = await img.metadata();
  const [fxs, fys] = (focus || '50% 50%').split(' ');
  const pct = (s, d) => s === 'center' ? 0.5 : s.endsWith('%') ? parseFloat(s) / 100 : d;
  const fx = pct(fxs, 0.5), fy = pct(fys || 'center', 0.5);
  const scale = Math.max(w / meta.width, h / meta.height);
  const cw = Math.round(w / scale), ch = Math.round(h / scale);
  const left = Math.round((meta.width - cw) * fx), top = Math.round((meta.height - ch) * fy);
  const out = path.join(ASSETS, `${path.basename(src, path.extname(src))}-${Math.round(w)}x${Math.round(h)}.jpg`);
  const targetW = Math.min(Math.round(w) * 2, cw * 2);
  await img.extract({ left, top, width: cw, height: ch }).resize(targetW).jpeg({ quality: 92 }).toFile(out);
  return out;
}

async function rasterSvg(svg, w, h, name) {
  const scaled = svg.replace(/<svg([^>]*)>/, (m, attrs) => `<svg${attrs.replace(/\s(width|height|style)="[^"]*"/g, '')} width="${Math.round(w * 4)}" height="${Math.round(h * 4)}">`);
  const out = path.join(ASSETS, name + '.png');
  await sharp(Buffer.from(scaled)).png().toFile(out);
  return out;
}

function runsFor(item) {
  const runs = [];
  let lastY = null;
  const st0 = item.st;
  for (const w of item.words) {
    let t = w.t;
    if (t === '\n') { if (runs.length) runs[runs.length - 1].options.breakLine = true; lastY = null; continue; }
    if (!t.trim() && lastY === null) continue;      // leading whitespace
    const st = w.st;
    const txt = (st.upper ? t.toUpperCase() : t).replace(/\s+/g, ' ');
    const brk = item.balance && lastY !== null && t.trim() && w.y > lastY + 2;
    if (t.trim()) lastY = w.y;
    if (brk && runs.length) { runs[runs.length - 1].options.breakLine = true; }
    if (brk && !txt.trim()) continue;
    const prev = runs[runs.length - 1];
    const o = { fontFace: st.font, fontSize: +(st.size * PT).toFixed(1), color: st.color || st0.color, italic: st.italic, bold: false, charSpacing: +(st.tracking * PT).toFixed(2) };
    if (prev && !prev.options.breakLine && JSON.stringify({ ...prev.options, breakLine: 0 }) === JSON.stringify({ ...o, breakLine: 0 })) prev.text += txt;
    else runs.push({ text: txt, options: o });
  }
  // trim trailing whitespace of each run before a break and at the end
  for (const r of runs) if (r.options.breakLine) r.text = r.text.replace(/\s+$/, '');
  if (runs.length) runs[runs.length - 1].text = runs[runs.length - 1].text.replace(/\s+$/, '');
  return runs;
}

(async () => {
  for (const size of sizesWanted) {
    if (!spec.some(s => s.size === size)) continue;
    const pres = new pptxgen();
    const H = size === 'portrait' ? 1350 : size === 'story' ? 1920 : 1080;
    pres.defineLayout({ name: 'IG', width: 1080 * PX, height: H * PX });
    pres.layout = 'IG';
    pres.title = `Eye Site Sacramento social templates (${size})`;
    pres.author = 'Eye Site Sacramento';
    for (const name of ORDER) {
      const t = spec.find(s => s.template === name && s.size === size);
      if (!t) continue;
      const slide = pres.addSlide();
      slide.background = { color: 'FAF6F0' };
      if (name !== 'photo') {
        slide.addImage({ path: path.join(specDir, 'backdrops', `${name}-${size}.png`), x: 0, y: 0, w: 1080 * PX, h: H * PX, objectName: 'Backdrop (surface and motif)' });
      }
      const items = t.items.map((it, i) => ({ ...it, i })).filter(it => !(it.kind === 'text' && it.display === 'inline'))
        .sort((a, b) => (a.z - b.z) || (a.i - b.i));
      let n = 0;
      for (const it of items) {
        n++;
        const box = { x: it.x * PX, y: it.y * PX, w: it.w * PX, h: it.h * PX };
        if (it.kind === 'image') {
          let file = path.join(ROOT, it.src);
          if (it.cover) file = await cropCover(it.src, it.w, it.h, it.focus);
          const r = it.radius ? Math.min(it.radius, it.h / 2) : 0;
          slide.addImage({ path: file, ...box, objectName: path.basename(it.src), ...(r >= it.h / 2 ? { rounding: true } : {}) });
        } else if (it.kind === 'rect') {
          const radius = it.radius ? Math.min(it.radius, it.h / 2) * PX : 0;
          const opts = { ...box, fill: { color: it.fill || 'FFFFFF', transparency: it.fill ? (it.alpha || 0) : 100 }, line: it.line ? { color: it.line.color, width: it.line.width * PT } : { color: it.fill || 'FFFFFF', transparency: 100, width: 0 }, objectName: it.cls || 'shape' };
          if (radius) slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { ...opts, rectRadius: radius });
          else slide.addShape(pres.shapes.RECTANGLE, opts);
        } else if (it.kind === 'svg') {
          const file = await rasterSvg(it.svg, it.w, it.h, `${name}-${size}-icon-${n}`);
          slide.addImage({ path: file, ...box, objectName: 'icon' });
        } else if (it.kind === 'text') {
          const runs = runsFor(it);
          if (!runs.length) continue;
          const st = it.st;
          let y = it.y, h = it.h, w = it.w;
          if (it.blockKids) {                       // only this element's own text, not its block children
            const ys = it.words.filter(x => x.t.trim()).map(x => x.y);
            y = Math.min(...ys) - (st.lineHeight - st.size) / 2;
            h = Math.max(...ys) + st.lineHeight - y;
          }
          if (st.weight <= 300) w = Math.min(w * 1.05, 1080 - 96 - it.x);   // Light runs as Regular in PPT: a little wider
          if (/quote-mark/.test(it.cls)) y += st.size * 0.12;
          box.x = it.x * PX; box.y = y * PX; box.w = w * PX; box.h = h * PX;
          slide.addText(runs, {
            x: box.x, y: box.y, w: box.w + 0.06, h: Math.max(h, st.lineHeight) * PX + 0.04,
            fontFace: st.font, fontSize: +(st.size * PT).toFixed(1), color: st.color,
            lineSpacing: +(st.lineHeight * PT).toFixed(1), valign: 'top', align: st.align === 'right' ? 'right' : st.align === 'center' ? 'center' : 'left', margin: 0, isTextBox: true, wrap: true,
            objectName: it.cls || 'text'
          });
        }
      }
      slide.addNotes(NOTES[name] || `Brand board page: ${name}. Keep as reference; copy this design to start new work.`);
    }
    const file = path.join(OUTDIR, `${baseName}-${size}.pptx`);
    await pres.writeFile({ fileName: file });
    require('child_process').execSync(`zip -dq "${file}" '*/' || true`);
    console.log('wrote', path.relative(ROOT, file));
  }
})();
