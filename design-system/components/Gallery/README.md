# Gallery

Three office photographs on an `ice` section: one tall tile spanning two rows on the left and two 4:3 tiles on the right.

## The consumer provides
- Three real photographs of the offices with alt text, the first one strong enough to carry the tall slot.
- The section header above it (eyebrow, `h2`, and a `.link` to the Locations page).

## Classes (`bundle.css`)
- `.gallery` is a 1.4fr / 1fr / 1fr grid with `space-4` gaps; the first `.photo` spans two rows. On phones the first tile goes full width at 16:10 and the others sit side by side.
- Tiles are `.photo.zoom` with `radius-sm`.

## Don't
- Don't mix stock photos into the gallery; it exists to show the real rooms.
- Don't caption the tiles; the heading does the talking.
