# Footer

The `navy-deep` footer: the inverted mark and wordmark with a two-line description, a Practice link column, a column per office, and a bottom line with the copyright and the tagline.

## The consumer provides
- The Practice links (page list plus Request an appointment).
- Nothing else changes; the office columns mirror the Locations block and the copyright year updates once a year.

## Classes (`bundle.css`)
- `.footer` pads 56 to 96px above and 32px below; `.footer-grid` is 1.4fr / 1fr / 1fr / 1fr (two columns on tablet, one on phones). `h4` is 12px uppercase `on-navy`; links and text are 15px `on-navy-soft`, underlining on hover.
- `.footer .brand img` is the mark at 48px inverted to white; the wordmark lines are white and mist.
- `.footer-bottom` has a 20% mist rule above it and 13px text at 70% mist.

## Don't
- Don't add social icons until the practice's accounts are active and linked.
- Don't restate the tagline anywhere else on the page; this is its one home.
