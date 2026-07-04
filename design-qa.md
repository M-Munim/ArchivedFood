**Design QA**

- Source visual truth: four For Parents Figma screenshots attached to the current conversation.
- Implementation screenshot: `D:\AE\ArchivedFood\for-parents-after.png`
- Viewport: 1440 × 1400.
- State: default desktop page; the cookie-consent overlay appears below the requested form.
- Full-view comparison evidence: the rendered photo, wave, copy, and form were opened and visually checked against the supplied combined Figma composition.
- Focused region comparison evidence: child-image crop, wave overlap, headline line breaks, copy widths, form dimensions, field spacing, and submit-button proportions were inspected.

**Findings**

- No visible P0/P1/P2 mismatch remains in the requested hero and form composition.
- Exact combined-image comparison is unavailable because the Figma screenshots are conversation attachments rather than local files.
- The cookie banner overlaps the following page section but does not obscure the requested hero or form.

**Patches Made**

- Replaced the previous hero photo with `Asset 1@4x 2.png`.
- Replaced the handmade SVG wave with `forParent.png`.
- Added the compact header treatment for the For Parents route.
- Matched the Figma image overlap, headline line breaks, body-copy widths, and vertical rhythm.
- Restyled the three waitlist fields and submit button to the Figma dimensions.
- Preserved form validation and added an accessible success state.

**Implementation Checklist**

- If strict pixel-diff evidence is required, save the combined Figma frame locally and place it beside the current implementation capture.

final result: blocked
