# Digi Tracks

> Software for businesses beyond Excel.

An independent software product studio building practical applications, business platforms, and developer technology.

## Tech Stack

- React 18 + TypeScript
- Vite
- React Router (SPA)
- Vanilla CSS

## Setup

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build |
| `npm run typecheck` | Type-check only |

## Deployment

Configured for **Vercel** and **Netlify**.

Vercel: connected via GitHub, auto-deploys on push.
Netlify: uses `netlify.toml` + `public/_redirects`.

## Structure

```
src/
  components/      # Reusable UI components
  components/home/ # Homepage sections
  pages/           # Route pages
  data/            # Product registry
  hooks/           # Custom hooks
  styles/          # Global CSS
public/            # Static assets
```

## Adding Products

All product data is centralized in `src/data/products.ts`. Add a single registry entry - no component changes needed.
