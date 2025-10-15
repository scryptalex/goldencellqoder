# GoldenCell Qoder

🌐 **Live Demo**: https://scryptalex.github.io/goldencellqoder/

This repository hosts the statically exported GoldenCell marketing site. The pages were authored in Next.js 15 originally, but only the generated HTML/CSS/JS bundle is tracked here so the demo can be deployed reliably to GitHub Pages.

## 🌟 What you get

- ✅ Pre-rendered pages for 10 languages (EN, DE, FR, ES, RU, KO, JA, ZH, AR, HE)
- ✅ All animations, styles, and assets bundled under `goldencell-website/`
- ✅ GitHub Pages workflow that deploys automatically on every push to `main`

## 🚀 Quick preview locally

You can treat `goldencell-website/` like any static site bundle. Serve it with any HTTP server, for example:

```bash
cd goldencell-website
python3 -m http.server 3000
# or: npx serve .
```

Then open http://localhost:3000/goldencellqoder/en/ in your browser. The `/goldencellqoder` base path matches the GitHub Pages setup; if you serve from the web root you can strip that segment.

## 📁 Project layout

```
.
├── .github/workflows/deploy.yml   # Static deploy workflow
├── deploy.sh                      # Notes on automated deployment
├── goldencell-website/            # Static site (HTML, CSS, JS, assets)
│   ├── _next/                     # Next.js runtime bundle
│   ├── en/, de/, ...              # Locale specific entry pages
│   ├── favicon.ico, logo.png, ...
│   └── index.html                 # Redirects to the English locale
├── GoldenCell.txt                 # Source company copy
└── docs…                          # Additional notes & PDFs supplied by the team
```

## 🛠 Updating the site

At the moment the original Next.js source isn’t included. To make content tweaks you can edit the generated HTML directly under `goldencell-website/`. For a larger overhaul, regenerate a fresh static export from your Next.js project and replace the contents of this directory.

When your changes are ready:

```bash
git add goldencell-website
git commit -m "Update static site"
git push origin main
```

GitHub Actions will publish the new bundle to GitHub Pages automatically.

## 📄 Documentation & assets

Reference documents such as `DEPLOYMENT.md`, `LIVE_DEMO.md`, and `GoldenCell.pdf` are kept for context. They describe the design goals, language coverage, and deployment history.

---

© 2024 GoldenCell. All rights reserved.
