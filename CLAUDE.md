# CLAUDE.md — AI Guidance for portfolio-jerardpelaez

## Project Overview

Personal portfolio website for **Jerard Pelaez**, a Senior Frontend Developer specializing in Vue.js, Nuxt, and TypeScript. This is a single-page static site built with Astro's Islands Architecture — static-first with interactive Vue islands hydrated on demand.

**Live repo:** https://github.com/jerardpelaez/portfolio-jerardpelaez

## Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Framework    | Astro 5.17 (SSG)                    |
| UI Islands   | Vue 3.5 (Composition API, `<script setup>`) |
| Styling      | Tailwind CSS 4.1 (via Vite plugin)  |
| Language     | TypeScript (strict mode)            |
| Animation    | GSAP 3.14 (used in ProjectFilter only) |
| Contact Form | Web3Forms API                       |
| Build        | Vite (via Astro)                    |
| Package Mgr  | bun                                 |

## Commands

```bash
bun run dev       # Start dev server at localhost:4321
bun run build     # Production build to ./dist/
bun run preview   # Preview production build locally
```

No test framework is configured. No linter/formatter config exists.

## Project Structure

```
src/
├── assets/images/       # Project screenshots, profile photo, certs
├── components/
│   ├── astro/           # Static server-rendered components (zero JS shipped)
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── TechConstellation.astro
│   │   ├── Projects.astro
│   │   └── Contact.astro
│   └── vue/             # Interactive client-side components
│       ├── ContactForm.vue      # client:visible
│       ├── MobileNav.vue        # client:media="(max-width: 768px)"
│       ├── ProjectFilter.vue    # GSAP stagger animations
│       └── TechConstellation.vue
├── data/
│   └── skills.ts        # Skill categories, proficiency levels, positioning algo
├── layouts/
│   └── BaseLayout.astro # HTML shell, SEO meta, imports Header/Footer
├── pages/
│   └── index.astro      # Single page — composes all sections
├── styles/
│   └── global.css       # Tailwind v4 @theme config + custom utilities
├── types/
│   └── constellation.ts # TypeScript interfaces for skills visualization
└── utils/
    └── animations.ts    # Animation initialization (currently instant reveal)
public/                  # Static files: favicon, resume PDF
```

## Architecture Rules

### Astro vs Vue — When to use which

- **Use `.astro` components** for static content sections (no interactivity needed). These ship **zero JavaScript** to the client.
- **Use `.vue` components** only when the section requires client-side interactivity (forms, filters, menus, animations).
- Always apply the most restrictive hydration directive:
  - `client:visible` — hydrate when scrolled into view (preferred for below-fold)
  - `client:media="(max-width: 768px)"` — hydrate only at mobile breakpoints
  - `client:load` — hydrate immediately (use sparingly)

### Component Hierarchy

```
BaseLayout.astro
├── Header.astro → MobileNav.vue [client:media]
├── <slot> → index.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── TechConstellation.astro → TechConstellation.vue
│   ├── Projects.astro → ProjectFilter.vue
│   └── Contact.astro → ContactForm.vue [client:visible]
└── Footer.astro
```

### Navigation

Single-page with anchor links: `#hero`, `#about`, `#skills`, `#projects`, `#contact`. Smooth scroll enabled via CSS `scroll-smooth` on `<html>`.

## Coding Conventions

### Naming

| Item               | Convention  | Example                      |
|--------------------|-------------|------------------------------|
| Astro components   | PascalCase  | `TechConstellation.astro`    |
| Vue components     | PascalCase  | `ProjectFilter.vue`          |
| Data/util files    | camelCase   | `skills.ts`, `animations.ts` |
| Style files        | kebab-case  | `global.css`                 |
| Variables/functions| camelCase   | `activeFilter`, `generatePositions()` |
| Interfaces/types   | PascalCase  | `ConstellationSkill`         |
| Constants          | UPPER_SNAKE | `GOLDEN_ANGLE`               |

