# Locations

The two-office block: for each office an eyebrow, the phone number in the serif, a definition list of address, hours and one extra line, and a Directions link to Google Maps.

## The consumer provides
- Nothing that changes: the two offices' data is fixed brand content and must match the utility bar, the CTA band and the footer. Sacramento is always first.
- On the Locations page, a 3:2 photo above each office in a `.stack`.

## Classes (`bundle.css`)
- `.locations` is a 2-column grid with a fluid gap (one column on phones). `.location` has a hairline above and `space-4` gaps. `.phone` is the serif at 28 to 34px with tabular figures and a `tel:` link. `dl` is a two-column grid, `dt` in `mute`, `dd` in `ink`.
- Directions links open Google Maps in a new tab with the diagonal arrow icon.

## Don't
- Don't embed a map; link out.
- Don't abbreviate hours differently from the footer.
