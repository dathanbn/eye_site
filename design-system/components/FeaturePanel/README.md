# FeaturePanel

A full-bleed 50/50 split: a photograph on one side, a statement panel on the other. Used in pairs on the homepage, the first on `ice`, the second on `navy` and flipped so the photos alternate sides.

## The consumer provides
- A photograph with an `alt`, optionally an inline `object-position`.
- An eyebrow, an `h2` of at most 14 characters per line (the panel limits it), one paragraph of at most 46ch, an optional checklist of three items, and one `.link`.
- `.flip` on the section to put the panel first; `.panel.ice` or `.panel.navy.on-navy`.

## Classes (`bundle.css`)
- `.feature` is a 2-column grid at 72vh minimum; `.feature .photo` fills its half (at least 440px). On tablet and phones the photo stacks above the panel at 320px.
- `.feature .panel` pads 40 to 112px fluidly and centers its content. `.panel ul li` is a 20px check icon in `amber` beside 16px text.
- On navy the eyebrow is `mist`, the heading `on-navy`, the body `on-navy-soft`, the italic word `mist`, the link white.

## Don't
- Don't use more than two panels in a row, and never two of the same color in a row.
- Don't put a button in a panel; the text link is the action, the CTA band carries the button.
