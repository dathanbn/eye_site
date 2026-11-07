# StatTile

A big serif number in blue over a short sans label, used in a row of two or three to state the practice's real credentials.

## The consumer provides
- A true, specific number with its unit ("35 yrs", "7", "2"). No rounded-up marketing figures and no counters that animate.
- A label of three to six words in sentence case.

## Spec
- Number in `stat`, `blue`, tabular figures. Label in `ui`, `slate`. Gap `space-2`.
- Each tile sits behind a 1px `hairline` left rule with `space-4` padding; no background, no card.
- Two or three tiles per row, equal widths, `space-6` gutters; they stack on mobile.

## Don't
- Don't animate the numbers on scroll.
- Don't exceed three tiles; more than three reads as filler.
- Don't set the number in amber.
