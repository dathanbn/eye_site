# SocialPost

The 1080 × 1080 post template in its two main variants, education on white and announcement on navy, with the amber rule, a blue eyebrow, a serif headline and the logo lockup. The Social section lists all four formats and templates.

## The consumer provides
- The variant: `light` (education, review) or `dark` (announcement, photo).
- An eyebrow of one to three words naming the topic or office.
- A headline of at most three lines at 84px, written as a plain statement or question.
- One or two sentences of body copy; on an announcement, the phone number of the office concerned.
- For the photo variant, a photograph of the practice; the overlay and text structure stay the same.

## Spec
- Canvas 1080 × 1080, safe margin `space-24` (96px) on every side; text column at most 860px wide.
- Amber rule 48 × 6px, then the eyebrow at 30px uppercase tracked 0.12em in `blue` (`mist` on navy), then the headline in the serif at 84px / 1.08, then body in the sans at 38px / 1.45 in `slate` (`on-navy-soft` on navy).
- Footer: the logo lockup 200px tall bottom-left, on a `canvas` tile with `radius-md` when the post is navy; the website bottom-right at 32px in `blue` (`mist` on navy).
- Portrait (1080 × 1350) and landscape (1200 × 628) keep the same margins; on landscape the headline drops to 64px and the logo to 140px. Stories keep 250px clear top and bottom.

## Don't
- Don't put the amber rule and an amber highlighted word on the same post.
- Don't drop text below 36px or add a drop shadow to make it readable; change the variant instead.
- Don't show the logo twice or stretch it to fill the footer.
