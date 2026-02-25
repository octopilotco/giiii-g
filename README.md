# Octopilot — Marketing Landing Page

AI-powered Sales Proof Intelligence. Production-ready Next.js landing page.

## Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Fonts**: Space Mono, Instrument Serif, DM Sans (Google Fonts)
- **Icons**: Lucide React
- **Hosting**: Vercel

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
npx vercel --prod
```

## Folder Structure

```
app/
  globals.css        ← Design tokens, global styles, component classes
  layout.tsx         ← Root layout, metadata, JSON-LD, OG tags
  page.tsx           ← Landing page route

components/
  sections/
    hero-section.tsx       ← Hero + SiteNav (includes starfield canvas)
    problem-section.tsx    ← Pain points
    solution-section.tsx   ← 3-step how it works
    features-section.tsx   ← 6-feature grid
    use-case-section.tsx   ← Persona: Founder/Dev/Indie Hacker
    comparison-section.tsx ← Octopilot vs Others table
    pricing-section.tsx    ← 3-tier pricing grid
    faq-section.tsx        ← Accordion FAQ (client component)
    cta-section.tsx        ← Early access form + lifetime deal
    footer-section.tsx     ← Footer with links

lib/
  utils.ts            ← cn() helper, SITE constants

tailwind.config.ts    ← Design tokens mapped to Tailwind
```

## Design System

All design tokens sourced from `app/globals.css`:

| Token | Value |
|-------|-------|
| `--bg` | `#080808` |
| `--bg-raised` | `#0f0f0f` |
| `--accent` | `#ff6308` |
| `--text` | `#f0f0ee` |
| `--font-mono` | Space Mono |
| `--font-serif` | Instrument Serif |
| `--font-sans` | DM Sans |

## TODO: Production Setup

- [ ] Connect email form in `CTASection` to Resend/ConvertKit
- [ ] Add `OG_IMAGE` to `/public/og-image.png` (1200×630)
- [ ] Add favicon assets to `/public/`
- [ ] Set `NEXT_PUBLIC_SITE_URL` environment variable
- [ ] Enable Google Analytics / Plausible
- [ ] Run `npm run build` and verify Lighthouse scores
