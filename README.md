# Portfolio — Jedidiah "Jay" Osaro

A single-page portfolio built with **Next.js 15 (App Router)**, **TypeScript**, and
**Tailwind CSS v4**, in the **Editorial Noir** design language. The work is framed
as an exhibition catalog: a featured plate for Talk Canvas Gallery, then a numbered
catalog of selected works.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build && npm start   # production build
```

## What to edit (in order of importance)

1. **`lib/site.ts`** — your name, email, and links. The placeholders
   (`you@yourdomain.com`, `github.com/your-handle`, …) all live here. Replace them
   before deploying.
2. **`lib/projects.ts`** — the catalog. Each entry has an `index`, `title`, `role`,
   `year`, `stack`, `blurb`, and optional `href`. The one with `featured: true` is
   the centerpiece in the Featured section.
3. **`public/resume.pdf`** — drop your résumé here; the footer "Résumé" link points
   to `/resume.pdf` already.

### Live links

`href: "#"` on Talk Canvas Gallery and Frame & Code are placeholders — point them
at the live sites / repos when ready. Leave `href` off an entry entirely and it
renders as text only (no link), which is how NOC Fault Logger and Eko are set up.

### Real screenshots

The Featured section currently uses a pure-CSS "framed work + AR reticle" motif
instead of a screenshot, so nothing is faked. To use a real image, drop it in
`public/` and swap the gradient `div` in `components/Featured.tsx` for a
`next/image`.

## Design tokens

Editorial Noir lives in `app/globals.css` under `@theme`:

| token    | value     | role                              |
| -------- | --------- | --------------------------------- |
| `ink`    | `#1b1714` | primary text                      |
| `cream`  | `#f3efe6` | page ground                       |
| `paper`  | `#faf7f0` | raised surfaces (plates)          |
| `line`   | `#d8d1c2` | hairline rules                    |
| `accent` | `#9b2226` | the "on view" marker / link hover |

Type: **Fraunces** (display) · **Geist** (body) · **Geist Mono** (labels/metadata),
all self-hosted via `next/font/google`.

## Deploy

Push to GitHub and import on Vercel — zero config. Set a custom domain when ready.
```bash
npx vercel
```

## Accessibility & motion

Keyboard focus is visible and on-brand, and all entrance animations are disabled
under `prefers-reduced-motion`.
