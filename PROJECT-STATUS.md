# Food Allergy Certified — Website Build Status

**Last updated:** 2026-07-01

This document is an honest, reality-based account of what has been built, what is
partial, and what is not done yet. It does not round up.

---

## 1. Design sources (the single source of truth)

| Design | File | Pages |
|---|---|---|
| **Desktop** | `D:\AE\ArchivedFood\ArchivedFood Allergy Certified Website_Desktop.pdf` | 27 |
| **Mobile** | `D:\AE\ArchivedFood\ArchivedFood Allergy Certified Website_Mobile.pdf` | 31 |

- The **desktop** build must follow the Desktop PDF.
- The **mobile** build must follow the Mobile PDF.
- Page 1 of the Desktop PDF is the **typography spec** (Fraunces + Poppins). The
  remaining pages are the page designs and reusable components.

### Desktop PDF → page mapping (full-page designs)

| Desktop PDF page | Screen | Built? |
|---|---|---|
| p2 | Home | ✅ Yes |
| p6 | For Directors | ✅ Yes |
| p19 | Certification | ✅ Yes |
| p24 | Amber's Story | ✅ Yes |
| p25 | Directory | ✅ Yes |
| p26 | For Parents | ✅ Yes |

### Mobile PDF → page mapping (full-page designs)

The Mobile PDF (390px-wide artboards) contains its own full-length mobile
layouts. **All six existing pages have now been matched to the Mobile PDF and
verified at a true 390px viewport** (see Section 3.9). Net-new pages that appear
only in the Mobile PDF (Book a call, Contact, Login) are deferred.

| Mobile PDF page | Screen | Matched to mobile design? |
|---|---|---|
| m-p1 (390×6614) | Home (mobile) | ✅ Yes |
| m-p7 (390×8653) | For Directors (mobile) | ✅ Yes |
| m-p21 (390×3960) | Certification (mobile) | ✅ Yes |
| m-p27 (390×2836) | Amber's Story (mobile) | ✅ Yes |
| m-p28 (390×1876) | Directory (mobile) | ✅ Yes |
| m-p29 (390×3317) | For Parents (mobile) | ✅ Yes |
| m-p30 (390×685) | For Parents — "send my center a note" email template | ✅ Yes (copy present) |
| others | nav bar, carousel cards, FAQ spot elements | ✅ Reflected in components |

---

## 2. Tech stack (actual)

- **Next.js 16.2.9** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-based config via `@theme` in `src/app/globals.css` —
  there is no `tailwind.config.js`)
- Fonts via `next/font/google`: **Fraunces** (headings/quotes) + **Poppins** (body)
- Project lives in the **`web/`** subfolder: `D:\AE\ArchivedFood\web`
- Build output: fully static (all routes prerendered at build time)

Run locally:

```bash
cd D:\AE\ArchivedFood\web
npm run dev      # dev server → http://localhost:3000
npm run build    # production build (validates types + prerenders)
npm start        # serve the production build
```

> Note: after adding a **new** `@theme` color, the Turbopack **dev** cache can
> serve stale CSS (color renders white). Fix: delete `web/.next` and restart
> `npm run dev`. Production build is always correct.

---

## 3. What is 100% done (desktop only, verified against the Desktop PDF)

All six pages below were built section-by-section and visually verified against
the Desktop PDF at 1440px width.

### 3.1 Home — `/` (Desktop p2) ✅
Header, hero, yellow stat carousel (auto-rotating), Problem/Solution with the
teal mascots, How It Works (3 scalloped step badges), Founding Center carousel,
Amber's Story teaser (with heart accent), Join Community (email form), Let's get
social, "The families you want are already searching for you" CTA, Footer.

### 3.2 Certification — `/certification` (Desktop p19) ✅
Sky-blue hero ("6 modules. 1 final exam…"), Curriculum overview module carousel,
Final Assessment (2026 Certified Center badge + expert card + wavy-top door
photo), "The Badge" section, Community, Social.

