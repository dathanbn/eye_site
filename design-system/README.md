Eye Site Sacramento is an ophthalmology and optometry practice with offices in Sacramento and Folsom, in practice since 1987. This system is the live website at dathanbn.github.io/eye_site, taken apart into tokens, a stylesheet and components so that every new page and post matches it. Read this file first, then `tokens.json`, then the component you need. `components/bundle.css` is the website's own stylesheet with the tokens lifted out; link it after `tokens.css` and the class names below work as they do on the site.

## The look

Premium and cinematic, in the practice's own blue. A page opens with a full-bleed photograph under a navy gradient and a large light serif headline with one italic word, and closes the same way. Between them, white and ice sections carry hairline-ruled content, photo cards, split panels and real portraits. Proof is shown, not claimed: a floating trust panel names the awards and their sources and carries a navy strip for Dr. Rashidi's role as official ophthalmologist of the Sacramento Kings, every doctor card carries one accolade, the technology is named, the office photos are real, and the insurance row shows the actual plan logos. Navy-deep opens the page as a utility bar and closes it as the footer.

- Headlines in Playfair Display at weight 400 (`display`, `h1`, `h2`, `h3`); one word per headline may be italic in `blue` on light surfaces or bright mist (#d6e7f7 with a faint shadow) over a photograph. Reading text in Inter at weight 300; labels, buttons, nav and eyebrows in Inter at 500, uppercase and tracked 0.12em to 0.2em.
- Surfaces step: `canvas` → `surface` → `ice` → `navy` → `navy-deep`. No shadows except the floating trust panel and the frosted nav.
- Hairlines (`hairline`, 1px) divide everything. Cards have a 1px hairline border and `radius-sm`; they do not lift on hover, their photo zooms 4% over 1.2s and their title turns `blue`.
- One accent, `amber`, appears on the primary button, the active nav underline and the accolade icon. Never as a fill behind text other than the button, never with white text.
- Photographs are the practice's own where they exist (skyline, offices, doctors, the RxSight device) and desaturated clinical stock where they do not. Heroes take a navy gradient overlay heavier on the left so white text always clears the image.

## Content fundamentals

- "You" for the patient, "we" for the practice, "Dr. Jones" or "Richard A. Jones, M.D." for doctors. Plain language first, medical term second: "cloudy lens (cataract)".
- Sentence case everywhere except the uppercase label styles. One italic accent word per headline, usually the last one. No exclamation points on the site.
- Claims must be sourced. The trust panel and every accolade line on the site are either verified (Doximity, Sutter Health, Hill Physicians, PubMed, Sactown Magazine, the medical society) or the practice's own statements that the practice has confirmed. Never add an award, title, rating or "first in" claim without a source.
- Facts that must stay true: in practice since 1987; five board-certified ophthalmologists (American Board of Ophthalmology) and two optometrists; surgery takes place at an outpatient surgery center, not in the offices; the optometrists do routine and diabetic exams and medical eye care, not contact lenses; both offices have free parking; Sacramento 4925 J Street 916-452-8105 Mon to Fri 8:00am to 5:00pm; Folsom 2160 E Bidwell Street 916-983-9823 Mon to Thu 8:00am to 4:30pm, Fri 6:30am to 2:00pm.
- Button labels are verbs: Schedule Appointment, Meet the doctors, Learn more, Directions, Send request.

## Color

- Page on `canvas`; `surface` for the specialties section and form backgrounds; `ice` for the gallery section, feature panels and icon circles. `navy` for the hero overlay, dark feature panels and the CTA overlay; `navy-deep` for the utility bar and footer.
- `ink` for headings, `slate` for body, `mute` for captions and source lines, all on canvas, surface and ice. On navy: `on-navy` for headings and phone numbers, `on-navy-soft` (mist) for body and labels.
- `blue` for eyebrows, links, doctor roles, the italic accent word on light surfaces, trust-panel numbers' italic word, and secondary button outlines. `blue-deep` for hover states and the SACRAMENTO wordmark line.
- `amber` for the primary button (`on-amber` text), the 2px active nav underline, the award icon beside accolades. `amber-ink` on `amber-pale` for the "New patients welcome" chip. `amber-deep` on hover.
- `sky` for card borders on hover. `mist` for the italic word on navy and for dividers on navy at 30% opacity.
- Focus ring: 2px `focus`, offset 3px, on everything interactive.

## Typography

Load both families from Google Fonts with one link:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
```

- `display` (52 to 88px fluid on desktop, 46 to 60px on phones) only in the homepage hero. `h1` (56/38) on inner-page photo heroes. `h2` (44/32) for sections, panels and CTA bands. `h3` (28/24) for card titles. Doctor names in cards and profiles are the serif at 24px.
- `lead` at weight 300 for the paragraph under any headline. `body` 18px/300 for running text. `body-sm` 16px/400 inside cards, footer and forms. `caption` 14px/400 for hours, helper text and source lines.
- `eyebrow` 12px/500, uppercase, 0.2em, in `blue` (mist on navy) above every section heading. `button` 13px/500 uppercase 0.14em. `ui` 13px/500 uppercase for nav links and doctor roles.
- Trust-panel figures are the serif at 30 to 40px. Phone numbers in the locations block and CTA band are the serif at 28 to 34px with tabular figures.
- Headlines get `text-wrap: balance` and -0.02em tracking. Body measures 65ch. Nothing lighter than weight 300, nothing below 14px.

## Spacing, layout and shape

- Container 1320px with a fluid gutter of 20 to 56px. Sections pad 72 to 128px on desktop, 48 to 80px when tight. Grids use `space-6` gutters: 3 columns for photo cards, 3 for featured doctors, 2 for locations and feature panels.
- The hero is 96svh capped at 1040px: the text block sits vertically centered on the left, with no eyebrow and a one-line lead, and the two pills sit bottom-centered above the trust panel so the photo carries the opening; the trust panel overlaps its bottom edge by 92px (64px on tablet). Inner-page heroes are at least 420px.
- `radius-sm` for cards, inputs, gallery and portrait corners; `radius-md` for the trust panel; `radius-pill` for buttons and chips; no radius on full-bleed panels and photo heroes.
- `shadow-floating` only on the trust panel and on dropdowns; the nav gets an inset hairline and a blur when scrolled.

## Phones

- Calling must be one tap from anywhere: the CallBar is fixed to the bottom of every page under 768px with Call Sacramento and Call Folsom cells, the utility bar shows both numbers, and the CTA band's numbers are `tel:` links. The nav collapses to a sheet whose Schedule button sits above the CallBar.
- The hero drops to its content height with the headline at 46 to 60px and the pills stacked full-width. Grids collapse to one column, split panels stack photo over text, the trust panel stacks, and the gallery's tall tile goes full width.
- Nothing is hover-dependent: card titles, links and the nav underline all read the same without a pointer.

## Motion

Ease-out `cubic-bezier(0.2, 0, 0, 1)` for everything. Hover colors in 120ms, presses and card hovers in 160ms, the nav frost and the mobile sheet in 240ms. Buttons scale to 0.97 on press. Card photos zoom to 1.04 over 1.2s. Hover effects are gated to fine pointers. Under reduced motion, no transforms. Nothing animates on scroll, nothing counts up.

## Iconography

Inline SVG, Lucide-style, 1.75px stroke, 24px (18px in buttons, 14px in links). The award icon (a circle over a ribbon) marks every accolade in `amber`. Arrows in links point right, external links use the diagonal arrow. No filled icon sets, no emoji.

## Photography

Real first: the Sacramento skyline at sunset for the homepage hero and CTA, the Tower Bridge for the about block and the locations hero, the J Street waiting rooms and hallway for the gallery, the RxSight Light Delivery Device for the Light Adjustable Lens panel, the frames from the practice's own cataract videos for cataract cards, and the practice's doctor portraits. Stock, from Pexels and Good Free Photos under their free licenses, fills clinical scenes (slit lamp, phoropter, close examinations). Credits live in `assets/Photography/README.md`. Still needed: Folsom office photos and high-resolution portraits of Drs. Serdahl, Chun and Minhas.

## Components

Every component in this system is a piece of the live site, in the order a page uses them: Nav, Hero, TrustPanel, SectionHeader, ServiceCard, FeaturePanel, DoctorCard, DoctorProfile, Gallery, LogoRow, Locations, CtaBand, Footer and CallBar, plus Button, Chip, Input and the SocialPost template. Each README says what the consumer provides and which `bundle.css` classes to use.

## Social media

See the Social section for the four formats and four templates for Instagram, Facebook, Google Business Profile and LinkedIn.

## Accessibility
The site is built to WCAG 2.1 AA and was scanned with axe-core on every page at phone, tablet and desktop widths with no violations (November 2026). The rules that keep it there:
- Text is `ink`, `slate` or `mute` on light surfaces and `on-navy` or `mist` on navy; `mute` is the lightest text color allowed and never goes below 14px.
- Text over a photograph always sits on a navy overlay strong enough to clear 4.5:1 against the real image (see Hero).
- Links inside running text are underlined. Form controls use `control-border`, not `hairline`.
- Every interactive element shows a focus ring: `blue` on light, white on navy and photographs.
- Tap targets are at least 24px tall, and 44px or more for the primary actions and the call bar.
- Decorative icons are `aria-hidden`; links that open a new tab say so to screen readers.
- Motion is short and stops entirely under `prefers-reduced-motion`.
