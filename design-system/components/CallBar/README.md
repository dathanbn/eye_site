# CallBar

A bar fixed to the bottom of every page on phones (under 768px) with two tap-to-call cells, one per office. On larger screens it does not render; the utility bar and the CTA band carry the numbers there.

## The consumer provides
- Nothing variable. The two `tel:` links, labels and numbers are fixed brand content and must match the utility bar, Locations block and footer. Place the `nav.callbar` just before the closing script on every page.

## Classes (`bundle.css`)
- `.callbar` is a two-column grid with a hairline gap and top border, `canvas` cells, 60px tall, padded for the phone's bottom safe area, with a soft upward shadow. The body gets matching bottom padding so the footer is never hidden behind it.
- Each cell: an 18px `blue` phone icon, a 10px uppercase `blue` label ("Call Sacramento", "Call Folsom"), and the number at 15px in `ink` with tabular figures; both lines never wrap. Pressing a cell tints it `ice`.
- The mobile nav sheet's buttons sit above the bar.

## Don't
- Don't add a third cell (scheduling lives in the nav sheet and the CTA band).
- Don't show it on tablets or desktops.

## Notes
- The bar sits at z-index 51, above the open menu sheet, so it is always reachable. The page reserves `scroll-padding-bottom: 96px` under 768px so a focused field never hides behind it.
- Under 360px the icon, gap and number shrink slightly so both numbers fit.
