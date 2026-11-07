# LogoRow

The insurance section: a centered header and a row of plan logos, each on a white card with a hairline border, shown in full color.

## The consumer provides
- The plan logos from the Insurance asset group, each with the plan's name as `alt`.
- The centered `section-head` with the eyebrow, `h2` and an optional one-line note in `mute`.

## Classes (`bundle.css`)
- `.logos` is six columns (three on tablet, two on phones) with `space-4` gaps. `.logos .logo` is 84px tall, `canvas`, hairline border, `radius-sm`; the image is capped at 44px tall.
- No filter, no grayscale, no hover effect. The practice asked for the logos in their own colors.

## Don't
- Don't add plans without their official logo; a text chip reads as unofficial.
- Don't reorder for aesthetics; keep Medicare first.
