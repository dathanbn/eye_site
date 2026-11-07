# DoctorCard

A portrait with the doctor's name, role and one-line specialty, used in a four-column grid on the Doctors page and the homepage.

## The consumer provides
- A 4:5 portrait photograph of the doctor, taken at the practice in natural light. The preview shows the empty slot; never substitute a stock photo or an illustration.
- The full name with degree: "Richard A. Jones, M.D." or "Andrew Chun, O.D."
- The role: "Ophthalmologist" or "Optometrist".
- One line of specialty in sentence case.
- The `href` of the doctor's profile page; the whole card is the link.

## Spec
- No border and no card fill; the portrait carries the shape with `radius-md`. The grid usually sits on an `ice` section.
- Name in `title`, `ink`; role in `ui`, `blue`; specialty in `body-sm`, `slate`. Gaps `space-2`.
- Four columns on desktop, two on tablet, one on mobile. Surgeons (M.D.) are listed before optometrists (O.D.).
- Focus ring 2px `focus` around the whole card, offset 4px.

## Don't
- Don't crop portraits square or circular; the 4:5 frame is part of the identity.
- Don't list awards inside the card; they belong on the profile page.