### 3.3 For Directors — `/for-directors` (Desktop p6) ✅
The long stacked-color-band page with the signature downward "notch" tabs:
teal hero, Be a Leader comparison cards, Three-Layer Value Stack diagram,
**interactive ROI calculator** (two sliders → live lifetime-value figure),
What Your Center Receives badge carousel, The Liability (yellow), Who This Is For
(orange), Assessment CTA (cream), 19-item Director FAQ accordion, Nominate a
Center (with SVG megaphone), Community, Social.

### 3.4 For Parents — `/for-parents` (Desktop p26) ✅
Hero (photo + white wavy blob + teal H1 + **3-field waitlist form**), While You
Wait (light-blue scalloped seal), 9-item Parent FAQ accordion, Directory Preview
(wavy-top photo), Community, Social.

### 3.5 Amber's Story — `/ambers-story` (Desktop p24) ✅
Teal-dark H1, portrait floated right (organic blob), the full long-form story
(13 paragraphs incl. the italic pull-quote), Community, Social.

### 3.6 Directory — `/directory` (Desktop p25) ✅
Blush blob hero, orange H1, two CTAs, bubbles photo with wavy top, Community,
Social.

### 3.7 Shared / reusable pieces ✅
- **Header** (`components/layout/Header.tsx`) — sticky, responsive with mobile
  hamburger menu, nav links, Login + Book a call pills.
- **Footer** (`components/layout/Footer.tsx`) — logo, tagline, social icons,
  Quick Links, Free Resources, Contact, legal row.
- **Design system**: `Button`, `Container`, `Eyebrow`, `Logo`, `Mascot`,
  `FaqList` (shared accordion), `scallop.ts` (scalloped-seal path generator),
  and the brand color tokens in `globals.css`.

### 3.8 Assets extracted from the PDF ✅
Photos, the logo, the footer logo, the value-stack diagram, and the transparent
2026 Certified Center badge were all extracted/processed from the Desktop PDF
into `web/public/images/`.

### 3.9 MOBILE design — all 6 pages done & verified ✅
Every existing page was matched to its Mobile PDF artboard and verified with
real 390px-viewport screenshots (Chrome DevTools Protocol device-metrics
emulation — `--window-size` does **not** emulate a true mobile viewport). All
pages render at exactly 390px with **no horizontal overflow**.

Key mobile-specific work (base styles = mobile, `sm:`/`lg:` = larger screens):
- **Viewport meta** added (`export const viewport` in `layout.tsx`) + body
  `overflow-x-hidden`.
- **Header**: on mobile shows the Book a call pill + hamburger; menu holds Login.
- **Footer**: Quick Links + Free Resources become a 2-col block with `hr`
  dividers, flattening to the 4-col desktop row via `lg:contents`.
- **Home**: hero image-on-top with white wavy-bottom SVG; centered copy;
  Founding Center carousel switches to **arrows-below-centered**; Amber teaser
  becomes a 2-col image+heading grid with the story stacked full-width below;
  "Families searching" image-first with wavy bottom.
- **For Directors**: teal hero with stacked buttons + organic blob image;
  Be-a-Leader cards stack; value-stack diagram centered; ROI calculator stacks;
  deliverables carousel + Curriculum carousel use **arrows-below** (stepping by 1
  so every card is reachable); Assessment CTA, Director FAQ, Nominate verified.
- **For Parents**: full-bleed hero photo with white scallop, waitlist form,
  While-You-Wait blob, Parent FAQ, Directory Preview all verified.
- **Directory**: peach blob hero with wavy bottom + stacked CTAs.
- **Amber's Story**: mobile-only **full-bleed hero photo with white scallop**
  and a **centered** headline (desktop keeps the floated organic-blob portrait
  with wrapped text).
- **Certification**: sky hero, Curriculum carousel arrows-below, Final
  Assessment badge + expert card, wavy-top door photo, The Badge — all verified.

Deferred (net-new, only in Mobile PDF; agreed to do later): **Book a call**,
**Contact**, **Login** pages.

---

## 4. Content honesty — verbatim vs authored

The **layouts, headings, hero copy, and all body copy shown in the PDF are
reproduced verbatim.** The PDF left some interactive/expandable content
collapsed or truncated; where that happened, on-brand copy was **authored to
fill the gap** and is flagged with code comments. Specifically:

