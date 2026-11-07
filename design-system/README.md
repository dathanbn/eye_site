Eye Site Sacramento is an ophthalmology and optometry practice with offices in Sacramento and Folsom, California. Five surgeons with roughly 35 years of experience each, two optometrists, and the tagline "See Your Best." This system is how the brand looks and sounds on the website and on social media. Read this file first, then `tokens.json` and each component's README.

## Content fundamentals

- Speak to the patient as "you"; the practice is "we". Doctors are "Dr. Jones" or "Richard A. Jones, M.D.", never a first name alone.
- Plain language first, medical term second: "cloudy lens (cataract)", "eye pressure (glaucoma)", "laser vision correction (LASIK)".
- Confident, warm, specific. Write "Our surgeons have performed cataract surgery in Sacramento for 35 years", not "world-class care". Quote real credentials: Best Doctors in Sacramento by Sacramento Magazine and Sactown Magazine.
- Sentence case everywhere except the `eyebrow` style, which is uppercase. No exclamation points in headlines; one is allowed in a social caption.
- The tagline "See Your Best" is title case and never altered.
- Button labels are verbs: "Schedule Appointment", "Call Folsom Office", "Learn About LASIK".
- Both offices appear together wherever one does: Sacramento (4925 J Street, 916-452-8105) first, Folsom (2160 E Bidwell Street, 916-983-9823) second.
- No emoji in website copy. In social captions, at most one, never in the graphic.

## Color

- Keep the page on `canvas`. Tint a section with `ice` when the page needs rhythm; never with amber, sky or a gradient.
- Headings in `ink`, body in `slate`, captions in `mute`. Each clears 4.5:1 on `canvas`, `surface` and `ice`.
- `navy` is the fill for the utility bar, the hero overlay, the appointment band; `navy-deep` for the footer. On them, headings are `on-navy` and body is `on-navy-soft`.
- `blue` is the working brand color: links, eyebrows, icons, secondary button outlines, the active nav link, stat numbers. Hover and pressed states move to `blue-deep`.
- `blue-figure`, `sky` and `mist` are the logo figure's gradient, top to bottom. Use them for illustration, chart fills, dividers on navy and the input focus halo. They are never text on a light surface.
- `amber` is the one accent and the action color: the primary button, the 2px active nav underline, the amber rule on social posts. One amber element per view. Amber always carries `on-amber` text, never white.
- `amber-ink` on `amber-pale` for a chip such as "New patients welcome". `success` and `error` always travel with a word or icon.
- The `focus` ring is 2px solid, offset 2px, on every interactive element, in both themes.
- The dark theme exists for dark social posts and a possible dark mode. In it, `blue` lightens to stay legible as text, so a blue fill there takes `on-blue` (dark) text.

## The feel

Two references set the tone, translated onto the clinic's white and blue: the editorial calm of a quiet-living brand and the precision of a well-made software product.

- Headlines are large, light and serif, with one italic word carrying the emotion ("See your *best*."). Hierarchy comes from scale and the serif/sans contrast, never from bold weights.
- Body copy is light-weight Inter with generous leading. Labels, nav links, buttons and eyebrows are small, uppercase and widely tracked; they read as quiet taxonomy against the big serif.
- Sections are tall and unhurried: `space-24` or more between them, and full-bleed split panels where a photograph takes one half and a short statement the other.
- Hairlines do the structural work. Cards are rare; a hairline rule above a row or between columns is preferred over a bordered box. When a card is needed it has a 1px `hairline` border, `radius-sm` corners and no shadow.
- Surfaces step, they do not float: `canvas` → `surface` → `ice` → `navy`. No drop shadows at rest, no gradients, no glow.
- Photography is desaturated and cool, with a `navy` overlay on heroes. It carries the atmosphere so the chrome can stay minimal.
- One accent, `amber`, appears once per view on the action that matters. Everything else is navy, blue and gray.
- The nav is transparent over the hero and becomes a frosted `canvas` bar on scroll.

## Typography

