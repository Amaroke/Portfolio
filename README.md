# Hugo Mathieu-Steinbach - Portfolio

[![Deploy](https://github.com/Amaroke/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Amaroke/Portfolio/actions/workflows/deploy.yml)
[![PageSpeed Insights](https://img.shields.io/badge/PageSpeed-Insights-blue?logo=googlechrome&logoColor=white)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Famaroke.github.io%2FPortfolio%2F)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-report-f44b21?logo=lighthouse&logoColor=white)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Famaroke.github.io%2FPortfolio%2F)

> The PageSpeed / Lighthouse badges link to a **live audit** of the deployed site. Click to run a fresh report (Performance, Accessibility, Best Practices, SEO).

Personal portfolio built with React, TypeScript, Vite and Tailwind CSS. Auto-deployed to GitHub Pages.

Vibe coded from scratch with [Claude Code](https://claude.ai/code) as a modernized rewrite of my [previous portfolio](https://github.com/Amaroke/Portfolio-old), which was no longer maintained.

**Live:** [amaroke.github.io/Portfolio](https://amaroke.github.io/Portfolio/)

## Stack

- **React** + **TypeScript**
- **Vite** - bundler, dev server
- **Tailwind CSS** - utility-first styling with custom theme tokens
- **i18next** - FR / EN language toggle
- **Formspree** - contact form backend
- **GitHub Actions** - CI/CD auto-deploy to GitHub Pages

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                                 |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Start dev server at `http://localhost:5173` |
| `npm run build`   | Type-check + production build               |
| `npm run preview` | Preview production build locally            |
| `npm run lint`    | Run ESLint                                  |

## Deploy

Every push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the project and deploys `dist/` to GitHub Pages automatically.
