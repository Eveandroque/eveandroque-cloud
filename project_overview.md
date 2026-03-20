# Astro Listings — Webflow Cloud

Property listings + detail pages built with Astro, deployed to Webflow Cloud.
All data fetched from your existing Cloudflare Worker — no API routes needed here.

---

## Project structure

```
astro-listings/
├── astro.config.mjs               # Cloudflare adapter + /listings base path
├── package.json
├── tsconfig.json
├── .env                           # PUBLIC_WORKER_URL
│
└── src/
    ├── layouts/
    │   └── Layout.astro           # Base HTML shell (fonts, meta, global styles)
    │
    ├── lib/
    │   └── api.ts                 # Typed fetch wrappers for Worker endpoints
    │
    ├── pages/
    │   └── listings/
    │       ├── index.astro        # /listings  — mounts React island
    │       └── [slug].astro       # /listings/amber-estate — SSR, zero client JS
    │
    └── components/
        ├── ListingsApp.tsx        # React island entry point
        └── listings/              # All React components from Code Component version
            ├── types.ts
            ├── ListingsPage.css
            ├── hooks/
            │   ├── useFilters.ts  # nuqs URL state
            │   └── useListings.ts # React Query fetchers
            ├── SearchBar.tsx
            ├── CategoryChips.tsx
            ├── FilterModal.tsx
            └── ListingsGrid.tsx
```

---

## How it works

### /listings (index.astro)
Thin Astro shell — passes Worker URL to the React island via props.
React island (`client:load`) handles everything client-side:
- Filter state synced to URL via nuqs (pushState, back/forward works)
- Data fetching via React Query (caching, background refetch, count endpoint)
- No server-side data fetching on this route

### /listings/[slug] ([slug].astro)
Fully server-rendered at request time — no client JS shipped.
- Fetches property from Worker on the server
- Returns complete HTML — fast, fully SEO-indexed
- 404 → redirects to /listings

---

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Set your Worker URL
```bash
# .env
PUBLIC_WORKER_URL=https://your-worker.workers.dev
```

### 3. Copy React components
Copy your existing listings components into `src/components/listings/`:
```
types.ts
ListingsPage.css
hooks/useFilters.ts
hooks/useListings.ts
SearchBar.tsx
CategoryChips.tsx
FilterModal.tsx
ListingsGrid.tsx
```

### 4. Run locally
```bash
npm run dev
# → http://localhost:4321/listings
```

### 5. Deploy to Webflow Cloud
```bash
# Connect repo in Webflow Cloud dashboard
# Set mount path: /listings
# Push to trigger deploy
git push origin main
```

---

## Worker endpoints consumed

| Endpoint | Used by |
|---|---|
| `GET /api/filters` | Filter modal options (rental types, styles, areas, etc.) |
| `GET /api/listings/cards?...` | Listings grid |
| `GET /api/listings/count?...` | "Show X listings" count in modal |
| `GET /api/property?slug=` | Property detail page (server-side) |

---

## URL structure

```
yourdomain.com/                     → Webflow (unchanged)
yourdomain.com/listings             → Astro — listings page
yourdomain.com/listings?rentalTypes=Film&city=Malibu  → shareable filtered URL
yourdomain.com/listings/amber-estate → Astro — property detail
```

---

## Key packages

| Package | Purpose |
|---|---|
| `@astrojs/cloudflare` | Edge runtime adapter for Webflow Cloud |
| `@astrojs/react` | React island support |
| `@tanstack/react-query` | Data fetching + caching in the React island |
| `nuqs` | URL search params as typed React state |