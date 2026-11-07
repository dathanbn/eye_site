# Chip

A small pill label for insurance plans, accepted states and the one amber highlight such as "New patients welcome".

## The consumer provides
- The label, one to four words in sentence case or the plan's proper name.
- A variant: default, `success` (with a check icon) or `amber`.

## Spec
- Height 32px, padding 0 14px, `radius-pill`, label in `ui`.
- Default: `surface` fill, 1px `hairline` border, `ink` text.
- Success: `canvas` fill, `hairline` border, `success` text with a 14px check icon; the word carries the meaning, the color only reinforces it.
- Amber: `amber-pale` fill, `amber-ink` text, no border. One amber chip per view, and not on the same view as a primary button hero unless the chip sits far from it.
- Chips wrap in a row with `space-2` gaps.

## Don't
- Don't use an `amber` fill with white text.
- Don't make chips interactive without a visible focus ring and a 48px tap area around them.
