# SectionHeader

The three-line opening of every page section: an uppercase eyebrow in blue, a serif heading and a sans lead paragraph.

## The consumer provides
- The eyebrow text, two or three words naming the section ("Our specialties", "Insurance").
- The heading, one sentence, no period, in sentence case.
- Optional lead paragraph, one or two sentences.
- Heading level: `h2` for sections, `h1` on a page opener (then the heading uses the `h1` style).

## Spec
- Vertical stack with `space-3` gaps, max width 640px, left-aligned. Center it only in a hero or appointment band.
- Eyebrow in the `eyebrow` style, uppercase, `blue`. On `navy` it becomes `mist`.
- Heading in `h2` (or `h1`), `ink`, `text-wrap: balance`. On `navy` it is `on-navy`.
- Lead in `lead`, `slate`, measure 65ch. On `navy` it is `on-navy-soft`.
- The header is followed by `space-12` before the section's content.

## Don't
- Don't put the amber rule above a web section header; it belongs to social posts and feature panels.
- Don't set the eyebrow in any color but blue or mist.
