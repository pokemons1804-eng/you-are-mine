# 🚀 Valentine's Week 2026 - Deployment Guide

## ✅ Deploy to GitHub Pages (100% FREE)

### **What You Get:**
- ✅ Free hosting forever
- ✅ Free URL: `https://yourusername.github.io/valentine-week-2026/`
- ✅ HTTPS enabled (secure)
- ✅ Works perfectly with this app
- ✅ No domain needed
- ✅ Easy updates anytime

---

## 📋 Step-by-Step Deployment

### **Step 1: Disable Test Mode**

**IMPORTANT:** Before deploying, turn off test mode!

Edit `/Users/amishra/AJ/Feb-2026/src/lib/valentineData.ts` line 152:

```typescript
const TEST_MODE = false; // Change from true to false
```

This ensures days unlock on real dates (Feb 7-14, 2026).

---

### **Step 2: Create GitHub Repository**

1. Go to [github.com](https://github.com)
2. Click **"+"** → **"New repository"**
3. Name it: `valentine-week-2026`
4. Keep it **Private** (so only you see the code)
5. Click **"Create repository"**

---

### **Step 3: Update package.json**

Replace `yourusername` with your actual GitHub username:

```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/valentine-week-2026"
```

Example: If your username is `john`, it becomes:
```json
"homepage": "https://john.github.io/valentine-week-2026"
```

---

### **Step 4: Initialize Git & Push**

In terminal (from Feb-2026 folder):

```bash
cd /Users/amishra/AJ/Feb-2026

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Valentine's Week 2026"

# Add remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/valentine-week-2026.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### **Step 5: Install gh-pages & Deploy**

```bash
# Install deployment tool
npm install --save-dev gh-pages

# Build and deploy
npm run deploy
```

This will:
1. Build your app
2. Create a `gh-pages` branch
3. Deploy to GitHub Pages
4. Give you a URL!

---

### **Step 6: Enable GitHub Pages**

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select: **gh-pages** branch
4. Click **Save**
5. Wait 2-3 minutes
6. Your site will be live at: `https://yourusername.github.io/valentine-week-2026/`

---

## 🔄 Updating the Website

Whenever you make changes:

```bash
# Make your changes in the code
# Then:
npm run deploy
```

That's it! Changes go live in 2-3 minutes.

---

## 🔒 Keeping It Private

### Option 1: Private Repository
- Keep the GitHub repo private
- Only share the live URL with her
- Code stays hidden, website is public

### Option 2: Password Protection
- Use Netlify or Vercel (also free)
- They offer password protection
- More setup but added privacy

---

## 🌐 Alternative: Vercel (Also FREE)

If you want a custom-ish domain:

1. Push to GitHub (steps 2-4 above)
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Connect your GitHub
5. Select your repository
6. Click "Deploy"
7. Get URL like: `valentine-week-2026.vercel.app`

**Benefits:**
- Automatic deployments
- Better performance
- Custom domain support
- Password protection available

---

## 🎯 Quick Comparison

| Feature | GitHub Pages | Vercel | Custom Domain |
|---------|-------------|---------|---------------|
| Cost | FREE | FREE | $10-15/year |
| Setup | Easy | Very Easy | Medium |
| URL | yourname.github.io/project | project.vercel.app | yourdomain.com |
| Password | No | Yes (Pro) | Yes |
| Performance | Good | Excellent | Excellent |

---

## 📝 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] TEST_MODE is set to `false`
- [ ] All romantic paragraphs are finalized
- [ ] All dates/answers are correct
- [ ] Tested locally (works perfectly)
- [ ] Updated package.json with your username
- [ ] Ready to share the URL!

---

## 🚀 Recommended Flow

**For Quick Deployment:**
1. Use **GitHub Pages** (free, simple)
2. Share the URL with her on Feb 6 evening
3. She can access it anytime
4. Update anytime with `npm run deploy`

**For More Control:**
1. Use **Vercel** (free, better features)
2. Optional: Buy a custom domain later
3. Add password protection if needed

---

## 💡 Pro Tips

1. **Test before Feb 7:**
   - Deploy with TEST_MODE=true first
   - Check everything works
   - Then redeploy with TEST_MODE=false

2. **Share the URL:**
   - Send it to her on Feb 6 evening
   - Tell her to bookmark it
   - Days unlock automatically on dates

3. **Keep the repo private:**
   - She can't see the code
   - But the website is public
   - Perfect for surprises!

---

## 🆘 Troubleshooting

### "Blank page after deployment"
- Check `vite.config.ts` base path
- Should match your repo name

### "404 on refresh"
- Normal for SPA on GitHub Pages
- Use hash router (already configured)

### "Changes not showing"
- Wait 2-3 minutes for GitHub cache
- Hard refresh browser (Ctrl+Shift+R)

---

## 📞 Quick Commands

```bash
# Deploy to GitHub Pages
npm run deploy

# Test locally first
npm run dev

# Build without deploying
npm run build

# Preview production build
npm run preview
```

---

## ✅ Final Steps

1. **Deploy**: `npm run deploy`
2. **Wait**: 2-3 minutes
3. **Test**: Visit your GitHub Pages URL
4. **Share**: Send URL to her on Feb 6! 💕

---

**Your website will be live 24/7, working automatically, and she can visit it whenever she wants!** 🌹

Last Updated: Feb 6, 2026 - 10:35 PM
