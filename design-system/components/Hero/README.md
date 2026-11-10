# Hero

The full-bleed photo opener. The homepage uses `.hero` with the `display` headline and the trust panel; inner pages use `.page-head` with an `h1` and a lead, no panel.

## The consumer provides
- A photograph wide enough for 2200px, in `.bg > img`. The homepage uses the practice's skyline; inner pages use a clinical photo or the Tower Bridge, positioned with an inline `object-position`.
- A headline with one `<em class="accent">` word (the last word reads best), a lead of one short sentence, and the two pills in `.hero-actions`. The homepage hero has no eyebrow; inner-page heroes keep one.
- On the homepage, the three trust items and the Kings strip (see TrustPanel) in `.container.trust` immediately after the hero.

## Classes (`bundle.css`)
- `.hero` is 96svh capped at 1040px with the text block vertically centered on the left (display headline fluid from 52px to 88px, lead on one line at up to 60ch) and `.hero-actions` positioned at the bottom center, 150px above the edge, so the trust panel sits beneath the pills. Below 768px the hero shrinks to its content, the text aligns to the bottom, and the pills stack full-width under the lead. `overflow: hidden` so the zoomed photo never shows past the overlay. `.hero::before` is the navy gradient (heavier on the left), `.hero::after` the bottom fade. The image is zoomed 6% and positioned at 60% 58%.
- `.page-head` is the inner-page version: at least 420px tall, the same gradient, `h1` in `on-navy`, lead at 86% white.
- Over the photo, `em.accent` renders bright mist (#d6e7f7) with a faint navy shadow, and `.btn-secondary` becomes a white outline with a translucent navy fill. Both rules live in `bundle.css`; never use the light-surface blue accent on a photo.

## Don't
- Don't put a dark photo under the gradient; the gradient assumes a mid-tone image.
- Don't exceed two lines of headline on desktop or three on mobile.
- Don't add a second overlay, a blur or a color grade.
