# Input

The appointment request form's fields: a label above, a 48px control, helper text below, in a two-column grid.

## The consumer provides
- A visible label, with "(required)" in `<em>` where it applies. A placeholder that is an example value. Helper text that explains why the field exists.
- `type="tel"`, `type="email"`, `inputmode` and `autocomplete` so phones show the right keyboard.
- `site.js` validates on blur and submit, adds `.is-error` with a message in the helper, and replaces the form with `.form-success` on a valid submit. Wire the submit to a real handler before launch.

## Classes (`bundle.css`)
- `.form` two columns with `space-6` gaps, one on phones; `.field.wide` spans both. `.field label` 14px/500 `ink`; `.control` 48px, 1.5px `control-border` (3:1 against white, which a hairline is not), `radius-sm`, 16px text; focus is a `blue` border and 2px `blue` outline with a `mist` halo; `.field.is-error` turns the border and helper `error`.
- `select.control` draws its own chevron in `slate`; `textarea.control` is 140px tall and resizable.

## Don't
- Don't ask for medical record or insurance ID numbers in the form; the helper text says so.
- Don't validate on every keystroke.

## Accessibility
- Every control has a visible `label`; the script links each `.help` line to its control with `aria-describedby`, so error text is read out when focus lands on the field. On a failed submit, focus moves to the first field with an error.
- Name, phone and email carry `autocomplete` values.
