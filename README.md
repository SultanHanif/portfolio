# Premium Editorial Personal Portfolio & CV

An editorial, minimal, and sophisticated personal portfolio & curriculum vitae website built with **Astro**, **TypeScript**, and **Tailwind CSS**. Optimized for static delivery on **Vercel**.

## ✦ Core Design Principles

- **Editorial & Minimalist**: Inspired by modern architectural & design publications.
- **Space-Efficient**: 64–96px vertical section rhythm, no unnecessary cards or decorative noise.
- **Typography-First**: *Instrument Serif* for display accents paired with *Geist Sans* and *Geist Mono*.
- **Content Collections Architecture**: Separates data and content (`src/content/`) from components.
- **Printable CV (`/cv`)**: Dedicated curriculum vitae page with instant PDF print stylesheets.
- **Zero Heavy Runtime JS**: Pure static HTML/CSS with progressive micro-interactions for theme and mobile navigation.

## 🛠 Tech Stack

- **Framework**: [Astro 5](https://astro.build)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Typography plugin
- **SEO & Structured Data**: OpenGraph, Twitter, Schema.org (`Person`, `WebSite`), Sitemap & Robots.txt
- **Hosting Target**: Vercel Static CDN / Any static host

## 📂 Project Structure

```text
src/
├── components/
│   ├── AboutSection.astro          # Personal bio & engineering principles
│   ├── CertificationsSection.astro  # Credentials & certifications
│   ├── ContactSection.astro        # Editorial contact & 1-click email copy
│   ├── EditorialSection.astro      # 140px sidebar / flexible content grid
│   ├── EducationSection.astro      # Academic history
│   ├── ExperienceTimeline.astro    # CV-style achievement timeline
│   ├── Footer.astro                # Minimal signature & credits
│   ├── Hero.astro                  # Personal introduction
│   ├── Navbar.astro                # Compact 56px sticky navigation & menu
│   ├── PersonalStatement.astro     # Core engineering quote
│   ├── ProjectItem.astro           # Editorial row with micro-hover
│   ├── ProjectList.astro           # Selected work showcase
│   ├── SEO.astro                   # Meta tags & JSON-LD schema
│   ├── SkillsGrid.astro            # Categorized taxonomy without progress bars
│   └── ThemeToggle.astro           # Dark / Light mode switcher
├── content/
│   ├── certifications/             # Markdown certification files
│   ├── education/                  # Markdown education files
│   ├── experience/                 # Markdown experience files
│   └── projects/                   # Markdown case studies
├── data/
│   └── siteConfig.ts               # Centralized identity & profile settings
├── layouts/
│   └── Layout.astro                # Global layout with FOUC prevention
├── pages/
│   ├── cv.astro                    # Clean printable CV page
│   ├── index.astro                 # Homepage portfolio
│   ├── projects/[...id].astro      # Case study detail pages
│   └── robots.txt.ts               # Robots.txt generator
└── styles/
    └── global.css                  # Typography, theme variables, print styles
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type check
npm run check

# Build for production (Static dist output)
npm run build
```

## 🌐 Deploy to Vercel

1. Push this repository to GitHub / GitLab.
2. Import project in [Vercel Dashboard](https://vercel.com).
3. Framework Preset: **Astro** (Build Command: `npm run build`, Output Directory: `dist`).
4. Deploy!
