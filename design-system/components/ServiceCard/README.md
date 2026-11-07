# ServiceCard

A linked photo card for the specialties grid: a 16:10 photograph, a serif title, two lines of description and a Learn more link.

## The consumer provides
- A photograph (the practice's own where one fits, otherwise a desaturated clinical stock image), an `alt`.
- A title in sentence case, one or two sentences of plain-language description with the medical term in parentheses where useful, and the `href` of the specialty section. The whole card is the link; the Learn more text is a `span.link`, not a second anchor.

## Classes (`bundle.css`)
- `.cards` is a 3-column grid with `space-6` gaps (2 on tablet, 1 on phones). `.card` is `canvas`, 1px hairline, `radius-sm`, clipped corners. `.card .photo` is 16:10 with a hairline underneath; `.photo.zoom img` scales to 1.04 over 1.2s on hover. `.card .body` pads `space-6`, with `space-8` at the bottom.
- Title in `h3`, body 16px, link in `.link`. On hover the border becomes `sky` and the title `blue`.

## Don't
- Don't add icons, badges or a colored edge.
- Don't lift the card with a shadow on hover; the photo zoom is the hover.