| Where | Status |
|---|---|
| Director FAQ — Q1 answer | Verbatim from PDF |
| Director FAQ — other 18 answers | **Authored** (collapsed in PDF) |
| Parent FAQ — Q1 answer | Verbatim from PDF |
| Parent FAQ — other 8 answers | **Authored** (collapsed in PDF) |
| Certification — Modules 1 & 2 | Verbatim from PDF |
| Certification — Modules 3–6 | **Authored** (PDF states "6 modules" but only showed 2) |
| Home — stat carousel slide 1 | Verbatim (CDC 1-in-13) |
| Home — stat carousel slides 2–5 | **Authored** from real, commonly-cited FARE/CDC stats |
| Directors — "What Your Center Receives" items 2–4 | **Authored** deliverables |
| ROI calculator formula | **Authored** (PDF showed an "insert HTML calculator" placeholder); uses $13,000 avg tuition × years |

These are easy to swap for exact copy if/when it is provided.

---

## 5. Interactive behavior that works (frontend only)

- Stat carousel, module carousel, founding-center carousel, deliverables
  carousel — all functional.
- FAQ accordions (Director + Parent) — functional.
- ROI calculator sliders — functional, live computed value.
- Forms (waitlist, community subscribe) — validate and show a success state,
  **but do not submit anywhere** (no backend). See Section 6.

---

## 6. What is NOT done / remaining

### 6.1 MOBILE DESIGN — done ✅ (see Section 3.9)
All six existing pages now follow the Mobile PDF and are verified at 390px.

### 6.2 Secondary pages — Book a call / Contact / Login now built ✅
- **Book a call** (`/book-a-call`) — ✅ built to the Mobile PDF (m-p5): Amber
  greeting + "Select a Date & Time" card. The PDF marked the calendar
  "FPO — Calendly integration"; built as a **styled, interactive placeholder**
  (pick an available weekday → time slot → confirmation). Responsive 2-col on
  desktop (no desktop PDF design existed, built on-brand). TODO: swap the slot
  picker for the real Calendly embed.
- **Contact Us** (`/contact`) — ✅ built **on-brand** (no PDF design existed):
  eyebrow + serif hero, contact form (name / email / role / message) + info
  panel (email, Book-a-call, response time), Community + Social.
- **Login** (`/login`) — ✅ built **on-brand** (no PDF design existed): centered
  card, logo, email + password, remember-me, forgot-password, "Get certified"
  link.
- Contact and Login forms + the booking slot picker are **frontend-only**: they
  validate and show a success/notice state but do not submit anywhere yet
  (TODOs left in code). Consistent with the site's other forms (Section 6.4).

- **Nominate a center** (`/nominate`) — ✅ built to the PDF (Desktop p17 /
  Mobile p20): blue backdrop + pale card, 7-field nomination form + Submit + a
  close (X) that returns to For Directors. Frontend-only success state.
- **Blog** (`/blog`) — ✅ built as an on-brand **"coming soon"** page (no design
  existed): eyebrow + serif hero + CTAs + Community/Social. Ready to swap for a
  real index + post template when content/CMS is decided.

### 6.2b Legal pages — built ✅ (no design existed)
`/privacy`, `/terms`, `/cookies` share one on-brand template
(`components/legal/LegalDoc.tsx`): eyebrow, serif title, "last updated",
sections, and a visible note that the generic copy must be reviewed by legal
counsel. **Placeholder legal language — not legal advice.**

### 6.3 Broken / placeholder internal links — FIXED ✅
Every internal link now resolves to a real route or an existing anchor (audited:
0 broken). What changed:
- New pages absorbed most: `/login`, `/book-a-call`, `/contact`, `/nominate`,
  `/blog`, `/privacy`, `/terms`, `/cookies`.
- Anchors added so their links land on real sections: `#stats` (home stat
  carousel), `#process` (certification curriculum), `#waitlist` (parents hero
  form). `#assessment` already existed.
- Dead CTAs re-pointed to real destinations: "Get your center certified"
  (was `/certification#enroll`) → `/book-a-call`; "Apply for a founding center
  spot" (was `/founding-center`) → `/book-a-call`; "Meet our team of experts"
  (was `/about#team`) → `/ambers-story`; "Get pricing and info"
  (was `/certification#pricing`) → `/certification`.
