# Kshitinjay Kumar — Portfolio

Personal portfolio of a Senior Software Engineer (Frontend & Full-stack) building the real-time
interfaces of AI products. Single page, dark by default with a light theme, coral + sky accents,
an animated `agent · runtime` pipeline and a local "Ask about me" assistant that streams answers
token by token.

**Live:** https://kshitinjay.github.io/

## Stack

- **Vite + React 18 + TypeScript**, **Tailwind CSS** (theme tokens are CSS variables in
  `src/index.css`, switched by `<html data-theme>`)
- **Pre-rendered** at build time: `src/entry-server.tsx` + `scripts/prerender.mjs` inject the full
  page HTML into `dist/index.html`; the client hydrates it. Below-the-fold sections are lazy chunks.
- Self-hosted fonts (Bricolage Grotesque, Inter, JetBrains Mono — latin subsets)
- `lucide-react` icons; CSS + IntersectionObserver motion (no animation library), fully disabled
  under `prefers-reduced-motion`
- Deployed to **GitHub Pages** (user site, served from the root `/`) by GitHub Actions on push to `master`

## Editing content

All copy lives in typed files under `src/data/` — no component changes needed:

| File | Content |
|---|---|
| `profile.ts` | name, role, pitch, contact links, hero stats, about, education, nav |
| `experience.ts` | timeline entries |
| `projects.ts` | project cards (`GITHUB_REPO_PLACEHOLDER` — swap in real repo URLs) |
| `skills.ts` | grouped skill cards |
| `assistant.ts` | "Ask about me" intents (keywords → answer), suggestions, fallback |

The résumé buttons download `src/assets/Kshitinjay Resume 15Sep 5Yrs.pdf` (imported in `profile.ts`,
saved as `Kshitinjay-Kumar-Resume.pdf`). To update it, replace the PDF and adjust that import.

## Scripts

```bash
npm run dev       # dev server at http://localhost:5173/ (client-rendered)
npm run build     # type-check, client + SSR build, prerender into dist/
npm run preview   # serve the production build at http://localhost:4173/
npm run lint
```

The site is served from the root everywhere (dev, preview and production). The old
`/KshitinjayPortfolio/` URL is kept as a tiny redirect page (`public/KshitinjayPortfolio/index.html`)
so previously shared links forward to `/`, preserving any `#section`.
