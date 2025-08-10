# Deployment Guide

This guide will help you deploy the MedicallyPlus landing page to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

### Method 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/medicallyplus-landing.git
   git push -u origin main
   ```

2. **Deploy with Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Your site will be live at:** `https://medicallyplus-landing.vercel.app`

### Method 2: Deploy from CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login and deploy:**
   ```bash
   vercel login
   vercel
   ```

3. **Follow the prompts:**
   - Set up and deploy: Yes
   - Which scope: Your username
   - Link to existing project: No
   - Project name: medicallyplus-landing
   - Directory: ./
   - Build command: `npm run build`
   - Output directory: dist

## 🌐 Deploy to Netlify

### Method 1: Drag and Drop

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder

### Method 2: Git Integration

1. **Push to GitHub** (same as Vercel method)

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Click "Deploy site"

## 📦 Deploy to Static Hosting

### GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

### Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure firebase.json:**
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## 🔧 Environment Variables

If you need environment variables:

### For Vercel:
- Go to Project Settings → Environment Variables
- Add variables with `VITE_` prefix for client-side access

### For Netlify:
- Go to Site Settings → Environment Variables
- Add variables with `VITE_` prefix

### Local Development:
Create a `.env.local` file:
```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

## 🛠️ Build Optimization

### Bundle Analysis
```bash
npm run build
npx vite-bundle-analyzer dist
```

### Performance Tips
1. **Image Optimization**: Use WebP format for images
2. **Code Splitting**: Already configured in vite.config.ts
3. **Compression**: Enable gzip/brotli on your hosting platform
4. **CDN**: Use Vercel Edge Network or Netlify CDN

## 🔍 Domain Configuration

### Custom Domain on Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as shown

### Custom Domain on Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records

## 📊 Analytics & Monitoring

### Add Google Analytics:
1. Create GA4 property
2. Add tracking ID to environment variables
3. Install gtag or analytics library

### Error Monitoring:
- Consider adding Sentry for error tracking
- Monitor Core Web Vitals

## 🚨 Troubleshooting

### Common Issues:

1. **Build Fails:**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **TypeScript Errors:**
   ```bash
   # Type check
   npm run type-check
   ```

3. **Routing Issues:**
   - Ensure your hosting platform serves index.html for all routes
   - Check vercel.json or netlify.toml configuration

4. **Asset Loading Issues:**
   - Verify all image imports use correct paths
   - Check public folder structure

### Getting Help:
- Check the [Issues](https://github.com/yourusername/medicallyplus-landing/issues) page
- Contact: contact@medicallyplus.com

---

**Your site should now be live and accessible to users worldwide! 🎉**