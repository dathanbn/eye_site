# DoctorCard

A linked card for the homepage doctors grid: 4:5 portrait, serif name, uppercase role, one-line specialty and one accolade with the amber award icon.

## The consumer provides
- The practice's portrait of the doctor (600 × 900 outdoor portraits are the current set), with `alt` = the doctor's name.
- Name with degree, role ("Board-certified ophthalmologist" or "Optometrist"), a specialty line, and exactly one accolade that is either verified or confirmed by the practice. Current accolades: Jones, former Chief of Ophthalmology at Mercy General and Sutter General; Kira, Clinical Instructor at UC Davis Health; Palmer, Sactown Top Doctors 2026 and former Navy flight surgeon; Serdahl, Clinical Professor at UC Davis Medical Center; Rashidi, official ophthalmologist of the Sacramento Kings.
- The `href` of the doctor's profile.

## Classes (`bundle.css`)
- `.doctors-featured` is a 3-column grid (2 on tablet, 1 on phones) with `space-8` row gaps. The sixth cell on the homepage is a `surface` card pointing to the optometrists.
- `.doctor .photo` is 4:5, `radius-sm`, portrait positioned at 50% 20%. `.name` serif 24px, `.role` `ui` style in `blue`, `.spec` 16px light, `.accolade` 14px `amber-ink` with a 16px `amber` icon. On hover the name underlines.

## Don't
- Don't show a doctor without a real portrait; use the optometrists' text card pattern instead.
- Don't stack two accolades on a card; the profile page holds the full list.
