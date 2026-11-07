# Logos

Four files, all derived from the single logo the practice supplied. Use them exactly as the website does.

| File | What it is | Where the website uses it |
| --- | --- | --- |
| `eye-site-logo-transparent.png` | The full lockup (eye arc, figure, EYE SITE, SACRAMENTO) on a transparent background, 522 × 568. Made by removing the white background from the supplied PNG; edge pixels are feathered. | `site/assets/logo.png`: the favicon fallback and any light surface where the whole lockup is needed. |
| `eye-site-mark.png` | The eye and figure only, cropped from the transparent lockup at 66% of its height, 522 × 375. | The nav bar and footer beside the typeset wordmark, and the favicon. Over a dark hero the nav inverts it to white with a CSS filter. |
| `eye-site-logo.png` | The original supplied PNG with its white background, 522 × 568. | Social posts on navy, placed on a white tile with `radius-md`. |
| `eye-site-logo-transparent-official.png` | The file the old Wix site called "ESS-LogoTransparent", 938 × 1028. Despite the name its background is opaque white, so it is kept only as the highest-resolution source. | Nowhere on the site. Re-export from a vector master when one exists. |

Colors in the mark: eye arc and wordmark `navy` (#102040), figure gradient `blue-figure` → `sky` → `mist` (#2667a1 → #78aedd → #b3cfea), SACRAMENTO `blue-deep` (#164c71).

Rules from the website:
- The nav shows the mark at 46px (40px once scrolled) beside the wordmark set in Inter: EYE SITE at 14px with 0.26em tracking in `ink`, SACRAMENTO at 8.5px with 0.34em tracking in `blue`. Over a photo hero both lines turn white and the mark is inverted with `filter: brightness(0) invert(1)`; in the footer the same inversion is used on `navy-deep`.
- Clear space is `space-6` on the web and 48px on social graphics. Minimum width is 120px on the web and 180px on a post.
- Never recolor, stretch, crop the wordmark out of the lockup, or redraw the mark. The typeset wordmark in the nav is a stand-in until the practice supplies a horizontal lockup.
