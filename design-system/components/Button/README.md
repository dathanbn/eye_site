# Button

The pill-shaped call to action in three weights: primary (amber), secondary (blue outline) and text (blue with an amber hover underline).

## When to use
- **Primary** for the one action a view exists for: Schedule Appointment. One per view; on a long page it may repeat in the hero, the appointment band and the mobile nav sheet, but never two side by side.
- **Secondary** for the alternative next to it: call an office, see all doctors.
- **Text** for in-card links such as "Learn about LASIK".

## The consumer provides
- The label, a verb phrase in sentence case ("Call Folsom Office").
- An `href` for links or a `type` for form buttons.
- Optional leading icon (Lucide, 18px, 1.75 stroke) for phone and directions actions only.
- `aria-disabled="true"` for a disabled state; the button keeps its size and drops to 40% opacity.

## Spec
- Height 48px, side padding `space-6`, `radius-pill`, label in the `button` style.
- Primary: `amber` fill, `on-amber` text; hover `amber-deep`. Never white text on amber.
- Secondary: transparent, 1.5px `blue` border, `blue` text; hover fills `ice`. On `navy` surfaces the border becomes `mist` and the text `on-navy`.
- Text: `blue`, no padding beyond `space-1`; a 2px `amber` underline appears on hover.
- Press: `transform: scale(0.97)` over `duration-base` with ease-out. Focus: 2px `focus` ring offset 2px.
- Hover states live behind `@media (hover: hover) and (pointer: fine)`.

## Don't
- Don't use amber for a secondary action or for more than one button in a group.
- Don't shorten the height below 48px; patients tap these on phones.
- Don't use `transition: all` or an ease-in curve.
