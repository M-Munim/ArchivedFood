# Design QA - Mobile “Let’s get social”

- Source visual truth: `../ArchivedFood Allergy Certified Website_Mobile.pdf`,
  page 2 social section, plus the Figma reference supplied in the current
  conversation.
- Normalized source capture: `social-mobile-reference.png`.
- Implementation screenshot: `social-mobile-implementation.png`.
- Full-view comparison: `social-mobile-comparison.png` (source left,
  implementation right).
- Desktop regression capture: `social-desktop-viewport.png`.
- Viewport: 362 x 487 for the focused mobile section; 1440 x 700 for desktop
  regression coverage.
- State: `/`, live feed loaded, cookie notice dismissed.

## Full-view comparison evidence

The normalized Figma section and production implementation are shown together
at 1:1 scale. The heading, 29 px outer grid margins, 18 px gaps, 143 x 178.75 px
4:5 cards, two columns, two rows, and overall 486.5 px section height align with
the mobile source. The gray FPO blocks are correctly replaced by the four live
social images.

The desktop capture confirms that the original Behold widget remains visible as
one four-card row; the new mobile grid is hidden at that breakpoint.

## Focused region comparison evidence

No additional crop was needed because the comparison contains only the focused
362 px social section and preserves the typography, card edges, row/column gaps,
and image crops at readable 1:1 scale.

## Required fidelity surfaces

- Fonts and typography: the mobile heading uses the existing Fraunces family at
  24 px and matches the source hierarchy, weight, and line box; desktop retains
  its existing 34 px heading.
- Spacing and layout rhythm: two equal 143 px tracks, 18 px row/column gaps,
  24 px top padding, and 34 px bottom padding match the Figma frame.
- Colors and visual tokens: the white section and existing black heading remain
  unchanged; loading placeholders use the source’s neutral gray treatment.
- Image quality and asset fidelity: the mobile cards use Behold’s live optimized
  4:5 image assets with no stretching or synthetic replacements; desktop keeps
  the existing embedded widget.
- Copy and content: the heading is unchanged and all four cards link to their
  corresponding Instagram posts.

## Findings

No actionable P0, P1, or P2 differences remain.

## Patches made

- Added a live two-column mobile grid backed by the existing Behold feed.
- Preserved the original Behold widget for tablet and desktop.
- Added four fixed-ratio loading blocks so the 2 x 2 layout is stable while the
  feed loads.
- Added descriptive image alternatives, external-link behavior, and a silent
  failure status.
- Added the Behold image host to the strict Next.js remote-image allowlist.

## Verification

- Production preview: `http://127.0.0.1:4173/` returned HTTP 200.
- Mobile production capture rendered four images in two 143 px columns and two
  rows; `aria-busy` resolved to `false` and no runtime exceptions were recorded.
- Desktop production capture retained the existing 1100 px Behold widget and
  hid the mobile grid.
- ESLint passed.
- 52 Vitest tests passed; the final focused social-feed tests also passed.
- Next.js production build passed.

## Follow-up polish

No P3 follow-up is required for the requested section.

final result: passed

---

# Design QA - For Parents mobile directory preview

- Source visual truth: focused Figma screenshot supplied in the current
  conversation, corroborated by `for-parents-mobile-reference.png` from page 30
  of `../ArchivedFood Allergy Certified Website_Mobile.pdf`.
- Implementation screenshot:
  `for-parents-directory-preview-implementation.png`.
- Full-view comparison: `for-parents-directory-preview-comparison.png` (client
  PDF frame left, implementation right).
- Viewport: 390 x 3317.
- State: `/for-parents`, mobile navigation closed, cookie notice hidden for QA.

## Full-view comparison evidence

The mobile directory preview now includes the source's eyebrow, single-line
orange title, “Coming Soon” label, compact waitlist pill, peach field, and exact
client children artwork. The photo's transparent scalloped corners composite
against peach and the image ends directly at the mint community section.

## Focused region comparison evidence

The requested section remains legible at 1:1 scale in the full comparison, so an
additional crop was not required. The supplied focused Figma screenshot was the
primary authority for the compact mobile spacing and button dimensions.

## Required fidelity surfaces

- Fonts and typography: mobile uses the existing eyebrow style, 26 px Fraunces
  orange title on one line, 18 px “Coming Soon” label, and 16 px waitlist text.
