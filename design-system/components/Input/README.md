# Input

A 48px text field, select or textarea with a label above and helper text below, used on the appointment request and contact forms.

## The consumer provides
- A visible label (never placeholder-only) with the word "(required)" in muted text where it applies; no asterisks alone.
- A placeholder that shows an example value, not an instruction.
- Helper text that says why the practice needs the field or what format it wants.
- On error, helper text that says exactly what to fix, plus `aria-invalid="true"` and `aria-describedby` pointing at the helper.
- `inputmode="tel"` for phone numbers and `type="email"` for email so phones show the right keyboard.

## Spec
- Height 48px, padding 0 14px, 1.5px `hairline` border, `radius-sm`, `canvas` fill, text in `body-sm` `ink`, placeholder in `mute`.
- Label in `ui`, `ink`; helper in `caption`, `mute`. Stack gap `space-2`.
- Focus: border `blue` plus a 3px `mist` halo, 120ms. Error: border and helper in `error`.
- Selects use the same box with a small `slate` chevron.
- Fields sit in a grid with `space-6` gaps, one column on mobile.

## Don't
- Don't use a filled gray input style; the white field with a hairline reads cleaner on `ice` sections.
- Don't validate on every keystroke; validate on blur and on submit.
