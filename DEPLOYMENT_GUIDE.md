# 🚀 Complete Deployment Guide: GitHub to Cloudflare Pages

## Step-by-Step Instructions

### Part 1: Prepare Your Code for GitHub

1. **Create GitHub Repository**
   ```bash
   # Go to GitHub.com and create a new repository
   # Repository name: tharak-portfolio (or any name you prefer)
   # Make it public
   # Don't initialize with README (we already have one)
   ```

2. **Initialize Git and Push to GitHub**
   ```bash
   # Navigate to your project folder
   cd /your/project/folder
   
   # Initialize git repository
   git init
   
   # Add all files
   git add .
   
   # Create first commit
   git commit -m "Initial commit: Complete portfolio website"
   
   # Add your GitHub repository as origin
   git remote add origin https://github.com/YOUR_USERNAME/tharak-portfolio.git
   
   # Push to GitHub
   git push -u origin main
   ```

### Part 2: Deploy on Cloudflare Pages

#### Step 1: Access Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Sign in or create a free account
3. Click on **"Pages"** in the left sidebar
4. Click **"Create a project"** button

#### Step 2: Connect GitHub Repository
1. Choose **"Connect to Git"**
2. Click **"Connect GitHub"** 
3. Authorize Cloudflare to access your GitHub account
4. Select your repository: **`tharak-portfolio`**
5. Click **"Begin setup"**

#### Step 3: Configure Build Settings
**Project name:** `tharak-portfolio` (or your preferred name)

**Production branch:** `main`

**Root directory:** `frontend`

**Build command:** `yarn build`

**Output directory:** `build`

**Environment variables:** None needed

#### Step 4: Deploy
1. Click **"Save and Deploy"**
2. Cloudflare will start building your site
3. Wait for deployment to complete (usually 2-5 minutes)
4. Your site will be available at: `https://tharak-portfolio.pages.dev`

### Part 3: Custom Domain (Optional)

#### Step 1: Add Custom Domain
1. In Cloudflare Pages dashboard, click your project
2. Go to **"Custom domains"** tab
3. Click **"Set up a custom domain"**
4. Enter your domain name (e.g., `tharakkoneni.com`)

#### Step 2: Configure DNS
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Update nameservers to Cloudflare's nameservers
3. Or add CNAME record pointing to your Pages domain

### Part 4: Automatic Updates

**Every time you push to GitHub:**
1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. Cloudflare automatically rebuilds and deploys!

## 📂 Required Files Structure

Make sure these files are in your repository root:

```
tharak-portfolio/
├── frontend/
│   ├── package.json       ✅
│   ├── src/              ✅
│   ├── public/           ✅
│   └── build/            (created during build)
├── package.json          ✅
├── README.md             ✅
├── .gitignore           ✅
├── netlify.toml         ✅
└── vercel.json          ✅
```

## 🔧 Troubleshooting

### Build Fails?
- Check that `frontend/package.json` exists
- Verify build command is `yarn build` 
- Ensure root directory is set to `frontend`

### Site Shows Default Page?
- Check output directory is set to `build`
- Verify your `frontend/build` folder contains `index.html`

### Assets Not Loading?
- Ensure all asset paths are relative
- Check that images are in `frontend/public/` folder

## ✅ Verification Checklist

Before deployment, ensure:
- [ ] All links work (publications, projects, social media)
- [ ] Contact form submits (even if mocked)
- [ ] Responsive design works on mobile
- [ ] All images load properly
- [ ] No Emergent branding visible
- [ ] LinkedIn URL is correct
- [ ] Project GitHub links are correct

## 🎯 Alternative Platforms

### Netlify
```bash
# Build command: yarn build
# Publish directory: frontend/build
# Deploy from: main branch
```

### Vercel
```bash
# Framework preset: Create React App
# Root directory: frontend
# Build command: yarn build
# Output directory: build
```

## 📞 Support

If you encounter issues:
1. Check build logs in Cloudflare Pages dashboard
2. Verify all file paths are correct
3. Ensure GitHub repository is public
4. Try redeploying from Cloudflare dashboard

---

🎉 **Congratulations!** Your portfolio will be live at `https://your-project.pages.dev`