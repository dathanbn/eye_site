# Chip

A 36px pill label. The site keeps `.chip` for text-only plan lists on pages without the logo row, and `.chip.amber` for the one highlight such as "New patients welcome".

## The consumer provides
- The label, one to four words. `amber` for the single highlight per view.

## Classes (`bundle.css`)
- `.chips` wraps with `space-2` gaps. `.chip` is `canvas` with a hairline border and 15px `ink` text; `.chip.amber` is `amber-pale` with `amber-ink` text and no border.

## Don't
- Don't use an `amber` fill with white text.
- Don't make chips clickable without a 48px tap target around them.
