# TrustPanel

The white panel that floats over the bottom of the homepage hero with four proof points. Each answers a question a new patient asks: Are they good? Are they experienced? Will I be treated well? Will they take my insurance?

## The consumer provides
- Exactly four items. Each has a `.num` (two or three words in the serif, optionally one `<em>` word in blue), a `.label` of one sentence, and a `.src` line naming the source or scope in uppercase.
- Only facts with a source. The current four are: Best Doctors (Sacramento Magazine, Sactown Magazine); since 1987 (American Board of Ophthalmology); truly seen (the practice's own promise, from its old Specialties page); all major plans.

## Classes (`bundle.css`)
- `.container.trust` pulls the panel up 92px over the hero (64px on tablet). `.trust-panel` is `canvas`, hairline border, `radius-md`, `shadow-floating`, four equal columns with hairline dividers; two columns on tablet, one on phones.
- `.trust-item .num` is the serif at 30 to 40px in `ink`; `.label` 15px `slate`; `.src` 12px uppercase `mute`.

## Don't
- Don't use it for anything numeric that changes often, such as review counts, unless someone will keep it current.
- Don't add icons; the serif figure is the graphic.
