# ServiceCard

A white card with an icon, a title, a short description and a text link, used in a three-column grid for the practice's specialties.

## The consumer provides
- A Lucide icon (24px, 1.75 stroke) that stands for the service.
- A title in sentence case, two to four words.
- One or two sentences of plain-language description, medical term in parentheses where useful.
- A link label that starts with a verb ("Learn about glaucoma") and its `href`.

## Spec
- `canvas` fill, 1px `hairline` border, `radius-md`, padding `space-8` (`space-6` on mobile), inner gaps `space-4`.
- Icon sits in a 48px `ice` circle in `blue`.
- Title in `title`, `ink`; body in `body-sm`, `slate`; link in `button` style, `blue`.
- Hover (fine pointers only): border becomes `sky`, `shadow-card` appears, 160ms ease-out. The link gains a 2px `amber` underline on its own hover.
- Three columns on desktop, two on tablet, one on mobile; every card in a row has the same height, the body stretches to fill.

## Don't
- Don't add a colored left border or a tinted card fill.
- Don't use filled or emoji icons.
- Don't make the whole card the link unless the text link is removed; two nested links confuse screen readers.
