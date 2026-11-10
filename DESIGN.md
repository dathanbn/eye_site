---
version: alpha
name: Eye Site Sacramento
description: The design language of Eye Site Sacramento, an ophthalmology and optometry practice with offices in Sacramento and Folsom. A white, airy editorial canvas carried by the logo's deep navy and a single Eye Site Blue, warmed by one amber accent reserved for the action a patient is meant to take. Large, light Playfair Display headlines with one italic word give 35 years of surgical expertise its calm authority; light-weight Inter body and small tracked uppercase labels keep the chrome quiet and precise.

colors:
  navy: "#102040"
  navy-deep: "#081838"
  blue-deep: "#164c71"
  blue: "#0063a0"
  blue-figure: "#2667a1"
  sky: "#78aedd"
  mist: "#b3cfea"
  ice: "#e9f2fa"
  canvas: "#ffffff"
  surface: "#f4f7fa"
  hairline: "#d9e2ec"
  ink: "#102040"
  slate: "#4a5a6e"
  mute: "#5c6d81"
  control-border: "#74879d"
  on-blue: "#ffffff"
  on-navy: "#ffffff"
  on-navy-soft: "#b3cfea"
  amber: "#f0a32b"
  amber-deep: "#d18a12"
  amber-ink: "#8a5a0b"
  amber-pale: "#fdf1dc"
  on-amber: "#102040"
  success: "#1f7a4d"
  error: "#c4332d"
  focus: "#0063a0"

typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: 80px
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -0.02em
  display-italic:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: 80px
    fontWeight: 400
    fontStyle: italic
    lineHeight: 1.02
    letterSpacing: -0.02em
  h1:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: -0.02em
  h2:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.015em
  h3:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.01em
  stat:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.01em
  lead:
    fontFamily: "Inter, Segoe UI, sans-serif"
    fontSize: 21px
    fontWeight: 300
    lineHeight: 1.55
    letterSpacing: 0
  body:
    fontFamily: "Inter, Segoe UI, sans-serif"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.65
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, Segoe UI, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  title:
    fontFamily: "Inter, Segoe UI, sans-serif"
    fontSize: 19px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  button:
    fontFamily: "Inter, Segoe UI, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.14em
    textTransform: uppercase
  ui:
    fontFamily: "Inter, Segoe UI, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.12em
    textTransform: uppercase
  caption:
    fontFamily: "Inter, Segoe UI, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  eyebrow:
    fontFamily: "Inter, Segoe UI, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.2em
    textTransform: uppercase

rounded:
  sm: 6px
  md: 12px
  lg: 20px
  pill: 999px

spacing:
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "6": 24px
  "8": 32px
  "12": 48px
  "16": 64px
  "24": 96px