- Headlines in the `serif` family (Playfair Display, weight 400, italic for one emphasized word): `display`, `h1`, `h2`, `h3`, `stat`, `display-italic`. Everything read in the `sans` family (Inter): `lead` and `body` at weight 300, `body-sm` and `caption` at 400, labels at 500.
- Both families are hosted on Google Fonts. Load them with one link tag; there are no font files in this system:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
```

- Never set body copy in the serif; never set a headline in the sans. Never push Playfair above weight 500.
- `h2` and above get `text-wrap: balance` and tracking of -0.02em. Body copy measures `max-width: 65ch`. Numbers that line up use `font-variant-numeric: tabular-nums`.
- `eyebrow`, `button` and `ui` (nav) are uppercase and tracked 0.12em to 0.2em, echoing the spaced SACRAMENTO in the logo. Form labels use `ui` in sentence case with no tracking.
- Minimum text size is 14px on the web and 36px on a 1080px social graphic. The body size is 18px because many patients are over 60; light weight never goes below 18px, and 16px text is set at weight 400.
- On mobile, `display` drops to 44px, `h1` to 38px, `h2` to 32px.

## Spacing and layout

- A 4px base; use only the `space-*` steps. Sections pad `space-24` on desktop and `space-16` on mobile. Cards pad `space-8` on desktop and `space-6` on mobile.
- Content container 1200px, reading container 720px for education pages. Grid gutters `space-6`.
- Services sit in 3 columns, doctors in 4, locations in 2, collapsing to 2 then 1.
- Every tappable element is at least 48px tall. Phone numbers are `tel:` links at `title` size.
- When a section feels empty, add a photograph, not another card.

## Shape, borders and elevation

- `radius-pill` for buttons and chips, `radius-sm` for cards and inputs, `radius-md` for images and the logo tile, `radius-lg` only for the appointment band and modals. Full-bleed photographs and split panels have no radius at all.
- Hairlines first, shadows second. A resting card has a 1px `hairline` border and no shadow. `shadow-card` appears only on the frosted nav bar once the page scrolls; `shadow-floating` on dropdowns, dialogs and toasts. Cards do not lift on hover; the title underlines instead.
- No glassmorphism, no inner glows, no gradients except the logo figure's own blue gradient used as an illustration fill.

## Motion

- Animate only `transform` and `opacity`. Never `transition: all`.
- Every entrance uses `ease-out`; nothing on the interface exceeds 300ms. `duration-fast` for hover color, `duration-base` for presses and card hover, `duration-slow` for a modal or the mobile nav sheet. Exits are faster than entrances.
- Every pressable element scales to `press-scale` on `:active`.
- Nothing enters from `scale(0)`. Dropdowns start at `scale(0.96)` and `opacity: 0` with `transform-origin` at the trigger; modals stay centered.
- Hover effects sit behind `@media (hover: hover) and (pointer: fine)`. Under `prefers-reduced-motion: reduce`, keep opacity fades and remove movement.
- No scroll-triggered fade-ins, no parallax, no animated counters. A page is fully readable at rest.

## Imagery

- Real doctors, real staff, real rooms at both offices, in natural light. No stock models in white coats, no stethoscopes, no floating eyeballs.
- Hero photographs take a `navy` overlay at 45 to 60% so `on-navy` text clears contrast. Doctor portraits are 4:5 with `radius-md`; office photos are 3:2.
- The logo lockup (see Assets, Logos) appears once per page and once per social post, with `space-6` clear space on all sides. On navy, place it on a `canvas` tile with `radius-md`; never recolor, stretch or redraw it. The eye arc may be cropped from the real artwork as a large corner motif.

## Iconography

- Lucide icons, 24px, 1.75px stroke, outlined only. Set in `blue` inside a 48px `ice` circle on light surfaces, or in `mist` on navy. No filled icon sets, no emoji, no custom illustrations of eyes.

## Components

Each component folder holds a live preview and a README that says what the consumer provides. Button, SectionHeader, ServiceCard, DoctorCard, AppointmentBand, Input, Chip, StatTile and SocialPost cover the website and the social kit. Build new pieces from the same tokens and name them in the same way.

## Social media

See the Social section for the four formats (square, portrait, story, landscape) and the four templates (education, announcement, photo, review) that cover Instagram, Facebook, Google Business Profile and LinkedIn.
