# CtaBand

The section that closes every page: the skyline photograph under a navy gradient, an eyebrow, a serif invitation with one italic word, a lead, the amber Schedule button, and both office numbers behind a mist rule.

## The consumer provides
- The eyebrow and the heading, which change per page ("Ready to see your best?", "Meet your doctor in person.", "Book a comprehensive exam.", "Ask us in person."), and the one-sentence lead.
- Nothing else: the photo, the button and the office block are fixed.

## Classes (`bundle.css`)
- `.cta.on-navy` with `.bg > img`; `.cta::before` is a left-heavy navy gradient (94% to 50%). Padding 80 to 160px.
- `.cta .container` is a 1.2fr / 1fr grid; `.offices` sits behind a 1px mist rule at 30% opacity (a top rule on phones). `.office a` is the serif at 28px in white with tabular figures.
- The italic word renders bright mist with a faint shadow, as in the hero.

## Don't
- Don't add a secondary button; the phone numbers are the alternative.
- Don't use a different photograph per page; the repeated skyline is the brand's closing signature.
