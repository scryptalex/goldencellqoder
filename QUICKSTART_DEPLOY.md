# Quick Start: Deploy to Vercel

> **Note:** The repo currently ships a static export. GitHub Pages deployment is automatic; Vercel deployment would require regenerating the Next.js app.

## 🚀 Fastest Way to Get Live Demo

### Option 1: One-Click Deploy

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import repository: **scryptalex/goldencellqoder**
5. **IMPORTANT**: Set Root Directory to `goldencell-website`
6. Click "Deploy"

Done! Your live demo will be at: `https://goldencellqoder.vercel.app`

---

### Option 2: CLI Deploy (2 minutes)

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd goldencell-website

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

---

## 📝 Vercel Configuration

When prompted:

- **Set up and deploy?** → Y
- **Which scope?** → Your account
- **Link to existing project?** → N
- **Project name?** → goldencellqoder
- **Directory?** → ./
- **Override settings?** → N

---

## ✅ After Deployment

### Test All Languages

Your site will be at: `https://goldencellqoder.vercel.app`

Test each language:
- `https://goldencellqoder.vercel.app/en` - English ✅
- `https://goldencellqoder.vercel.app/de` - German ✅
- `https://goldencellqoder.vercel.app/ko` - Korean ✅
- `https://goldencellqoder.vercel.app/zh` - Chinese ✅
- `https://goldencellqoder.vercel.app/fr` - French (English template)
- `https://goldencellqoder.vercel.app/es` - Spanish (English template)
- `https://goldencellqoder.vercel.app/ru` - Russian (English template)
- `https://goldencellqoder.vercel.app/ja` - Japanese (English template)
- `https://goldencellqoder.vercel.app/ar` - Arabic (English template, RTL)
- `https://goldencellqoder.vercel.app/he` - Hebrew (English template, RTL)

### Enable Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your domain (e.g., `goldencell.com`)
3. Follow DNS configuration instructions

---

## 🔄 Automatic Updates

Every push to `main` branch will automatically deploy to Vercel!

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Vercel automatically deploys!
```

---

## 📊 Vercel Features

Your deployment includes:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Zero-config deployment
- ✅ Instant rollbacks
- ✅ Preview deployments
- ✅ Web Analytics
- ✅ 99.99% uptime

---

## ⚡ Performance

Expected metrics:
- **Load Time**: < 1.5s globally
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s

---

## 🆘 Troubleshooting

### Build Fails

Check build logs in Vercel dashboard. Common fixes:
```bash
# Locally test build
cd goldencell-website
npm run build
```

### Wrong Directory

Make sure **Root Directory** in Vercel is set to: `goldencell-website`

### Environment Variables

No environment variables needed for basic deployment!

---

## 📞 Support

- **Documentation**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Issues**: https://github.com/scryptalex/goldencellqoder/issues
- **Vercel Docs**: https://vercel.com/docs

---

**Ready to deploy! 🎉**

Total time: ~2 minutes
