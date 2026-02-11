# Astro + Vue Portfolio Website Architecture Document

## Executive Summary

This document outlines the architecture for a modern portfolio website built with Astro and Vue.js. The architecture leverages Astro's Islands Architecture for optimal performance while utilizing Vue components for interactive elements where needed.

---

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Project Structure](#project-structure)
3. [Component Architecture](#component-architecture)
4. [Islands Architecture Strategy](#islands-architecture-strategy)
5. [Styling Approach](#styling-approach)
6. [Performance Optimization](#performance-optimization)
7. [SEO Strategy](#seo-strategy)
8. [File Structure Reference](#file-structure-reference)

---

## 1. Technology Stack

### Core Technologies
- **Astro 5.x** - Static site generator with Islands Architecture
- **Vue 3.x** - UI framework for interactive components (Composition API)
- **@astrojs/vue** - Official Astro integration for Vue
- **Tailwind CSS 4.x** - Utility-first CSS framework

### Development Tools
- **TypeScript** - Type safety across components
- **Vite** - Build tool (built into Astro)

### Installation Commands
```bash
# Create new Astro project
bun create astro@latest portfolio

# Add Vue integration
bunx astro add vue

# Add Tailwind CSS
bunx astro add tailwind
```

### Configuration (astro.config.mjs)
```javascript
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    vue(),
    tailwind()
  ],
  site: 'https://yourportfolio.com',
  output: 'static'
});
```

---

## 2. Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── fonts/
│       └── (custom fonts)
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero-bg.jpg
│   │   │   ├── profile.jpg
│   │   │   └── projects/
│   │   │       ├── project-1.jpg
│   │   │       └── project-2.jpg
│   │   └── icons/
│   │       └── (SVG icons)
│   │
│   ├── components/
│   │   ├── astro/                    # Static Astro components
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Navigation.astro
│   │   │   ├── Hero.astro
│   │   │   ├── About.astro
│   │   │   ├── SkillCard.astro
│   │   │   ├── SkillsGrid.astro
│   │   │   ├── ProjectCard.astro
│   │   │   ├── ProjectsSection.astro
│   │   │   ├── SocialLinks.astro
│   │   │   └── SEO.astro
│   │   │
│   │   └── vue/                      # Interactive Vue components
│   │       ├── ContactForm.vue
│   │       ├── MobileNav.vue
│   │       ├── ProjectFilter.vue
│   │       ├── SkillChart.vue
│   │       ├── ThemeToggle.vue
│   │       └── ScrollToTop.vue
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro          # Main layout with HTML shell
│   │   └── ProjectLayout.astro       # Layout for project detail pages
│   │
│   ├── pages/
│   │   ├── index.astro               # Homepage (all sections)
│   │   ├── projects/
│   │   │   ├── index.astro           # Projects listing
│   │   │   └── [slug].astro          # Dynamic project pages
│   │   └── 404.astro                 # Custom 404 page
│   │
│   ├── content/
│   │   └── projects/                 # Content collections
│   │       ├── project-1.md
│   │       └── project-2.md
│   │
│   ├── data/
│   │   ├── skills.json               # Skills data
│   │   ├── social.json               # Social links
│   │   └── site.json                 # Site configuration
│   │
│   ├── styles/
│   │   ├── global.css                # Global styles + Tailwind imports
│   │   └── variables.css             # CSS custom properties
│   │
│   ├── utils/
│   │   └── helpers.ts                # Utility functions
│   │
│   └── types/
│       └── index.ts                  # TypeScript type definitions
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 3. Component Architecture

### 3.1 Component Decision Matrix

| Component | Technology | Reason | Hydration |
|-----------|------------|--------|-----------|
| Header | Astro | Static navigation, no JS needed | None |
| MobileNav | Vue | Interactive hamburger menu | `client:media` |
| Hero | Astro | Static content, animations via CSS | None |
| About | Astro | Static biography section | None |
| SkillsGrid | Astro | Static layout container | None |
| SkillCard | Astro | Static skill display | None |
| SkillChart | Vue | Interactive chart/visualization | `client:visible` |
| ProjectsSection | Astro | Static container | None |
| ProjectCard | Astro | Static project preview | None |
| ProjectFilter | Vue | Interactive filtering | `client:load` |
| ContactForm | Vue | Form validation & submission | `client:visible` |
| ThemeToggle | Vue | Dark/light mode toggle | `client:load` |
| ScrollToTop | Vue | Scroll behavior | `client:idle` |
| Footer | Astro | Static footer content | None |
| SEO | Astro | Meta tags (server-rendered) | None |

### 3.2 Component Hierarchy

```
BaseLayout.astro
├── SEO.astro (props: title, description, image)
├── Header.astro
│   ├── Navigation.astro
│   ├── ThemeToggle.vue [client:load]
│   └── MobileNav.vue [client:media="(max-width: 768px)"]
│
├── <slot /> (Page Content)
│   └── index.astro
│       ├── Hero.astro
│       │   └── SocialLinks.astro
│       │
│       ├── About.astro
│       │
│       ├── SkillsGrid.astro
│       │   ├── SkillCard.astro (multiple)
│       │   └── SkillChart.vue [client:visible]
│       │
│       ├── ProjectsSection.astro
│       │   ├── ProjectFilter.vue [client:load]
│       │   └── ProjectCard.astro (multiple)
│       │
│       └── ContactForm.vue [client:visible]
│
├── Footer.astro
│   └── SocialLinks.astro
│
└── ScrollToTop.vue [client:idle]
```

---

## 4. Islands Architecture Strategy

### 4.1 Client Directives Reference

| Directive | Use Case | JavaScript Loading |
|-----------|----------|-------------------|
| `client:load` | Critical interactivity (theme toggle, filters) | Immediate on page load |
| `client:idle` | Non-critical features (scroll to top) | When browser is idle |
| `client:visible` | Below-the-fold content (contact form, charts) | When element enters viewport |
| `client:media` | Device-specific features (mobile nav) | When media query matches |
| `client:only="vue"` | Client-only rendering (no SSR) | Skips server rendering |

### 4.2 Implementation Examples

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/astro/Hero.astro';
import About from '../components/astro/About.astro';
import SkillsGrid from '../components/astro/SkillsGrid.astro';
import SkillChart from '../components/vue/SkillChart.vue';
import ProjectsSection from '../components/astro/ProjectsSection.astro';
import ProjectFilter from '../components/vue/ProjectFilter.vue';
import ContactForm from '../components/vue/ContactForm.vue';
---

<BaseLayout title="Portfolio | John Doe">
  <Hero />
  <About />

  <SkillsGrid>
    <!-- Interactive chart loads when visible -->
    <SkillChart client:visible />
  </SkillsGrid>

  <ProjectsSection>
    <!-- Filter loads immediately for UX -->
    <ProjectFilter client:load />
  </ProjectsSection>

  <!-- Form loads when user scrolls to contact section -->
  <ContactForm client:visible />
</BaseLayout>
```

### 4.3 Hydration Strategy by Section

| Section | Static Content | Interactive Element | Hydration Strategy |
|---------|---------------|---------------------|-------------------|
| Hero | 100% static | None | No JS shipped |
| About | 100% static | None | No JS shipped |
| Skills | Grid/cards static | Optional chart | `client:visible` |
| Projects | Cards static | Filter buttons | `client:load` |
| Contact | Section title | Form | `client:visible` |

---

## 5. Styling Approach

### 5.1 Recommended: Tailwind CSS with Component Scoped Styles

```css
/* src/styles/global.css */
@import "tailwindcss";

/* Custom base styles */
@layer base {
  :root {
    --color-primary: #3b82f6;
    --color-secondary: #10b981;
    --color-accent: #8b5cf6;
  }

  .dark {
    --color-primary: #60a5fa;
    --color-secondary: #34d399;
    --color-accent: #a78bfa;
  }
}

/* Custom component classes */
@layer components {
  .section-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16;
  }

  .heading-primary {
    @apply text-4xl md:text-5xl font-bold text-gray-900 dark:text-white;
  }

  .heading-secondary {
    @apply text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100;
  }
}
```

### 5.2 Astro Component Scoped Styles

```astro
<!-- src/components/astro/Hero.astro -->
---
import { Image } from 'astro:assets';
import heroImage from '../../assets/images/hero-bg.jpg';
---

<section class="hero">
  <div class="hero-content">
    <h1 class="heading-primary">John Doe</h1>
    <p class="hero-subtitle">Full Stack Developer</p>
  </div>
  <Image src={heroImage} alt="Hero background" class="hero-bg" />
</section>

<style>
  .hero {
    @apply relative min-h-screen flex items-center justify-center;
  }

  .hero-content {
    @apply relative z-10 text-center;
  }

  .hero-subtitle {
    @apply text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-4;
  }

  .hero-bg {
    @apply absolute inset-0 w-full h-full object-cover opacity-20;
  }
</style>
```

### 5.3 Vue Component Styling

```vue
<!-- src/components/vue/ContactForm.vue -->
<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        v-model="form.name"
        type="text"
        id="name"
        class="form-input"
        required
      />
    </div>
    <!-- Additional fields... -->
    <button type="submit" class="submit-btn">
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const form = reactive<FormData>({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  // Form submission logic
  isSubmitting.value = false;
};
</script>

<style scoped>
.contact-form {
  @apply max-w-lg mx-auto space-y-6;
}

.form-group {
  @apply flex flex-col gap-2;
}

.form-input {
  @apply w-full px-4 py-3 rounded-lg border border-gray-300
         dark:border-gray-600 dark:bg-gray-800
         focus:ring-2 focus:ring-primary focus:outline-none
         transition-colors duration-200;
}

.submit-btn {
  @apply w-full py-3 px-6 bg-primary text-white font-semibold
         rounded-lg hover:bg-primary/90 transition-colors
         disabled:opacity-50 disabled:cursor-not-allowed;
}
</style>
```

---

## 6. Performance Optimization

### 6.1 Image Optimization

```astro
---
// Use Astro's built-in Image component for automatic optimization
import { Image, Picture } from 'astro:assets';
import profileImage from '../assets/images/profile.jpg';
---

<!-- Single format with automatic WebP conversion -->
<Image
  src={profileImage}
  alt="Profile photo"
  width={400}
  height={400}
  loading="lazy"
  decoding="async"
/>

<!-- Multiple formats with responsive sizes -->
<Picture
  src={profileImage}
  formats={['avif', 'webp']}
  widths={[400, 800, 1200]}
  sizes="(max-width: 768px) 100vw, 400px"
  alt="Profile photo"
/>
```

### 6.2 Performance Checklist

| Optimization | Implementation |
|--------------|----------------|
| Zero JS by default | Use Astro components for static content |
| Lazy hydration | Use `client:visible` for below-fold components |
| Image optimization | Use `<Image>` and `<Picture>` components |
| Font optimization | Self-host fonts, use `font-display: swap` |
| CSS optimization | Tailwind purges unused styles automatically |
| Code splitting | Automatic with Astro's build process |
| Prefetching | Enable `prefetch` in astro.config.mjs |
| Compression | Use Astro compression integration |

### 6.3 Configuration for Optimization

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

export default defineConfig({
  integrations: [
    vue(),
    tailwind(),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: false, // Astro handles this
      SVG: true
    })
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});
```

### 6.4 Expected Performance Metrics

| Metric | Target | Strategy |
|--------|--------|----------|
| First Contentful Paint | < 1.0s | Static HTML, optimized images |
| Largest Contentful Paint | < 2.0s | Hero image optimization, preload |
| Cumulative Layout Shift | < 0.1 | Image dimensions, font loading |
| Total Blocking Time | < 150ms | Minimal JS, deferred hydration |
| Time to Interactive | < 2.5s | Islands architecture |

---

## 7. SEO Strategy

### 7.1 SEO Component

```astro
---
// src/components/astro/SEO.astro
interface Props {
  title: string;
  description: string;
  image?: string;
  canonicalURL?: string;
  type?: 'website' | 'article';
}

const {
  title,
  description,
  image = '/og-default.jpg',
  canonicalURL = Astro.url.href,
  type = 'website'
} = Astro.props;

const siteConfig = {
  name: 'John Doe Portfolio',
  url: 'https://johndoe.dev',
  twitterHandle: '@johndoe'
};
---

<!-- Primary Meta Tags -->
<title>{title} | {siteConfig.name}</title>
<meta name="title" content={`${title} | ${siteConfig.name}`} />
<meta name="description" content={description} />
<meta name="author" content="John Doe" />
<link rel="canonical" href={canonicalURL} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content={type} />
<meta property="og:url" content={canonicalURL} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL(image, siteConfig.url).href} />
<meta property="og:site_name" content={siteConfig.name} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={canonicalURL} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={new URL(image, siteConfig.url).href} />
<meta property="twitter:creator" content={siteConfig.twitterHandle} />

<!-- Structured Data -->
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "John Doe",
  "url": siteConfig.url,
  "jobTitle": "Full Stack Developer",
  "sameAs": [
    "https://github.com/johndoe",
    "https://linkedin.com/in/johndoe",
    "https://twitter.com/johndoe"
  ]
})} />
```

### 7.2 Base Layout with SEO

```astro
---
// src/layouts/BaseLayout.astro
import SEO from '../components/astro/SEO.astro';
import Header from '../components/astro/Header.astro';
import Footer from '../components/astro/Footer.astro';
import ScrollToTop from '../components/vue/ScrollToTop.vue';
import '../styles/global.css';

interface Props {
  title: string;
  description?: string;
  image?: string;
}

const {
  title,
  description = 'Full Stack Developer specializing in modern web technologies',
  image
} = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="sitemap" href="/sitemap-index.xml" />

    <!-- Preload critical assets -->
    <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin />

    <SEO title={title} description={description} image={image} />
  </head>
  <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
    <ScrollToTop client:idle />
  </body>
</html>
```

### 7.3 Sitemap Configuration

```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://johndoe.dev',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ]
});
```

### 7.4 SEO Checklist

| Item | Implementation |
|------|----------------|
| Meta tags | SEO.astro component |
| Open Graph | Included in SEO component |
| Twitter Cards | Included in SEO component |
| Structured Data | JSON-LD in SEO component |
| Sitemap | @astrojs/sitemap integration |
| Robots.txt | public/robots.txt |
| Canonical URLs | Dynamic in SEO component |
| Alt text | Required on all Image components |
| Semantic HTML | Use proper heading hierarchy |
| Page speed | Islands architecture optimization |

---

## 8. File Structure Reference

### 8.1 Complete Component Files

#### Astro Components (Static)

| File | Purpose |
|------|---------|
| `src/components/astro/Header.astro` | Site header with navigation |
| `src/components/astro/Footer.astro` | Site footer with links |
| `src/components/astro/Navigation.astro` | Desktop navigation menu |
| `src/components/astro/Hero.astro` | Hero section with headline |
| `src/components/astro/About.astro` | About/bio section |
| `src/components/astro/SkillCard.astro` | Individual skill display |
| `src/components/astro/SkillsGrid.astro` | Skills section container |
| `src/components/astro/ProjectCard.astro` | Project preview card |
| `src/components/astro/ProjectsSection.astro` | Projects section container |
| `src/components/astro/SocialLinks.astro` | Social media icons |
| `src/components/astro/SEO.astro` | SEO meta tags component |

#### Vue Components (Interactive)

| File | Purpose | Hydration |
|------|---------|-----------|
| `src/components/vue/ContactForm.vue` | Contact form with validation | `client:visible` |
| `src/components/vue/MobileNav.vue` | Mobile hamburger menu | `client:media` |
| `src/components/vue/ProjectFilter.vue` | Project category filter | `client:load` |
| `src/components/vue/SkillChart.vue` | Skills visualization | `client:visible` |
| `src/components/vue/ThemeToggle.vue` | Dark/light mode switch | `client:load` |
| `src/components/vue/ScrollToTop.vue` | Scroll to top button | `client:idle` |

### 8.2 Data Files

```json
// src/data/skills.json
{
  "categories": [
    {
      "name": "Frontend",
      "skills": [
        { "name": "Vue.js", "level": 90, "icon": "vue" },
        { "name": "React", "level": 85, "icon": "react" },
        { "name": "TypeScript", "level": 88, "icon": "typescript" }
      ]
    },
    {
      "name": "Backend",
      "skills": [
        { "name": "Node.js", "level": 85, "icon": "nodejs" },
        { "name": "Python", "level": 80, "icon": "python" }
      ]
    }
  ]
}
```

```json
// src/data/site.json
{
  "name": "John Doe",
  "title": "Full Stack Developer",
  "email": "john@example.com",
  "location": "San Francisco, CA",
  "bio": "Passionate developer with 5+ years of experience...",
  "social": {
    "github": "https://github.com/johndoe",
    "linkedin": "https://linkedin.com/in/johndoe",
    "twitter": "https://twitter.com/johndoe"
  }
}
```

### 8.3 Content Collections (Projects)

```markdown
---
# src/content/projects/awesome-app.md
title: "Awesome App"
description: "A revolutionary web application"
image: "./awesome-app.jpg"
tags: ["Vue.js", "Node.js", "MongoDB"]
featured: true
github: "https://github.com/johndoe/awesome-app"
demo: "https://awesome-app.demo.com"
date: 2024-01-15
---

## Overview

Detailed project description goes here...

## Features

- Feature 1
- Feature 2
- Feature 3

## Tech Stack

Explanation of technologies used...
```

---

## Summary

This architecture provides:

1. **Optimal Performance**: Islands Architecture ensures zero JavaScript for static content while enabling interactivity only where needed.

2. **Developer Experience**: Clear separation between Astro (static) and Vue (interactive) components with predictable patterns.

3. **SEO Excellence**: Server-rendered HTML, structured data, and comprehensive meta tags for search engine visibility.

4. **Maintainability**: Organized file structure with clear conventions for data, components, and content.

5. **Scalability**: Content collections and modular components make it easy to add new projects and sections.

The key principle is: **Use Astro components by default, and only reach for Vue when you need client-side interactivity.**