- Spacing and layout rhythm: the content overlaps the crown by 17vw, with the
  button and artwork pulled upward to match the compact Figma composition.
- Colors and visual tokens: the existing blush, orange, ink, and mint tokens
  reproduce the client palette without introducing approximations.
- Image quality and asset fidelity: mobile uses the exact
  `public/images/Intro Background Shape (1).png` at its natural aspect ratio;
  transparent regions correctly reveal the blush background.
- Copy and content: “Directory Preview,” “Certified Center Directory,” “Coming
  Soon,” and the functional waitlist destination are preserved exactly.

## Findings

No actionable P0, P1, or P2 differences remain in the requested mobile section.

## Patches made

- Added a dedicated mobile directory-preview composition.
- Replaced the previous mobile photo with the client-provided scalloped asset.
- Restored the missing eyebrow and one-line orange title.
- Matched the compact waitlist action and the peach-to-mint image transition.
- Preserved the original tablet and desktop composition from `sm` upward.
- Added a focused regression test for the client artwork and waitlist links.

## Verification

- Focused Vitest component test passed.
- ESLint passed.
- Next.js production build passed.
- Chrome capture at 390 px confirms the responsive treatment.

## Follow-up polish

No P3 follow-up is required for the requested section.

final result: passed

---

# Design QA - For Parents mobile While You Wait

- Source visual truth: `for-parents-mobile-reference.png`, rendered from page
  30 of `../ArchivedFood Allergy Certified Website_Mobile.pdf`, plus the focused
  Figma crop supplied in the current conversation.
- Implementation screenshot: `for-parents-mobile-implementation.png`.
- Full-view comparison: `for-parents-mobile-comparison.png` (source left,
  implementation right).
- Viewport: 390 x 3317.
- State: `/for-parents`, mobile navigation closed, cookie notice hidden for QA.

## Full-view comparison evidence

The side-by-side frame confirms that the mobile “While You Wait” badge now spans
the viewport like the source, begins at the same point below the waitlist action,
and transitions into the FAQ with the intended amount of white space. The
badge's source artwork is unchanged and remains sharp at its natural ratio.

## Focused region comparison evidence

The full comparison preserves the requested badge and FAQ transition at readable
1:1 scale, so a second crop was unnecessary. The eyebrow, two-line blue heading,
four fixed copy lines, white nomination pill, scalloped edges, and FAQ heading
are all directly legible in the comparison.

## Required fidelity surfaces

- Fonts and typography: the mobile heading uses the existing Fraunces face at
  25 px in brand blue; the eyebrow, 16 px body copy, and action weight match the
  client hierarchy and wrapping. Desktop type rules remain unchanged.
- Spacing and layout rhythm: the badge is full-width on mobile, has 28 px of
  section space above it, positions content at 17% of its height, and lands the
  FAQ heading at the same visual break as the source.
- Colors and visual tokens: the existing pale-blue badge and brand-blue heading
  match the client palette; the embedded action uses the source's white fill and
  black text.
- Image quality and asset fidelity: the supplied `Group 4.png` badge remains the
  exact visual asset, rendered without stretching or a synthetic CSS mask.
- Copy and content: copy and link destination are unchanged; mobile-only line
  grouping matches the Figma while desktop copy remains fluid.

## Findings

No actionable P0, P1, or P2 differences remain in the requested mobile section.

## Patches made

- Expanded the badge from an inset mobile card to the full viewport width.
- Repositioned all badge content to match the source.
- Applied the blue mobile heading and exact four-line body wrap.
- Sized and positioned the white nomination pill to the client frame.
- Preserved the existing tablet and desktop presentation through `sm:` rules.
- Added a regression assertion for the responsive heading colors.

## Verification

- Focused Vitest component test passed.
- ESLint passed.
- Next.js production build passed.
- Chrome capture at 390 px confirms the responsive treatment.

## Follow-up polish

No P3 follow-up is required for the requested section.

final result: passed

---

# Design QA - Directory mobile image section

- Source visual truth: `directory-mobile-reference.png`, rendered from page 29
  of `../ArchivedFood Allergy Certified Website_Mobile.pdf`, plus the mobile
  Figma crop supplied in the current conversation.
- Implementation screenshot: `directory-mobile-implementation.png`.
- Full-view comparison: `directory-mobile-comparison.png` (source left,
  implementation right).
