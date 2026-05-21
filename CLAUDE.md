# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ClearStone AI is a marketing/consulting website for an AI implementation consulting business targeting mid-market operators ($25M-$250M revenue). Built as a conversion-focused landing page with a productized service funnel: free discovery call → paid Blueprint ($2,500) → implementation upsell ($15K-$45K).

## Commands

```bash
pnpm dev          # Start development server (http://localhost:3000)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router, React 19)
- **Styling**: Tailwind CSS 4 with shadcn/ui (radix-vega style)
- **Icons**: Remixicon (`@remixicon/react`)
- **Package Manager**: pnpm

### Directory Structure
```
app/              # Next.js App Router pages
├── layout.tsx    # Root layout with Inter font, metadata
├── page.tsx      # Landing page (assembles section components)
└── globals.css   # Design system: CSS variables, typography, spacing utilities

components/
├── landing/      # Landing page sections (Hero, FAQ, CTA, etc.)
├── layout/       # Site-wide components (Header, Footer, Section)
└── ui/           # shadcn components (Button, etc.)

lib/
└── utils.ts      # cn() helper for class merging

docs/
├── site-prd.md   # Full product requirements document
└── market-report.md
```

### Component Patterns

**Barrel exports**: Each component folder has an `index.ts` that re-exports all components:
```typescript
// components/landing/index.ts
export { Hero } from "./hero";
export { FAQSection } from "./faq-section";
```

**Section component**: Use `<Section>` wrapper for consistent padding/container:
```typescript
<Section container="default" padding="default" background="muted">
  {/* content */}
</Section>
```

**Button variants**: shadcn Button with `asChild` for Link wrapping:
```typescript
<Button asChild size="lg" variant="outline">
  <Link href="#section">Label</Link>
</Button>
```

### Design System (globals.css)

**Typography classes**: `text-display`, `text-h1` through `text-h4`, `text-body-lg`, `text-body`, `text-body-sm`, `text-label`, `text-caption`, `text-overline`

**Spacing utilities**: `section-py`, `section-py-sm`, `section-py-lg`, `container-narrow`, `container-default`, `container-wide`, `stack-sm/md/lg/xl`

**Brand colors**: `--primary` (charcoal), `--brand` (electric blue for CTAs), defined as oklch values with light/dark mode support

### Path Aliases
`@/*` maps to root (e.g., `@/components/ui/button`, `@/lib/utils`)

## Copywriting Guidelines

- **Never use em dashes (—)** in copy. Use periods, commas, or restructure sentences instead. Em dashes are a telltale sign of AI-generated content.
- Keep copy direct and conversational. Avoid corporate jargon.
- Reference `docs/site-prd.md` for tone, messaging pillars, and sample copy.

## Key References

- **PRD**: `docs/site-prd.md` contains full site architecture, copy direction, and conversion component specs
- **Target audience**: Mid-market operators ($25M-$250M revenue) in Professional Services, E-commerce, Manufacturing, Financial Services

## Next.js Version Note

This project uses Next.js 16 which may have breaking changes from older versions. Consult `node_modules/next/dist/docs/` before implementing new patterns.