motion:
  fast: 120ms
  base: 160ms
  slow: 240ms
  ease-out: cubic-bezier(0.2, 0, 0, 1)
  press-scale: 0.97

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.navy}"
    typography: "{typography.ui}"
    height: 80px
    borderBottom: "1px solid {colors.hairline}"
  nav-link-active:
    textColor: "{colors.blue}"
    underline: "2px {colors.amber}"
  utility-bar:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy-soft}"
    typography: "{typography.caption}"
    height: 36px
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.on-amber}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.amber-deep}"
    textColor: "{colors.on-amber}"
  button-primary-active:
    transform: "scale({motion.press-scale})"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.blue}"
    border: "1.5px solid {colors.blue}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
    height: 48px
  button-secondary-hover:
    backgroundColor: "{colors.ice}"
  button-secondary-on-dark:
    backgroundColor: transparent
    textColor: "{colors.on-navy}"
    border: "1.5px solid {colors.mist}"
    rounded: "{rounded.pill}"
  button-text:
    backgroundColor: transparent
    textColor: "{colors.blue}"
    typography: "{typography.button}"
    underline: "2px {colors.amber} on hover"
  text-link:
    textColor: "{colors.blue}"
    underline: "1px {colors.mist}, becomes {colors.amber} on hover"
  hero-band:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    typography: "{typography.display}"
    padding: 96px 0
  section-light:
    backgroundColor: "{colors.canvas}"
    padding: 96px 0
  section-tinted:
    backgroundColor: "{colors.ice}"
    padding: 96px 0
  section-header:
    eyebrow: "{typography.eyebrow} in {colors.blue}, uppercase"
    heading: "{typography.h2} in {colors.navy}"
    lead: "{typography.lead} in {colors.slate}"
    maxWidth: 640px
  service-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.navy}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.md}"
    padding: 32px
    iconColor: "{colors.blue}"
    iconBackground: "{colors.ice}"
  service-card-hover:
    border: "1px solid {colors.sky}"
    shadow: "0 1px 2px rgba(16,32,64,0.06), 0 8px 24px rgba(16,32,64,0.08)"
  doctor-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.navy}"
    photoRounded: "{rounded.md}"
    photoAspect: "4 / 5"
    nameTypography: "{typography.title}"
    credentialColor: "{colors.blue}"
  appointment-band:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    typography: "{typography.h2}"
    cta: "{components.button-primary}"
    rounded: "{rounded.lg}"
    padding: 48px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.navy}"
    border: "1.5px solid {colors.hairline}"
    rounded: "{rounded.sm}"
    padding: 12px 14px
    height: 48px
    typography: "{typography.body-sm}"
  input-focus:
    border: "1.5px solid {colors.blue}"
    ring: "0 0 0 3px {colors.mist}"
  input-error:
    border: "1.5px solid {colors.error}"
    helperColor: "{colors.error}"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.navy}"
    border: "1px solid {colors.hairline}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: 6px 14px
  chip-amber:
    backgroundColor: "{colors.amber-pale}"
    textColor: "{colors.amber-ink}"
    rounded: "{rounded.pill}"
  stat-tile:
    numberTypography: "{typography.stat} in {colors.blue}"
    labelTypography: "{typography.ui} in {colors.slate}"
  footer:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.on-navy-soft}"
    typography: "{typography.body-sm}"
    headingColor: "{colors.on-navy}"
    padding: 64px 0 32px
  utility-bar:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.on-navy-soft}"
    typography: "{typography.caption}"
    height: 38px
    content: "both office phone numbers left, one credibility line right"
  trust-panel:
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.md}"
    shadow: "0 4px 12px rgba(16,32,64,0.10), 0 16px 48px rgba(16,32,64,0.14)"
    placement: "overlaps the bottom of the hero by 92px; four columns of serif figure, label and source line, then the kings-strip as the bottom edge; two columns under 900px, one under 600px"
  kings-strip:
    backgroundColor: "radial gradient from #1c3566 at the left through {colors.navy} to {colors.navy-deep}"
    textColor: "{colors.on-navy}"
    height: 104px
    rounded: "bottom corners only, matching the trust panel"
    content: "white one-color Kings SAC crest at 76px with no box; OFFICIAL in tracked {colors.mist} caps over OPHTHALMOLOGIST OF THE; a white plate skewed 14 degrees reading SACRAMENTO KINGS in navy; at the far right, TEAM OPHTHALMOLOGIST over Dr. Sina Rashidi, M.D."
    link: "the doctor's name links to his profile; plain white at rest, a 1px {colors.mist} underline on hover; no button"
    usage: "homepage trust panel only; needs the team's written approval before launch"
  photo-hero:
    backgroundImage: "full-bleed photograph, navy gradient overlay heavier on the left"
    textColor: "{colors.on-navy}"
    headline: "{typography.display} with one italic word in {colors.mist}"
    nav: "transparent with white text and an inverted mark until the page scrolls, then frosted canvas"
  service-card-photo:
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.sm}"
    photo: "16:10 on top, slow 1.04 zoom on hover"
    title: "{typography.h3}"
  social-post-square:
    size: "1080 x 1080"
    backgroundColor: "{colors.canvas} or {colors.navy}"
    headline: "{typography.h1} scaled, serif"
    accentBar: "{colors.amber}"
    logoPlacement: "top-left, 96px safe margin"
  social-post-story:
    size: "1080 x 1920"
    safeArea: "250px top and bottom"
  social-post-landscape:
    size: "1200 x 628"
    use: "Facebook, LinkedIn, Google Business Profile"
---

# Eye Site Sacramento Design System

## Overview

