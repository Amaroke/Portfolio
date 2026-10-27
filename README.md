# Hugo Mathieu-Steinbach - Portfolio

[![Deploy](https://github.com/Amaroke/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Amaroke/Portfolio/actions/workflows/deploy.yml)
[![PageSpeed](https://img.shields.io/badge/PageSpeed-report-4285F4?logo=googlechrome&logoColor=white)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Famaroke.github.io%2FPortfolio%2F)

Personal portfolio built with React, TypeScript, Vite and Tailwind CSS. Auto-deployed to GitHub Pages.

Coded from scratch with [Claude Code](https://claude.ai/code) as a modernized rewrite of my [previous portfolio](https://github.com/Amaroke/Portfolio-old), which was no longer maintained.

**Live:** [amaroke.github.io/Portfolio](https://amaroke.github.io/Portfolio/)

## Stack

- **React** + **TypeScript**
- **Vite** - bundler, dev server
- **Tailwind CSS** - utility-first styling with custom theme tokens
- **i18next** - FR / EN language toggle
- **unplugin-icons** - Iconify icons (Devicon, Simple Icons, Lucide) bundled at build time
- **Fontsource** - self-hosted Inter and Space Grotesk
- **Formspree** - contact form backend
- **GitHub Actions** - CI/CD auto-deploy to GitHub Pages
- **Dependabot** - monthly dependency updates, auto-merged when CI passes

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

Every push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which lints, builds and deploys `dist/` to GitHub Pages. Pull requests are linted and built without deploying. A monthly scheduled run redeploys so that auto-merged Dependabot updates go live.

The contact form needs the `VITE_FORMSPREE_ID` repository secret (see `.env.example` for local development).
