# AGENTS — Fierce Media

## Project Overview

Website for **Fierce Media**, an agency for marketing and public relations ("Agencia de mercadeo y relaciones públicas"). Built with Astro + Tailwind CSS, deployed to Cloudflare Workers.

## Critical Conventions

- **`src/` is the site.** The `html/` folder is a legacy standalone variant (Tailwind CDN, still on the original purple template) that was never migrated to the current brand. It is not deployed — do not treat it as something to keep in sync unless explicitly asked.
- **`src/config/theme.mjs` is the single source of brand truth** (colors, fonts, logo). `tailwind.config.mjs` imports from it, and `Layout.astro` turns it into `:root` CSS custom properties that `src/styles/global.css` consumes. To rebrand, change `theme.mjs` — not the markup, not `global.css`.
- **No prices anywhere.** The site deliberately shows no prices, currency amounts, or "consultar precio"-style copy. `plans.json` has no `price` field. Do not reintroduce them.
- **Tailwind is v3**, not v4. Use `@tailwind base/components/utilities` directives, not `@import "tailwindcss"`.
- **PostCSS + Autoprefixer** — handled by `postcss.config.mjs`.

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview build locally |

No linter or typecheck commands configured.

## Project Structure

```
├── src/
│   ├── config/theme.mjs          # Colors, fonts, logo — single source of brand truth
│   ├── content/
│   │   ├── pages/                # Copy for Inicio, Nosotros, Contacto (JSON)
│   │   └── settings/             # site.json (brand, nav, footer), plans.json (no prices)
│   ├── layouts/Layout.astro      # Global layout (nav, footer, head, :root vars)
│   ├── pages/
│   │   ├── index.astro           # Landing page
│   │   ├── nosotros.astro        # About us
│   │   ├── contacto.astro        # Contact
│   │   ├── producto.astro        # Plan detail + WhatsApp CTA
│   │   └── servicios/            # 9 service pages
│   └── styles/global.css
├── public/                       # isotipo.png, logotipo.png, favicon.png, images
├── html/                         # LEGACY standalone CDN version — not deployed, not rebranded
├── tailwind.config.mjs
├── astro.config.mjs
└── postcss.config.mjs
```

## Design System

Palette comes from the Fierce Media identity manual (`Imágenes/Manual de identidad-FIERCE MEDIA.pdf`, §5.1). Only four solids are official: `#000000`, `#C8952C`, `#E7C279`, `#6F501E`. Everything else in the theme is a neutral or a derived tint.

### Key tokens — set in `theme.mjs`, emitted as `:root` vars by `Layout.astro`
- `--color-primary: #C8952C` — brand gold
- `--color-primary-dark: #6F501E` — dark gold: button gradient hover, and icons/text on light gold tints
- `--color-primary-fixed: #f6ead2` — light gold tint (icon chips)
- `--color-primary-fixed-dim` / `--color-inverse-primary: #E7C279` — light gold accent, link hover, scrollbar
- `--color-on-primary: #ffffff` — text on DARK surfaces (heroes, footer)
- `--color-on-accent: #000000` — text on GOLD surfaces (buttons). White on `#C8952C` is only 2.5:1, so gold buttons always take a black label.
- `--color-hero-bg: #000000` — full-bleed hero sections
- `--color-on-primary-fixed: #000000` — footer background and dark cards
- `--color-on-surface: #000000`, `--color-body-text: #333333`
- `--color-surface-dim: #faf7f2`, `--color-outline: #e6ddcd` — warm neutrals that sit under gold

### Section pattern
`<section class="bg-primary">` renders **black** (via `--color-hero-bg`), not gold — it is the hero treatment, and `global.css` already forces white text and glass cards inside it. Mid-page sections use light surfaces with a `h-1.5 w-24 bg-primary` rule as the gold accent.

### Rebranding flow
Change `src/config/theme.mjs` only. `tailwind.config.mjs` and the `:root` block in `Layout.astro` both read from it; `global.css` consumes the vars.

### Typography
- **Display/Headings**: Quicksand (corporate typeface, §4.1) — 600/700, -0.01em letter-spacing
- **Body**: Poppins (secondary typeface, §4.2) — 400 weight, 1.65 line-height
- **Label**: Poppins 600, 0.05em tracking

### Logo
`public/isotipo.png` (icon) in the header next to the brand name; `public/logotipo.png` is the full imagotipo. Per §8 the mark must not be recolored, rotated, distorted, or given shadows/outlines.

### Spacing tokens
- `gutter: 24px`, `container-max: 1280px`
- `section-padding-desktop: 120px`, `section-padding-mobile: 64px`

## Key CSS Classes (custom)

| Class | What it does |
|---|---|
| `.btn-magnetic` | Button with lift + translateX icon-wrap on hover |
| `.press-effect` | Scale(0.97) on active |
| `.card-hover` | Card with translateY(-6px) + shadow on hover |
| `.glass-card` | Semi-transparent white card for dark sections |
| `.stagger-fade` | Staggered fade-in animation (9 children) |
| `.reveal` | Single fade-up on scroll via `.in-view` |
| `.icon-wrap` | Inline icon-wrapper with translateX on parent hover |
| `.hover-lift` | Simple translateY(-3px) on hover |

## Deployment

Push to `main` on GitHub → Cloudflare auto-builds. `wrangler.jsonc` still names the Worker `pixel360`; renaming it would create a new Worker and orphan the current deployment, so leave it unless the rename is explicitly requested.
