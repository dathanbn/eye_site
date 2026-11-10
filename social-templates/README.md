# Eye Site Sacramento social templates

Six Instagram templates rendered from HTML so the fonts, colors and logo are always exact. Built from design-system/tokens.json and design-system/social.md.

| Template | Surface | Use for |
|---|---|---|
| education | paper | tips, condition explainers, FAQ answers |
| announcement | navy | hours, closures, new services; carries a phone number in the serif |
| photo | photo + navy overlay | team news, awards, office photos |
| review | ice | patient reviews quoted with permission; five amber stars are the one amber element |
| doctor | portrait left, paper panel | doctor spotlight with one sourced accolade |
| carousel | navy cover + paper numbered slides | multi-slide explainers; logo on the cover only |

Sizes: square 1080 x 1080 and portrait 1080 x 1350. Output is 2x PNG (2160 wide) for Instagram; `--1x` gives 1080 JPEG for Facebook and Google.

## Make a post
1. Add an entry under the template's key in `content.json` (copy an existing one). `id` becomes the file name. Wrap one word in `*asterisks*` for the italic blue accent word. No emoji in the graphic, no exclamation points.
2. Run `node render.js` (or `node render.js education` for one template). PNGs land in `out/`.
3. Every post still goes to practice administration for approval; a doctor signs off on medical claims and accolade wording.

First run on a new machine: `npm install playwright && npx playwright install chromium`. Or ask Claude to render it.

## Rules baked in (from social.md)
- 96px safe margin, text column 860px, body 820px.
- Headlines Playfair Display 400 at 84px / 1.08; body Inter 300 at 38px / 1.5; eyebrow Inter 500 at 30px, 0.2em tracking.
- One amber element per post (the rule, or the stars on a review). Never amber behind text.
- Logo once per post, 200px tall (180px on the doctor panel), on a white tile when the background is navy or a photo.
- Smallest text is 28px (website line 32px, slide counters 30px, accolade source 28px); everything readable is 38px or more.

## Photos
Doctor portraits are 600 x 900 today and get upscaled on the doctor template; ask the practice for portraits at least 1200 px tall. The office photo (1000 px wide) is soft at 2x; the skyline and clinical photos are fine.

## Warmth layer
Light posts sit on `paper` (#faf6f0, a warm off-white used only on social), with a faint ice crescent (the logo's eye arc) and an amber-pale disc behind the content. Chips in amber-pale/amber-ink carry a welcome line. These are social-only additions; the website tokens are unchanged.

## Canva
`node measure.js && node build-pptx.js` writes `out/canva/eye-site-social-templates-square.pptx` and `-portrait.pptx`: one page per template, every text run a real text box in Playfair Display / Inter, backdrop (surface + motif) as one image layer, logo and photos as separate images, rule, chips, tile and progress bar as shapes. Import each file into Canva (Create a design > Import file, or drag it onto the Canva home page); Canva has both fonts, so text stays editable. PPT has no Light weight, so body text imports as Inter Regular; set it to Light in Canva if you want it to match the PNGs exactly. Canva Teams is needed to publish them as Brand Templates; on a free account keep the imported design as the master and duplicate pages.

## Brand board (for Canva without a Pro brand kit)
`content-brand.json` renders seven reference pages (cover, two color pages, typography, logo, elements, voice) followed by one page per template. `node render.js --content=content-brand.json --out=brand` previews it; `node measure.js --content=content-brand.json --out=brand && node build-pptx.js --out=brand --name=eye-site-brand-board --sizes=portrait` writes `out/canva/eye-site-brand-board-portrait.pptx`. Import it into Canva once and keep it as the master: copy the design to start new work, and every swatch color is already in the document, so it shows under Document colors.

## The first nine posts
`content-launch.json` holds the launch set from the roadmap doc; `node render.js --content=content-launch.json --out=launch` renders it to `out/launch/`, captions in `out/launch/captions.md`. Placeholders in `assets/placeholders/` say what photo goes where; swap the path and re-render. A `series` entry is a carousel of mixed templates; `tone: "light"` on a carousel cover puts it on paper instead of navy.
