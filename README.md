# Codedge Academy — Landing Page (Next.js port)

Converted from a Lovable/TanStack Start build into Next.js 15 (App Router).

## What's here
- `app/layout.tsx` — root layout, metadata, fonts (@fontsource Poppins + Inter)
- `app/page.tsx` — page entry
- `app/globals.css` — Tailwind v4 theme, converted 1:1 from the original `styles.css` (indigo/`--ink` design system kept as-is per your request)
- `components/landing/LandingPage.tsx` — the full page (Nav, Hero, Programs, Journey, Stories, FAQ, etc.) as one client component, matching the original section-by-section structure
- `public/images/` — the 5 original images (hero-learner, program-featured, mentor, cohort, aurora-bg — aurora-bg wasn't actually used in the page markup, kept for future use)

## Conversion notes
- `<img>` → `next/image` (`fill` for banner/card images, fixed `width`/`height` for avatars)
- `motion.img` → wrapped in `motion.div` + `next/image` with `fill` (framer-motion can't animate the Image component directly)
- TanStack `createFileRoute` → plain Next.js `app/page.tsx`
- Added `"use client"` to the landing component (uses `useState` + framer-motion hooks)
- **Fixed**: footer said "India · UK · UAE" — changed to "India · UK" since there's no UAE office (flagged previously)

## Not yet done
- Still uses its own indigo (`--indigo-glow`/`--ink`) design tokens, not your established brand system (`accent-blue/violet/gold/orange-alt`, `surface-dark-*`). You said keep it as-is for now — say the word when you want it restyled to match.
- Not yet wired into your existing site (new route vs. replacing homepage) — your call once you've seen it.
- `shadcn/ui` component library wasn't ported since the page doesn't use any of it.

## Run it
```
npm install
npm run dev
```

Verified: `npm run build` compiles cleanly with no TypeScript or lint errors, and the page prerenders statically.
