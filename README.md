# Vintage Portfolio

Personal portfolio built with **Next.js 16 (App Router)**, **Tailwind CSS v4** and **Motion** (`motion/react`, formerly Framer Motion). Four static pages, illustrated vintage-object mascots, paper grain and halftone print shadows.

## Setup

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all routes prerender statically)
npm start          # serve the production build
npm run typecheck
```

Requires Node 20+.

### Make it yours (5 minutes)

1. **`src/lib/site.ts`**: set `name`, `role`, `email`, `years`, `description`.
2. **`.env.local`**: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` (canonical URLs, sitemap, Open Graph).
3. **`src/components/sections/FilmStrip.tsx`**: the seven year labels on the About page are placeholder copy; replace with your own story.
4. **`src/components/sections/AboutStats.tsx`**: the skill chips and "How I work" lines are placeholders too.
5. **`src/components/sections/ContactForm.tsx`**: submitting opens the visitor's email app with the message pre-filled (no backend). Swap `onSubmit` for Formspree, Resend or an API route if you want server-side delivery.
6. **`src/components/sections/GoodFits.tsx`**: the "Reply in 48 hrs" stamp is a promise, so change it to what you can keep.

## Palette

| Token | Hex | Use |
| --- | --- | --- |
| `paper` | `#F2E6CC` | Page background |
| `cream` | `#FBF4E2` | Cards, tickets, highlights |
| `paper-deep` | `#E4D2A8` | Secondary surfaces |
| `ink` | `#2E1D14` | Dark brown: text, outlines, halftone dots |
| `ink-soft` | `#6A5444` | Muted text (5.6:1 on paper) |
| `rust` | `#B5483A` | Faded red: primary actions, accents |
| `mustard` | `#D9A33A` | Highlights, active states |
| `teal` | `#2F6E6A` | Secondary accent, panels |

Defined once in `src/app/globals.css` under `@theme`, so they are available as `bg-rust`, `text-ink`, `fill-mustard`, `border-teal`, etc.

## Folder structure

```
src/
├─ app/
│  ├─ layout.tsx            fonts, global metadata, JSON-LD, navbar + footer
│  ├─ template.tsx          page transition (colour curtain + settle-in)
│  ├─ page.tsx              Home
│  ├─ about/page.tsx        About
│  ├─ services/page.tsx     Services
│  ├─ collaborate/page.tsx  Collaborate
│  ├─ not-found.tsx         404 ("Wrong number!")
│  ├─ sitemap.ts, robots.ts, icon.svg, opengraph-image.tsx
│  └─ globals.css           palette, paper grain, halftone / ticket / press utilities
├─ components/
│  ├─ layout/               Navbar, Footer, BackToTop, Providers (MotionConfig)
│  ├─ mascots/              Typewriter, RotaryPhone, FilmCamera, Radio + shared Face/frame
│  ├─ ui/                   Button, Stamp, Reveal, SplitWords, SpeechBubble, Marquee, CountUp
│  └─ sections/             page-specific pieces (HomeHero, PageIntro, ServiceCards, ContactForm…)
└─ lib/site.ts              name, email, nav links
```

## Mascots

Each mascot is an inline SVG React component with two states, **idle** (looping) and **hover** (reaction), driven by Motion variants. They blink, float and react on hover or tap. Pass `active` to trigger the reaction from a parent (the cards do this).

| Mascot | Idle | Hover |
| --- | --- | --- |
| Typewriter "Clack" | keys tap, text types in | paper pops up, carriage shakes |
| Rotary phone "Ringo" | rings every few seconds | rings nonstop, dial spins |
| Film camera "Reel" | reels turn slowly | reels spin fast, flash bursts |
| Radio "Dial" | needle sweeps, notes float | knobs spin, notes burst |

To add one, copy a mascot file, keep `MascotFrame` + `Face`, and register it in the `mascots` maps in `FeatureCard.tsx` and `PageIntro.tsx`.

## Motion and performance

- **Reduced motion:** `MotionConfig reducedMotion="user"` in `Providers.tsx` disables transform/layout animation (including the mascot loops); scroll parallax sparkles (`FloatingBits`) are not rendered.
- Animations only touch `transform` and `opacity`; the grain is a single tiled SVG with no blend modes.
- Every route is statically prerendered; pages are server components and only the animated pieces are client components. Fonts come from `next/font` (self-hosted, no layout shift).
- Page transitions are enter-only (curtain peels away on client navigations, skipped on first load). True exit animations in the App Router need a fragile router-freezing hack, so they are left out on purpose.

## SEO

Per-page `title`, `description` and canonical URL; Open Graph and Twitter card; generated `opengraph-image`; `sitemap.xml`; `robots.txt`; `Person` JSON-LD; `lang`, skip link and landmark roles.
