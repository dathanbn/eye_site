# AppointmentBand

The navy panel that closes nearly every page: a serif invitation, the amber Schedule Appointment button and both office phone numbers.

## The consumer provides
- The heading, one line, usually "Ready to see your best?" or a page-specific variant ("Ask us about the Light Adjustable Lens").
- Optional eyebrow such as "New patients welcome".
- The scheduling `href`.
- Nothing else; the offices, numbers and hours are fixed brand content and must match the footer.

## Spec
- `navy` fill, `on-navy` text, `radius-lg`, padding `space-12` (`space-8` on mobile), two columns at 1.3fr / 1fr that stack on mobile with the button first.
- Eyebrow in `eyebrow` style, `mist`. Heading in `h2`, `on-navy`. Button is the primary Button.
- Offices sit behind a 1px `mist` rule at 35% opacity: office label in `caption` `mist`, phone number in `title` `on-navy` with tabular figures as a `tel:` link, address and hours in `caption` `mist`.
- Sacramento is always listed before Folsom.

## Don't
- Don't add a photograph behind the band; the hero already has one.
- Don't add a secondary button; the phone numbers are the alternative action.
- Don't place two bands on one page.