- Focused implementation capture: `directory-mobile-section-after.png`.
- Viewport: 390 x 1876 for the full frame and 382 x 820 for the focused section.
- State: `/directory`, mobile navigation closed, cookie notice hidden for QA.

## Full-view comparison evidence

The supplied portrait `DirVector.png` now occupies the same mobile slot as the
client source. Its top and bottom scallops, child placement, bubble details,
full-height crop, blush surround, and transition into the mint community block
align with the reference. The separate wide `Frame 1000012073.png` treatment
remains active only from the tablet breakpoint upward.

## Focused region comparison evidence

The 382 px focused capture confirms that the second directory action is followed
by the intended blush breathing room, the complete portrait image is visible
without stretching, and a 40 px blush field separates the lower scallop from
the mint community section.

## Required fidelity surfaces

- Fonts and typography: unchanged by this scoped patch; the existing directory
  and community typography remains readable and follows the current site tokens.
- Spacing and layout rhythm: the mobile hero uses 56 px of space before the
  image and 40 px after it, matching the client frame's composition.
- Colors and visual tokens: the existing blush and mint tokens match the source
  section transition; no new colors were introduced.
- Image quality and asset fidelity: mobile uses the exact client-provided
  `public/images/DirVector.png` at its natural aspect ratio with no synthetic
  masking, distortion, or replacement artwork.
- Copy and content: all directory copy, actions, destinations, and community
  content remain unchanged.

## Findings

No actionable P0, P1, or P2 differences remain in the requested mobile image
section.

## Patches made

- Replaced the mobile-only wide children artwork with `DirVector.png`.
- Preserved the existing wide artwork for tablet and desktop.
- Matched the reference's blush spacing above and below the portrait artwork.
- Added a focused regression assertion for the mobile image.

## Verification

- Focused Vitest directory test passed.
- ESLint passed.
- Next.js production build passed.
- Chrome captures at 382 px and 390 px confirm the responsive image treatment.

## Follow-up polish

No P3 follow-up is required for the requested section.

final result: passed

---

# Design QA - Directory mobile hero crown

- Source visual truth: focused mobile Figma screenshots supplied in the current
  conversation, corroborated by `directory-mobile-reference.png` from page 29
  of `../ArchivedFood Allergy Certified Website_Mobile.pdf`.
- Implementation screenshot: `directory-mobile-hero-implementation.png`.
- Full-view comparison: `directory-mobile-hero-comparison.png` (reference left,
  implementation right).
- Viewport: 390 x 1876.
- State: `/directory`, mobile navigation closed, cookie notice hidden for QA.

## Full-view comparison evidence

The mobile hero now preserves the white field behind the transparent top of the
client's peach crown, then continues through a seamless peach content band into
the portrait children image. The headline uses the intended three-line measure,
and the labels, copy, actions, and image handoff align with the supplied focused
Figma screenshots.

## Focused region comparison evidence

The hero occupies the upper portion of the 1:1 full-view comparison, where the
logo overlap, crown silhouette, typography, buttons, and image transition remain
fully legible; a second crop was not necessary.

## Required fidelity surfaces

- Fonts and typography: mobile retains Fraunces at 31 px for the orange heading
  and Poppins for the 16 px label/actions and 15 px supporting copy.
- Spacing and layout rhythm: the peach band overlaps the crown by 13vw, starts
  copy 20 px into the solid region, and uses the Figma's narrower 278 px actions.
- Colors and visual tokens: the white reveal, blush crown/band, orange heading,
  black primary action, and mint follow-on section use existing brand tokens.
- Image quality and asset fidelity: the original `DirectoryVector.png` crown and
  `DirVector.png` portrait render at natural aspect ratios without CSS masks or
  synthetic replacements.
- Copy and content: all directory copy and both working destinations remain
  unchanged.

## Findings

No actionable P0, P1, or P2 differences remain in the requested mobile hero.

## Patches made

- Rendered the transparent crown on white instead of blush.
- Continued copy on a separate seamless blush band.
- Corrected the mobile heading measure, supporting-copy width, and button sizes.
- Preserved the approved desktop branch without modification.
- Updated responsive regression assertions for mobile and desktop action type.

## Verification

- Focused Vitest directory test passed.
- ESLint passed.
- Next.js production build passed.
- Chrome capture at 390 px confirms the responsive treatment.

## Follow-up polish

No P3 follow-up is required for the requested section.

final result: passed
