# TrustPanel

The white panel that floats over the bottom of the homepage hero: four proof points in a row, and the navy Kings strip as its bottom edge.

## The consumer provides
- Exactly four items. Each has a `.num` (two or three words in the serif, optionally one `<em>` word in blue), a `.label` of one sentence, and a `.src` line naming the source or scope in uppercase. The current four: Best Doctors (Sacramento Magazine, Sactown Magazine); since 1987 (American Board of Ophthalmology); Truly seen (our promise); all major plans.
- The Kings strip as the last child, `div.kings-strip`: the white one-color SAC crest (`assets/Partners/kings-sac-white.png`), the lettering, and the doctor credit. Its wording is fixed: "OFFICIAL / OPHTHALMOLOGIST OF THE / SACRAMENTO KINGS", then "TEAM OPHTHALMOLOGIST" over "Dr. Sina Rashidi, M.D." The designation belongs to Dr. Rashidi, so it is singular and always names him.

## Classes (`bundle.css`)
- `.container.trust` pulls the panel up 92px over the hero (64px under 900px). `.trust-panel` is `canvas`, hairline border, `radius-md`, `shadow-floating`, four equal columns with hairline dividers; two columns under 900px and one under 600px, where the items tighten to 18px of padding and a 28px figure.
- `.trust-item .num` is the serif at 30 to 40px in `ink`; `.label` 15px `slate`; `.src` 12px uppercase `mute`.
- `.kings-strip` spans all columns: a navy radial gradient (lighter at the left behind the crest), 104px tall, bottom corners rounded to match the panel. `.crest` is 76px tall with a soft drop shadow, no box. `.official` is 10px tracked 0.44em in `mist` followed by a hairline rule; `.of` is light uppercase at 15 to 19px; `.plate` is a white parallelogram skewed 14 degrees with navy lettering, "Kings" in bold.
- `.who` sits at the far right behind a thin mist divider. The name is a link to the doctor's profile that looks like plain white text at rest; a 1px `mist` underline appears on hover (fine pointers only) and a mist focus ring on keyboard focus.
- Under 900px the strip stacks and centers: crest, lettering with rules on both sides of "OFFICIAL", plate, then the credit above a top divider.
- Under 600px the strip becomes a compact row about 150px tall: a 54px crest beside left-aligned lettering (12px) and a smaller plate (13px), with the credit centered underneath.
- The strip is `role="group"` with an `aria-label`, so a screen reader announces it as one statement.

## Don't
- Don't put the crest on a white tile or recolor the plate. Don't use the Kings' purple anywhere on the site.
- Don't add a button to the strip; the name is the only link.
- Don't use the strip, the crest or the wording without the team's approval on file.
