# Images & logos

All site imagery lives here, under `web/public/images/`. Anything in `public/`
is served at the site root, so a file at `public/images/logos/logo.png` is
reachable at `/images/logos/logo.png` and importable in components as
`@/../public/images/logos/logo.png`.

## Where to put things

| Folder | What goes here |
|---|---|
| `logos/`  | Brand logos and logo variants (full color, white/footer, mark-only, favicon source). |
| `photos/` | Real photography — hero shots, childcare/family photos, headshots, center photos. |
| `source/` | **Originals only** — high-res / unedited drops (PSD, full-res JPG/PNG). Not referenced by the site; keep here so we always have the master file to re-crop or re-export from. |
| *(root of this folder)* | The images currently wired into the build (see below). New images can go in the subfolders above. |

## How to use an image in a component

```tsx
import Image from "next/image";
import myPhoto from "@/../public/images/photos/my-photo.jpeg";

<Image src={myPhoto} alt="Describe the image for screen readers" />
```

Static imports (the pattern above) are preferred — Next.js auto-optimizes them,
generates responsive sizes, and prevents layout shift. Always provide a
descriptive `alt`.

## Currently used images (do not rename without updating imports)

These are referenced by components today. If you replace one, either keep the
same filename or update the import in the listed file.

| File | Used by |
|---|---|
| `logo.png` | `components/ui/Logo.tsx` (header) |
| `logo-footer.png` | `components/layout/Footer.tsx` |
| `hero-boy.jpeg` | home Hero + social grid |
| `families-searching.jpeg` | home FamiliesSearching + social grid |
| `amber.jpeg`, `amber-story.png` | Amber's Story, Book a call |
| `allergist.jpeg` | certification "expert weighs in" card |
| `cert-door.jpeg`, `cert-badge.png` | certification page |
| `dir-hero.png`, `dir-bubbles.jpeg`, `dir-liability.png` | For Directors / Directory |
| `par-hero.jpeg`, `par-directory.jpeg` | For Parents + social grid |
| `founding-daycare.jpeg` | home Founding Center carousel |
| `value-stack.jpeg` | For Directors value stack |

> App icons (`icon.png`, `apple-icon.png`, `favicon.ico`, `opengraph-image.png`,
> `twitter-image.png`) live in `src/app/`, **not** here — that's a Next.js
> file-based metadata convention. Keep the high-res logo master in `source/` so
> those can be regenerated.

## To-do assets (real files still needed from the client)

- Real Instagram/social feed images (currently on-brand stand-ins in the "Let's get social" grid).
- Allergist headshot + name/credentials for the certification card.
- Real founding-center photos (currently one shared placeholder photo).
- Any updated brand logo files → drop the master in `source/`, the web export in `logos/`.