Eye Site Sacramento reads like a calm, well-lit clinic: white rooms, clear signage, one trusted color. The default surface is pure white (`{colors.canvas}`), and the brand lives in two blues taken straight from the logo: the deep **navy** of the eye and wordmark (`{colors.navy}`, #102040) and **Eye Site Blue** (`{colors.blue}`, #0063a0), the blue the current website already uses for headings and bands. The logo's figure, a person with arms raised inside an eye, gives the system its lighter blues (`{colors.sky}`, `{colors.mist}`) and its optimism. The tagline is "See Your Best."

The system is **balanced**: five surgeons with roughly 35 years of experience each, repeatedly named Best Doctors in Sacramento, presented warmly rather than clinically. Gravity comes from typography. Headlines are set large and light in Playfair Display at weight 400, with one italic word carrying the emotion ("See your *best*."); everything a patient actually reads is set in Inter at weight 300 with generous leading, and labels are small, uppercase and widely tracked. Cataract and glaucoma patients are often over 60, so body text is 18px by default, and every text color clears WCAG AA contrast on the surface it sits on.

**Premium cues** come from evidence, not decoration: a cinematic Sacramento photograph behind the hero, a floating trust panel naming the awards and certifications and their sources, named technology (LenSx, Light Adjustable Lens, Zeiss OCT), doctor profiles with verified credentials and accolades, real office photography, and the actual insurance logos. The utility bar and footer are navy-deep so the page opens and closes in the brand's darkest color.

**The feel** comes from two references translated onto the clinic's white and blue: the editorial calm of a quiet-living brand (tall unhurried sections, full-bleed split panels of photograph and statement, desaturated imagery, a transparent nav that frosts on scroll) and the precision of a well-made software product (one accent, hairlines instead of boxes, a stepped surface ladder instead of shadows, tight negative tracking on display type, nothing decorative).

One accent, **amber** (`{colors.amber}`, #f0a32b), is the only warm color in the system. It belongs to the action a patient is meant to take: the Schedule Appointment button, the active nav underline, the highlight stroke on a social post. It is never a background and never decorative. Blue structures the page; amber tells the patient where to go.

**Key characteristics:**
- White canvas (`{colors.canvas}`) with cool, blue-biased grays (`{colors.surface}`, `{colors.hairline}`, `{colors.slate}`); no cream, no warm neutrals.
- Two blues from the logo: `{colors.navy}` for dark bands, headings and the footer; `{colors.blue}` for links, eyebrows, icons and secondary buttons.
- One amber accent (`{colors.amber}`) reserved for primary calls to action and small highlights. One amber moment per view.
- Serif for headlines (`{typography.h1}`), sans for reading (`{typography.body}`). Scale, not weight, builds hierarchy.
- Pill buttons (`{rounded.pill}`) with small tracked uppercase labels, hairline rules instead of cards wherever possible, 48px minimum touch targets.
- No shadows at rest and none on hover; hairlines and a stepped surface ladder (canvas, surface, ice, navy) do all the work of separating content.
- Photography of real doctors, real staff and the real offices. Stock imagery of models in lab coats is off-brand.

## Colors

> Sources: the logo PNG (navy, figure gradient) and the live site at eyesitemd.com (Eye Site Blue #0063a0, deep blue #074d78 band). Amber is new, chosen as the complementary accent.

### Brand
- **Navy** (`{colors.navy}`, #102040): the logo's ink. Headings on white, the hero and appointment bands, text on amber. The color that makes the brand feel established.
- **Navy Deep** (`{colors.navy-deep}`, #081838): the footer surface and the bottom of any navy gradient.
- **Eye Site Blue** (`{colors.blue}`, #0063a0): the working brand color. Links, eyebrows, icons, secondary button outlines, nav active state, stat numbers. 6.2:1 on white.
- **Blue Deep** (`{colors.blue-deep}`, #164c71): hover and pressed states of blue elements; the "SACRAMENTO" wordmark color.
- **Blue Figure** (`{colors.blue-figure}`, #2667a1), **Sky** (`{colors.sky}`, #78aedd), **Mist** (`{colors.mist}`, #b3cfea): the logo figure's gradient, top to bottom. Use sky and mist for illustration, chart fills, dividers on navy, and soft highlights. Never as text on white.
- **Ice** (`{colors.ice}`, #e9f2fa): the tinted section background and icon-well fill. The only non-white surface a page should need.

### Accent
- **Amber** (`{colors.amber}`, #f0a32b): primary button fill, active underline, social highlight bar. Always paired with `{colors.on-amber}` (navy) text, never white. 
- **Amber Deep** (`{colors.amber-deep}`, #d18a12): hover state of amber fills.
- **Amber Ink** (`{colors.amber-ink}`, #8a5a0b): amber as text on white or ice, for example a "New patients welcome" chip. 5.6:1 on white.
- **Amber Pale** (`{colors.amber-pale}`, #fdf1dc): the tint behind amber-ink chips and callouts.

### Surface
- **Canvas** (`{colors.canvas}`, #ffffff): the default page background.
- **Surface** (`{colors.surface}`, #f4f7fa): input wells, chips, table stripes, the quietest card fill.
- **Hairline** (`{colors.hairline}`, #d9e2ec): 1px borders on cards, inputs and dividers.

### Text
- **Ink** (`{colors.ink}`, #102040): headings and emphasized text on canvas, surface and ice. Same value as navy.
- **Slate** (`{colors.slate}`, #4a5a6e): body copy on canvas, surface and ice. 7.0:1 on white.
- **Mute** (`{colors.mute}`, #5c6d81): captions, timestamps, helper text. 5.3:1 on white and at least 4.7:1 on surface and ice; never below 14px.
- **Control border** (`{colors.control-border}`, #74879d): the boundary of form controls only, 3.6:1 on white, above the 3:1 WCAG requires.
- **On Navy** (`{colors.on-navy}`, #ffffff) and **On Navy Soft** (`{colors.on-navy-soft}`, #b3cfea): headings and body on navy bands and the footer.
- **On Blue** (`{colors.on-blue}`, #ffffff): text on an Eye Site Blue fill.

### Semantic
- **Success** (`{colors.success}`, #1f7a4d): confirmation messages, "accepted" insurance states. Always with a check icon or the word, never color alone.
- **Error** (`{colors.error}`, #c4332d): form validation and failed states. Always with text.
- **Focus** (`{colors.focus}`): the keyboard focus ring, 2px solid Eye Site Blue offset 2px, on every interactive element.

## Typography

### Font families
Two Google-hosted families carry the system. Load them once:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
```

- **Playfair Display** (`{typography.display}` through `{typography.h3}`, `{typography.stat}`): headlines, section titles and large numbers only, at weight 400. Large and light, never bold. One word in a display or h1 headline may be italic (`{typography.display-italic}`), set in `{colors.blue}` on light surfaces or `{colors.mist}` on navy.
- **Inter** (`{typography.lead}` through `{typography.eyebrow}`): everything else. Weight 300 for reading text at 18px and above, 400 for 16px and below, 500 for labels. Light weight is the point; it keeps the page airy against the serif.

Fallbacks: Georgia for the serif, Segoe UI / system sans for the sans.

### Hierarchy

| Token | Family | Size | Weight | Line height | Use |
|---|---|---|---|---|---|
| `{typography.display}` | Playfair Display | 80px | 400 | 1.02 | Homepage hero headline, one italic word |
| `{typography.h1}` | Playfair Display | 56px | 400 | 1.06 | Page titles, social post headlines |
| `{typography.h2}` | Playfair Display | 44px | 400 | 1.1 | Section headings |
| `{typography.h3}` | Playfair Display | 28px | 400 | 1.2 | Card titles, doctor names, feature panel titles |
| `{typography.stat}` | Playfair Display | 48px | 400 | 1 | Big numbers ("35 years", "2 offices"), tabular figures |
| `{typography.lead}` | Inter | 21px | 300 | 1.55 | Intro paragraph under a heading |
| `{typography.body}` | Inter | 18px | 300 | 1.65 | Default body copy |
| `{typography.body-sm}` | Inter | 16px | 400 | 1.6 | Dense copy, footer, form text |
| `{typography.title}` | Inter | 19px | 500 | 1.35 | Phone numbers, form section titles |
| `{typography.button}` | Inter | 13px | 500 | 1 | Button labels, uppercase, tracked 0.14em |
| `{typography.ui}` | Inter | 13px | 500 | 1.4 | Nav links and tabs, uppercase, tracked 0.12em |
| `{typography.caption}` | Inter | 14px | 400 | 1.5 | Captions, hours, helper text |
| `{typography.eyebrow}` | Inter | 12px | 500 | 1.2 | Uppercase overlines ("CATARACT SURGERY"), tracked 0.2em |

### Principles
- Serif for feeling, sans for facts. Never set body copy in the serif; never set a headline in the sans. Never push Playfair above weight 500.
- Headlines at `{typography.h2}` and above get `letter-spacing: -0.02em` and `text-wrap: balance`.
- Body copy measures 60 to 70 characters: `max-width: 65ch`.
- Numbers that line up (hours, phone numbers, stats) use `font-variant-numeric: tabular-nums`.
- Eyebrows, buttons and nav links are uppercase and widely tracked, echoing the spaced "SACRAMENTO" in the logo. Small tracked caps against large light serif is the system's signature contrast.
- Minimum text size on the web is 14px; on social graphics, 36px at 1080px wide. Weight 300 is never used below 18px.

## Layout

### Spacing system
A 4px base. Use the named steps and nothing in between.

| Token | Value | Typical use |
|---|---|---|
| `{spacing.1}` | 4px | Icon-to-label gaps |
| `{spacing.2}` | 8px | Inside chips, between stacked labels |
| `{spacing.3}` | 12px | Input padding, list item gaps |
| `{spacing.4}` | 16px | Default gap between related elements |
| `{spacing.6}` | 24px | Card padding on mobile, grid gutters |
| `{spacing.8}` | 32px | Card padding on desktop |
| `{spacing.12}` | 48px | Between groups inside a section |
| `{spacing.16}` | 64px | Section padding on mobile |
| `{spacing.24}` | 96px | Section padding on desktop |

### Grid and container
- Content container: 1200px max, centered, 24px side gutter on mobile, 48px on tablet and up.
- Reading container: 720px max for article pages (eye education, procedure explanations).
- 12-column grid on desktop with 24px gutters; cards sit in 3 columns (services), 4 columns (doctors), 2 columns (locations).

### Whitespace philosophy
Space is the clinic's calm. Sections breathe at 96px; nothing is crowded. When a section feels empty, add a photograph, not another card.

### Responsive strategy

#### Breakpoints
| Name | Width | Behavior |
|---|---|---|
| Mobile | < 640px | Single column, 24px gutters, 48px sections, `display` drops to 40px, `h1` to 36px, `h2` to 28px |
| Tablet | 640 to 1023px | 2 columns for cards, 48px gutters |
| Desktop | 1024px and up | Full grid, 96px sections |

#### Touch targets
Every tappable element is at least 48px tall. Buttons are 48px; nav links on mobile are 56px rows. Phone numbers are always `tel:` links at `{typography.title}` size.

#### Collapsing strategy
The nav collapses to a full-screen sheet below 1024px with the Schedule Appointment button pinned at the bottom. The two-office location block stacks vertically with the Sacramento office first. Doctor grids go 4 → 2 → 1.

#### Image behavior
Hero photographs are full-bleed with a navy overlay at 55% opacity so white text clears contrast. Doctor portraits are 4:5 with `{rounded.md}` corners. Office photos are 3:2.

## Elevation and depth

Hairlines first, shadows second. A resting card has a 1px `{colors.hairline}` border and no shadow. On hover, or when it floats (dropdowns, dialogs, toasts), it gains a soft blue-tinted shadow:

- **Card hover**: `0 1px 2px rgba(16,32,64,0.06), 0 8px 24px rgba(16,32,64,0.08)`
- **Floating**: `0 4px 12px rgba(16,32,64,0.10), 0 16px 48px rgba(16,32,64,0.14)`

Navy bands create depth by contrast, not by shadow. No glassmorphism, no inner glows, no gradients except the logo figure's own blue gradient used as an illustration fill.

## Shapes

### Border radius scale
| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 6px | Inputs, chips inside tables, small thumbnails |
| `{rounded.md}` | 12px | Cards, doctor portraits, images |
| `{rounded.lg}` | 20px | Appointment band, large feature panels, modals |
| `{rounded.pill}` | 999px | Buttons, chips, nav pills |

Buttons are pills because the logo is built from curves. Cards are only softly rounded so the page still feels like a medical practice, not an app store.

## Motion

Motion follows the rules in Emil Kowalski's design engineering skill, encoded here so any agent building for the brand applies them:

- Animate only `transform` and `opacity`. Never `transition: all`.
- Entrances use `ease-out` (`{motion.ease-out}`), never `ease-in`. UI transitions last 120 to 240ms; nothing on the interface exceeds 300ms.
- Every pressable element scales to `{motion.press-scale}` (0.97) on `:active` over 160ms.
- Nothing enters from `scale(0)`. Dropdowns and popovers start at `scale(0.96)` and `opacity: 0`, with `transform-origin` at the trigger. Modals stay centered.
- Exits are faster than entrances.
- Hover effects are gated behind `@media (hover: hover) and (pointer: fine)`.
- Under `prefers-reduced-motion: reduce`, keep opacity fades and remove all movement.
- No scroll-triggered fade-ins on every section, no parallax, no animated counters on stats. A page should be fully readable at rest.

## Components

### Navigation
- **Utility bar**: `{colors.navy}` strip, 36px, both office addresses and phone numbers in `{typography.caption}` `{colors.on-navy-soft}`. Phone numbers are white and tappable.
- **Nav bar**: white, 80px, logo at left (the full lockup, 56px tall), links in `{typography.ui}` `{colors.navy}`, active link in `{colors.blue}` with a 2px `{colors.amber}` underline, and a primary button at the right. Hairline bottom border; no shadow until the page scrolls, then the floating shadow.

### Hero
Full-bleed photograph of the Sacramento office or the team, navy overlay, `{typography.display}` headline in white, `{typography.lead}` in `{colors.mist}`, one amber primary button and one on-dark secondary button. Headline is two lines maximum.

### Buttons
- **Primary**: amber fill, navy text, pill, 48px, 24px side padding. Hover `{colors.amber-deep}`; active scales 0.97; focus ring 2px blue offset 2px. One per view.
- **Secondary**: transparent, 1.5px `{colors.blue}` border, blue text. Hover fills `{colors.ice}`. On navy surfaces the border and text become `{colors.mist}` and white.
- **Text button**: blue text, 2px amber underline appears on hover, used for "Learn more" inside cards.
- Disabled: 40% opacity, no hover, cursor default.
- Labels are verbs: "Schedule Appointment", "Call Sacramento Office", "Learn About LASIK".

### Inputs and forms
48px tall, white fill, 1.5px hairline border, `{rounded.sm}`. Label above in `{typography.ui}` navy; helper below in `{typography.caption}` mute. Focus: blue border plus a 3px `{colors.mist}` ring. Error: `{colors.error}` border and helper text that says what to fix. Required fields are marked with the word "required" in the label, not an asterisk alone.

### Cards and containers
- **Service card**: white, hairline border, 32px padding, an icon in a 48px `{colors.ice}` circle, `{typography.title}` heading, `{typography.body-sm}` slate body, text button at the bottom. Hover: sky border and card shadow, 160ms.
- **Doctor card**: 4:5 portrait, `{typography.title}` name, `{typography.ui}` credentials in blue ("Ophthalmologist, M.D."), one-line specialty in slate.
- **Appointment band**: navy panel, `{rounded.lg}`, 48px padding, `{typography.h2}` white heading ("Ready to see your best?"), both phone numbers in `{typography.title}` with `{colors.mist}` labels, and the amber primary button.
- **Insurance chip**: surface fill, hairline border, pill, 15px navy text. The current site's insurance logos can live inside a 3 × 2 grid of white cards instead.
- **Stat tile**: serif number in blue, sans label in slate, no border, no background. Three in a row maximum.

### Signature components
- **The eye arc**: the logo's eye outline, used as a single large navy or mist arc cropping the corner of a hero or social post. Never redrawn; crop the actual logo artwork.
- **Amber rule**: a 48px × 6px amber bar above an eyebrow on social graphics and feature panels. It is the brand's one decorative device.

## Imagery

- Real people, real rooms. Photograph the doctors, the technicians, the waiting rooms and the exam lanes at both offices in natural light. Warm skin tones against white and blue read as trustworthy.
- Crop generously; let faces and equipment fill the frame.
- Overlays are navy at 45 to 60%, never black and never a color gradient.
- Icons: Lucide, 1.75px stroke, 24px, in `{colors.blue}` inside an ice circle, or `{colors.mist}` on navy. No filled icons, no emoji.

## Voice

- Speak to the patient as "you"; the practice is "we". Doctors are "Dr. Jones", not "Richard".
- Plain language first, medical term second: "cloudy lens (cataract)", "eye pressure (glaucoma)".
- Confident, warm, specific. "Our surgeons have performed cataract surgery in Sacramento for 35 years" beats "world-class care".
- Sentence case everywhere except eyebrows. No exclamation points in headlines; one is allowed in a social caption.
- The tagline "See Your Best" is always title case and never altered.

## Do's and Don'ts

### Do
- Keep the canvas white and the grays cool; use `{colors.ice}` when a section needs a tint.
- Reserve `{colors.amber}` for the primary action and small highlights; everything structural is blue or navy.
- Set headlines in Playfair Display at weight 400 and all reading text in Inter at weight 300, 18px or larger.
- Pair every semantic color with a word or icon.
- Give every interactive element a visible focus ring and a 0.97 press scale.
- Use the real logo file from `brand/eye-site-logo.png` with at least 24px clear space on all sides.

### Don't
- Don't put white text on amber; amber always carries navy text.
- Don't use amber as a background, a card fill or a section tint.
- Don't use pure black, warm grays or cream anywhere.
- Don't use Poppins, Roboto or a bold serif; the light Playfair and Inter pairing is part of the identity.
- Don't animate on scroll, animate counters, or use `ease-in` for anything that appears.
- Don't use stock photos of models in white coats, stethoscopes or floating eyeballs.
- Don't stretch, recolor or redraw the logo. On navy, use the logo on a white rounded tile, as the current site does.

## Social media

Four platforms share one visual kit so every post is recognizably Eye Site:

| Format | Size | Platforms |
|---|---|---|
| Square | 1080 × 1080 | Instagram feed, Facebook, LinkedIn |
| Portrait | 1080 × 1350 | Instagram feed |
| Story / Reel cover | 1080 × 1920 | Instagram, Facebook |
| Landscape | 1200 × 628 | Facebook link posts, LinkedIn, Google Business Profile |

Templates:
- **Education post** (white): amber rule, blue eyebrow ("EYE HEALTH"), serif headline up to 3 lines at 72px, slate body at 36px, logo lockup bottom-left, website bottom-right in blue.
- **Announcement post** (navy): the same structure on `{colors.navy}` with white headline, mist body and the logo on a white tile.
- **Photo post**: full-bleed photo, navy overlay, headline in white, amber rule. Use for team, office and award news.
- **Quote / review post** (ice): large serif opening quote mark in `{colors.sky}`, review text in `{typography.lead}` scaled, reviewer first name and city in caption.

Rules: 96px safe margin on all sides, 250px top and bottom on stories. Text never below 36px. One amber element per post. The logo appears once.

## Agent prompt guide

### Quick color reference
| Role | Token | Hex |
|---|---|---|
| Page background | canvas | #ffffff |
| Tinted section | ice | #e9f2fa |
| Dark band / footer | navy / navy-deep | #102040 / #081838 |
| Brand blue (links, icons, outlines) | blue | #0063a0 |
| Primary CTA fill | amber | #f0a32b |
| Text on CTA | on-amber | #102040 |
| Headings | ink | #102040 |
| Body | slate | #4a5a6e |
| Hairlines | hairline | #d9e2ec |

### Ready-to-use prompts
- "Build the Eye Site Sacramento homepage: navy utility bar with both offices, white nav with amber-underlined active link, a split hero with a large light Playfair headline and one italic word beside a desaturated photo, a hairline stats strip, a two-column editorial about block, specialties as a hairline-ruled list, two full-bleed photo-and-statement panels, a doctor grid, an appointment band in navy with the amber Schedule Appointment button, and a quiet light footer."
- "Create a cataract surgery page using the reading container: eyebrow in blue, h1 in serif, lead in sans at 22px, body at 18px with a 65ch measure, a stat row (35 years, 5 surgeons, 2 offices) in blue serif numbers, and a closing appointment band."
- "Design a 1080 × 1080 Instagram education post on white: amber rule, EYE HEALTH eyebrow in blue, a three-line serif headline about dry eye, body copy in slate at 36px, and the logo lockup bottom-left."
- "Design a 1200 × 628 Google Business Profile post on navy announcing extended Friday hours at the Folsom office, with the logo on a white tile and one amber highlight."
