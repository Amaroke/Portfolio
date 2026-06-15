# Hugo Mathieu-Steinbach - Portfolio

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
- **Renovate** - automated dependency updates

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
