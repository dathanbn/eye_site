# Nav

The fixed header: a 38px `navy-deep` utility bar with both office phone numbers, then the nav with the eye mark, the typeset wordmark, five uppercase links, and the amber Schedule button.

## The consumer provides
- The five page links with `aria-current="page"` on the current one.
- The scheduling `href` for the button.
- `on-dark` on the header when the page opens with a photo hero (every page on the site does). `site.js` adds `is-scrolled` after 24px of scroll.

## Classes (`bundle.css`)
- `.utility > .container > .offices` and `.right`. The address labels hide below 768px, the right-hand line below 768px too.
- `.nav.on-dark` renders white text and inverts the mark with `filter: brightness(0) invert(1)`; `.nav.is-scrolled` frosts to 88% `canvas` with a 16px blur and an inset hairline, shrinks the mark to 40px and the padding to 10px.
- `.brand` = mark at 46px plus `.wordmark` (EYE SITE 14px/0.26em in `ink`, SACRAMENTO 8.5px/0.34em in `blue`).
- `.nav-links a` are `ui` style; the current page gets a 2px `amber` inset underline.
- Below 1024px the links hide and `.nav-toggle` shows; `.nav-sheet.is-open` is the full-screen menu with serif links and the two buttons pinned at the bottom. Below 640px the Schedule button leaves the bar and lives only in the sheet.

## Don't
- Don't add a second button, a search field or a logo image with the wordmark baked in.
- Don't put the nav over a photo without the hero's navy gradient; the white text depends on it.

## Menu open (phones and tablets)
- The script adds `.is-menu-open` to `.nav` while the sheet is open. The bar turns solid white and shows the full-color mark, the dark wordmark and a dark close icon, exactly as it does when scrolled, because the white sheet sits behind it.
- The sheet is a `nav` landmark labelled "Menu". Closed, it is `visibility: hidden`, so its links cannot be reached by keyboard or screen reader. Open, `main` and `footer` are `inert`; Escape closes it and returns focus to the toggle.
- The current page is marked with `aria-current`, blue text and an amber underline, never color alone.
- The call bar stays visible above the open sheet, so both phone numbers are one tap away from the menu.
- On navy and over photographs the keyboard focus ring is white; everywhere else it is `blue`.
