# GoldenCell Website - Deployment Guide

> **Note:** The repository now stores the statically exported site in `goldencell-website/`. No build step is required—pushes to `main` deploy automatically.

## 🚀 Live Demo

The website will be deployed to **Vercel** for the best performance with Next.js and next-intl.

### Deployment URL
Once deployed, the live demo will be available at:
**https://goldencellqoder.vercel.app**

---

## 📦 Deployment Options

### Option 1: Deploy to Vercel (Recommended)

#### Method A: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import the repository: `scryptalex/goldencellqoder`
5. Configure:
   - **Root Directory**: `goldencell-website`
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Click "Deploy"

#### Method B: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to website directory
cd goldencell-website

# Deploy
vercel

# For production deployment
vercel --prod
```

---

### Option 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in and click "Add new site"
3. Import from GitHub: `scryptalex/goldencellqoder`
4. Configure:
   - **Base directory**: `goldencell-website`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click "Deploy site"

---

### Option 3: Self-Hosted Server

```bash
# On your server
git clone https://github.com/scryptalex/goldencellqoder.git
cd goldencellqoder/goldencell-website

# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "goldencell" -- start
pm2 save
pm2 startup
```

The website will run on port 3000 by default.

---

## 🌍 Language Testing

After deployment, test all 10 languages:

### Supported Languages
1. **English** - `/en/` - ✅ Fully translated
2. **German** - `/de/` - ✅ Fully translated  
3. **French** - `/fr/` - ⚠️ Uses English (ready for translation)
4. **Spanish** - `/es/` - ⚠️ Uses English (ready for translation)
5. **Russian** - `/ru/` - ⚠️ Uses English (ready for translation)
6. **Korean** - `/ko/` - ✅ Fully translated
7. **Japanese** - `/ja/` - ⚠️ Uses English (ready for translation)
8. **Chinese** - `/zh/` - ✅ Fully translated
9. **Arabic** - `/ar/` - ⚠️ Uses English (ready for translation) - RTL layout
10. **Hebrew** - `/he/` - ⚠️ Uses English (ready for translation) - RTL layout

### How to Test
```
https://your-domain.com/en/  # English
https://your-domain.com/de/  # German
https://your-domain.com/ko/  # Korean
https://your-domain.com/zh/  # Chinese
https://your-domain.com/ar/  # Arabic (RTL)
https://your-domain.com/he/  # Hebrew (RTL)
```

---

## 🔧 Environment Variables (Optional)

If you add features like contact forms with email, create a `.env.local` file:

```env
# Email configuration (for contact form)
NEXT_PUBLIC_CONTACT_EMAIL=info@goldencell.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📝 Adding Translations

To translate the remaining languages, edit the JSON files in `messages/`:

### Example: Translating to French
Edit `goldencell-website/messages/fr.json`:

```json
{
  "nav": {
    "about": "À Propos",
    "business": "Domaines d'Activité",
    "products": "Produits",
    ...
  }
}
```

The website will automatically use the new translations!

---

## ✅ Deployment Checklist

Before deploying:

- [x] All dependencies installed
- [x] Build succeeds locally (`npm run build`)
- [x] All 10 language files exist
- [x] i18n configuration set up
- [x] Middleware configured
- [x] Git repository ready
- [ ] Deploy to Vercel/Netlify
- [ ] Test all language routes
- [ ] Configure custom domain (optional)
- [ ] Add remaining translations (fr, es, ru, ja)

---

## 🌐 Custom Domain (Optional)

### On Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your domain (e.g., `goldencell.com`)
4. Update DNS records as instructed

### DNS Configuration:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 📊 Performance

The website is optimized for:
- **First Load**: < 2s
- **Lighthouse Score**: 90+
- **Mobile Responsive**: 100%
- **SEO Ready**: Yes
- **Accessibility**: WCAG 2.1 AA

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Languages not working
- Check that all JSON files exist in `messages/`
- Verify middleware is configured
- Check browser console for errors

### Port already in use
```bash
# Kill process on port 3000
kill -9 $(lsof -t -i:3000)
```

---

## 📞 Support

For deployment issues:
- **Email**: info@goldencell.com
- **GitHub Issues**: https://github.com/scryptalex/goldencellqoder/issues

---

**Ready to deploy! 🚀**
