# DoctorProfile

A doctor's full entry on the Doctors page: a sticky sidebar with the portrait and a credentials list, then the role line, serif name, lead, bio paragraphs and an accolades list.

## The consumer provides
- Portrait (`.photo`, or `.photo.lowres` to cap a low-resolution image at 220px), and a `dl.creds` of label/value pairs: medical school, internship, residency, fellowship, certification, undergraduate, languages, as known.
- `.role` line ("Board-certified ophthalmologist · specialty"), the name in `h2`, a one-sentence `lead`, two to four bio paragraphs in the practice's voice, and `ul.accolades` of two to four items, each optionally with a `<small>` source or detail line.
- An `id` on the article so cards can link to it.

## Classes (`bundle.css`)
- `.profile` is a 4/8 grid with a hairline above and 48 to 88px of vertical padding; one column on tablet and phones. `.profile .side` sticks at 140px.
- `.creds dt` are 11px uppercase `mute`, `dd` 15px `ink`. `.accolades li` is a 20px grid with the amber award icon.

## Don't
- Don't list an accolade the practice has not confirmed. The claims checklist records which are verified.
- Don't include personal contact details; the CTA band carries the office numbers.