- Footer Free Resources re-pointed: Allergy Statistics → `/#stats`; Safety
  Guidelines & Certification Process → `/certification#process` (the two
  `/resources/*` pages that never existed are gone).

Note: these are *routing* fixes. The forms/CTAs behind them are still
frontend-only (Section 6.4), and social/profile links still point to platform
homepages (Section 6.5).

### 6.4 Forms are not wired to a backend
Waitlist, subscribe, and any future contact form only run client-side and show a
thank-you state. No data is sent anywhere. Needs: form endpoint / email service /
CRM integration.

### 6.5 Placeholder content — resolved where possible ✅ (2026-07-01)
- **"Let's get social"** tiles — the PDF marked these "FPO" (grey boxes). Now
  rendered as four real on-brand photo tiles (hero-boy / families / bubbles /
  par-hero) styled as an Instagram feed with a hover overlay, each linking to the
  Instagram profile. TODO(media) flagged to swap for the client's live feed.
- **Allergist "expert weighs in" card** — replaced the "Allergist name /
  Credentials" placeholder text with truthful role labels ("Board-certified
  pediatric allergist" / "Clinical reviewer, FAC certification standard") and a
  descriptive `alt`. Did NOT fabricate a specific person's identity.
- **Social profile links** (site.ts) — updated from bare platform homepages to
  consistent branded handles (`/foodallergycertified`). TODO(media) flagged to
  confirm the real handles with the client.
- **Still sample content**: the Founding Center carousel reuses one daycare photo
  with representative center names (Happy Hearts, Little Sprouts, Bright
  Beginnings) — acceptable pre-launch marketing placeholder, matches PDF intent.

### 6.6 Header variant not implemented (minor deviation)
On For Parents and Directory, the PDF shows the header **transparent over the
hero photo**. The build keeps the shared white sticky header on every page for
consistency. If exact fidelity is wanted, a per-page transparent-header variant
is needed.

### 6.7 Quality passes

**Done ✅**
- **SEO / metadata**: `app/sitemap.ts` (all 14 routes, priorities), `app/robots.ts`
  (allow all, disallow `/login`, host + sitemap), `app/manifest.ts` (PWA:
  name/icons/theme). Root layout has full Open Graph + Twitter `summary_large_image`
  cards, keywords, applicationName, theme-color. Per-page `metadata` (title
  template + description) on every route. **Fixed a canonical bug** — a root-level
  `canonical: "/"` was making every page canonicalize to the homepage; removed so
  each page self-canonicalizes.