### TypeScript

- **Strict mode** enabled (`astro/tsconfigs/strict`)
- All data structures must be typed with interfaces
- Use `import type` for type-only imports
- Props defined via `defineProps<Props>()` generic syntax in Vue
- No `any` types — prefer explicit typing

### Imports

- Relative paths for local files: `'../layouts/BaseLayout.astro'`
- Astro builtins: `import { Image } from 'astro:assets'`
- Type-only imports: `import type { ConstellationSkill } from '../../types/constellation'`

### State Management

- **No global state library** — component-local state only
- Use Vue Composition API (`ref`, `reactive`, `computed`)
- Props-based data flow from Astro parents to Vue children
- Keep state minimal and colocated with usage

## Design System — "Forest Lavender"

### Color Palette

| Token            | Value     | Usage                    |
|------------------|-----------|--------------------------|
| `--color-primary`| `#A78BFA` | Lavender — accents, CTAs |
| `--color-primary-dark` | `#8B5CF6` | Hover states       |
| `--color-primary-light`| `#C4B5FD` | Subtle highlights  |
| `--color-dark-deep`   | `#0A0C0A` | Page background    |
| `--color-dark-surface` | `#161916` | Card backgrounds   |
| `--color-text`   | `#F0EDE8` | Body text                |
| `--color-muted`  | `#9A9990` | Secondary text           |
| `--color-success`| `#6EE7B7` | Success states           |

### Styling Rules

- Tailwind v4 configured via `@theme` directive in `global.css` (not `tailwind.config.js`)
- Use existing custom utilities: `.glass`, `.glow-purple`, `.glow-soft`, `.gradient-border`, `.bento-grid`
- Typography uses fluid clamp-based sizing — do not use fixed `px` for text
- All interactive elements need `focus-visible` styles (already in global.css)
- Support `prefers-reduced-motion` — disable animations for users who prefer it
- Minimum touch target: 44px
- Dark theme only — no light mode

## Content & Data

- **All content is hardcoded** in component files or `src/data/`
- No CMS, no Markdown content collections, no external data sources
- Project data lives inline in `Projects.astro`
- Skills data lives in `src/data/skills.ts`
- Navigation items are defined inline in `Header.astro`

## Environment Variables

| Variable | Purpose | Prefix |
|----------|---------|--------|
| `PUBLIC_WEB3FORMS_ACCESS_KEY` | Contact form API key | `PUBLIC_` = client-accessible |

Template at `.env.example`. Never commit `.env` to git.

## Git Conventions

- **Single branch:** `master`
- **Commit style:** Lowercase, imperative, concise (e.g., "fix errors", "update colors", "add resume and favicon")
- **Single contributor** project
- No CI/CD pipelines configured
- No pre-commit hooks or linting gates

## Known Technical Debt

- `gsap` is a dependency but only used in `ProjectFilter.vue` — rest of animations are instant reveals in `animations.ts`
- `lenis` (smooth scroll) is installed but not actively used
- No ESLint or Prettier configuration
- No testing framework
- No sitemap, robots.txt, or structured data (JSON-LD) for SEO
- Images in `src/assets/images/` are large (500KB–1.3MB) — could benefit from further optimization

## Do's and Don'ts

**Do:**
- Keep the site performant — minimize JS shipped to the client
- Use Astro components for new static sections
- Follow the existing Tailwind v4 theme tokens for colors/spacing
- Type everything with TypeScript interfaces
- Use Astro's `<Image>` component for optimized images
- Maintain accessibility: ARIA labels, focus states, semantic HTML

**Don't:**
- Don't add a CSS-in-JS library — use Tailwind
- Don't add global state management (Pinia/Vuex) — keep state local
- Don't add client-side routing — this is a single-page static site
- Don't use `client:load` unless absolutely necessary — prefer `client:visible` or `client:media`
- Don't break the dark theme — there is no light mode
- Don't commit `.env` files or the Web3Forms API key
