# Input

The appointment request form's fields: a label above, a 48px control, helper text below, in a two-column grid.

## The consumer provides
- A visible label, with "(required)" in `<em>` where it applies. A placeholder that is an example value. Helper text that explains why the field exists.
- `type="tel"`, `type="email"`, `inputmode` and `autocomplete` so phones show the right keyboard.
- `site.js` validates on blur and submit, adds `.is-error` with a message in the helper, and replaces the form with `.form-success` on a valid submit. Wire the submit to a real handler before launch.

## Classes (`bundle.css`)
- `.form` two columns with `space-6` gaps, one on phones; `.field.wide` spans both. `.field label` 14px/500 `ink`; `.control` 48px, 1.5px hairline, `radius-sm`, 16px text; focus is a `blue` border with a 3px `mist` halo; `.field.is-error` turns the border and helper `error`.
- `select.control` draws its own chevron in `slate`; `textarea.control` is 140px tall and resizable.

## Don't
- Don't ask for medical record or insurance ID numbers in the form; the helper text says so.
- Don't validate on every keystroke.