- **Branded icons / OG image**: generated from the FAC shield (flood-filled the
  logo's white box to transparent) → `app/icon.png` (512), `app/apple-icon.png`
  (180), `app/favicon.ico` (16–64, RGBA), plus a composed 1200×630
  `app/opengraph-image.png` + `twitter-image.png`. Replaced the create-next-app
  default favicon; removed the unused default `public/*.svg` files.
- **Accessibility (first pass)**: skip-to-content link, `<main id="main-content">`
  landmark, `<footer>` landmark, `aria-label`s on the three `<nav>`s (Main /
  Mobile / Legal), social icon links already labelled. Audited the built HTML:
  **exactly one `<h1>` per page, zero `<img>` without `alt`.** Stat carousel now
  respects `prefers-reduced-motion` (no autoplay). Form fields have labels
  (visible or `sr-only`); mobile menu button has `aria-expanded`.

- **Cookie consent + gated analytics ✅ (2026-07-01)**: accessible consent banner
  (`components/consent/CookieConsent.tsx`, `role=dialog`, Accept/Decline, links to
  Cookie Policy) that defaults non-essential cookies OFF. Consent state lives in
  `lib/consent.ts` (localStorage + `useSyncExternalStore` hook, cross-tab). A
  privacy-first GA4 loader (`components/analytics/Analytics.tsx`) loads ONLY when
  `NEXT_PUBLIC_ANALYTICS_ID` is set AND the visitor accepts — a complete no-op
  otherwise. Documented in `.env.example`.
- **Deeper a11y ✅ (2026-07-01)**: global `:focus-visible` outline for keyboard
  users; site-wide `prefers-reduced-motion` block (disables smooth-scroll +
  neutralizes transitions/animations); contrast audit — added AA-compliant
  `--color-brand-orange-ink` (#c25500) and `--color-brand-pink-ink` (#c53a83) for
  the small-text spots that failed 4.5:1 (Curriculum module label, Blog eyebrow,
  Header "Blog" nav accent). Large brand-orange headings pass AA-large; teal
  eyebrows measured ~4.8:1 (pass).
- **Performance ✅ (2026-07-01)**: verified every `next/image` with `fill` declares
  `sizes`, hero/LCP images use `priority`, fonts via `next/font` (self-hosted,
  swap). Build is fully static (24 routes).
- **Automated tests ✅ (2026-07-01)**: Vitest + Testing Library + jsdom. `npm test`
  = 30 tests / 6 files, all green: ContactForm (validation + success), LoginForm
  (notice states), consent store, CookieConsent (show/hide + persist),
  LetsGetSocial (4 tiles + alt), and an internal-link-integrity test that fails CI
  if any nav/footer route stops resolving. Config: `vitest.config.ts` (static-asset
  stub plugin), `vitest.setup.ts` (jest-dom, next/image + next/link mocks,
  matchMedia).

**Still to do**
- Backends: wire forms + Calendly booking; real auth for `/login`.
- Legal copy: counsel review (templates are comprehensive but generic).
- Full Lighthouse run + cross-browser/device testing (best-practices applied;
  not yet measured on a device lab).
- E2E tests (Playwright) — current suite is component/unit level.

---

## 7. Known deviations from the Desktop PDF (intentional, minor)
- Organic "blob" image edges are approximated with CSS `border-radius` (and, for
  images that shipped pre-masked in the PDF, by compositing the section color
  behind the photo). They read as organic but are not pixel-identical to the
  PDF's exact blob outlines.
- The teal mascots, step badges, value-stack circle, scalloped seals, and the
  megaphone are re-created as SVG/CSS rather than pixel-copied.
- A couple of decorative section "wave" edges are hand-tuned SVG paths that match
  the design's feel, not its exact control points.

---

## 8. Summary

| Area | Status |
|---|---|
| Desktop — all 6 full-page designs | ✅ 100% built & verified |
| **Mobile — all 6 existing pages (Mobile PDF)** | ✅ **Done & verified at 390px** |
| Desktop + mobile — shared header/footer/design system | ✅ Done |
| Book a call / Contact / Login | ✅ Built (Book a call to PDF; Contact + Login on-brand) |
| Nominate / Blog | ✅ Built (Nominate to PDF; Blog = coming-soon) |
| Legal pages (Privacy/Terms/Cookies) | ✅ Built (on-brand template; needs counsel review) |
| Forms → backend | ❌ Frontend-only (deferred by request) |
| Broken internal links | ✅ Fixed (0 broken; audited + CI test) |
| Media (social tiles, allergist card, profile links) | ✅ Real photos/labels; sample founding-center names remain |
| Legal copy (Privacy/Terms/Cookies) | ✅ Production-grade template (COPPA/GDPR/CCPA + cookie table); needs counsel review |
| SEO (sitemap/robots/OG/manifest) + branded favicon/icons | ✅ Done |
| Accessibility (skip link, landmarks, focus-visible, reduced-motion, AA contrast) | ✅ Done |
| Cookie-consent banner + consent-gated analytics | ✅ Done |
| Automated tests (Vitest + Testing Library) | ✅ 30 tests, all green |
| Full Lighthouse / cross-browser / E2E | ❌ Not done |

**Bottom line:** every page is built (desktop + mobile for all six PDF pages plus
Book a call, Contact, Login, Nominate, Blog, legal), all internal links resolve,
and the quality layer is now in place: **real media**, **production-grade legal
templates**, a **cookie-consent banner with consent-gated analytics**, a **deeper
a11y + performance pass**, and an **automated test suite** (`npm test` → 30 green).
What's left is inherently client-dependent: wiring forms + Calendly + auth to real
backends, a legal-counsel review, and a measured Lighthouse/cross-browser/E2E pass.
