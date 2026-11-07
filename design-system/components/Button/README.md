# Button

Pill buttons with small tracked uppercase labels: primary in amber, secondary as an outline, and the `.link` text link with an arrow.

## The consumer provides
- A verb label in sentence case (the CSS uppercases it): Schedule Appointment, Meet the doctors, Send request.
- `href` for links or `type` for form buttons. The nav's Schedule button and the hero's buttons are plain links.

## Classes (`bundle.css`)
- `.btn` is 50px tall, 30px side padding, `radius-pill`, 13px/500 with 0.14em tracking, scales to 0.97 on press. `.btn-primary` is `amber` with `on-amber` text, `amber-deep` on hover. `.btn-secondary` is a `blue` outline on light surfaces; inside `.hero`, `.page-head`, `.cta`, `.navy` or `.on-navy` it becomes a white outline at 85% with a translucent navy fill.
- `.link` is the same label style in `blue` with a mist underline that turns amber on hover and a 14px arrow icon; on navy it is white.

## Don't
- Don't put two primary buttons in one view; the hero and the CTA band are far enough apart.
- Don't use the blue outline over a photograph; the context classes above handle it, so keep the button inside the section it belongs to.
