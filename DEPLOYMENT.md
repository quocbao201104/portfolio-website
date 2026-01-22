# Complete Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio website to production.

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Deploying to Vercel](#deploying-to-vercel)
3. [Deploying to Netlify](#deploying-to-netlify)
4. [Setting Up a Custom Domain](#setting-up-a-custom-domain)
5. [Post-Deployment](#post-deployment)

---

## Pre-Deployment Checklist

Before deploying, make sure you've:

- [ ] Updated all personal information in the code
- [ ] Replaced placeholder content with your real data
- [ ] Tested the site locally (`npm run dev`)
- [ ] Built the project successfully (`npm run build`)
- [ ] Committed all changes to Git
- [ ] Pushed code to a GitHub repository

---

## Deploying to Vercel

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name your repository (e.g., `portfolio-website`)
4. Choose "Public" or "Private"
5. **Don't** initialize with README (you already have one)
6. Click "Create repository"

### Step 2: Push Code to GitHub

Open your terminal in the project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Choose "Continue with GitHub" (recommended)

2. **Import Project**
   - After signing in, click "Add New Project"
   - You'll see your GitHub repositories
   - Find and select your portfolio repository
   - Click "Import"

3. **Configure Project**
   - Vercel auto-detects Vite projects
   - Build settings should be:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel will install dependencies and build your project
   - This usually takes 1-2 minutes
   - You'll see a success message with your deployment URL

5. **Your Site is Live!**
   - Your site is now available at: `your-project-name.vercel.app`
   - You can share this link immediately

### Step 4: Automatic Deployments

- Every time you push to the `main` branch, Vercel will automatically deploy
- You can also set up preview deployments for pull requests
- Go to Project Settings → Git to configure

---

## Deploying to Netlify

### Step 1: Create GitHub Repository

Same as Vercel - create a GitHub repository and push your code.

### Step 2: Deploy to Netlify

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Sign up"
   - Choose "Sign up with GitHub"

2. **Import Project**
   - After signing in, click "Add new site" → "Import an existing project"
   - Click "Deploy with GitHub"
   - Authorize Netlify to access your GitHub
   - Select your portfolio repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Wait for Deployment**
   - Netlify will build and deploy your site
   - This usually takes 2-3 minutes
   - You'll see a success message with your deployment URL

5. **Your Site is Live!**
   - Your site is now available at: `random-name-12345.netlify.app`
   - You can change the site name in Site settings → General → Site details

### Step 3: Automatic Deployments

- Every push to `main` branch triggers automatic deployment
- Preview deployments are created for pull requests
- Go to Site settings → Build & deploy → Continuous Deployment

---

## Setting Up a Custom Domain

### Part 1: Buy a Domain

1. **Choose a Domain Registrar**
   - **Recommended**: [Namecheap](https://namecheap.com) or [Cloudflare](https://cloudflare.com)
   - Other options: Google Domains, GoDaddy, Domain.com

2. **Search and Purchase**
   - Search for your desired domain (e.g., `yourname.com`)
   - Add to cart and complete purchase
   - Domain typically costs $10-15/year

3. **Access DNS Settings**
   - After purchase, go to your domain registrar's dashboard
   - Find "DNS Management" or "DNS Settings"

### Part 2: Connect Domain to Vercel

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Enter your domain (e.g., `yourname.com`)
   - Click "Add"

2. **Add DNS Records**
   - Vercel will show you the DNS records to add
   - Go to your domain registrar's DNS settings
   - Add these records:

   **For Root Domain (yourname.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: Auto (or 3600)
   ```

   **For www Subdomain (www.yourname.com):**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: Auto (or 3600)
   ```

3. **Wait for DNS Propagation**
   - DNS changes can take 1-48 hours (usually 1-2 hours)
   - Vercel will show "Valid Configuration" when ready
   - SSL certificate is automatically provisioned (free)

4. **Test Your Domain**
   - Visit `yourname.com` and `www.yourname.com`
   - Both should redirect to your site

### Part 3: Connect Domain to Netlify

1. **In Netlify Dashboard**
   - Go to your site
   - Click "Domain settings" → "Custom domains"
   - Click "Add custom domain"
   - Enter your domain

2. **Add DNS Records**
   - Netlify will show you the DNS records to add
   - Go to your domain registrar's DNS settings
   - Add these records:

   **For Root Domain (yourname.com):**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   TTL: 3600
   ```

   **For www Subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   TTL: 3600
   ```

3. **Wait for DNS Propagation**
   - Netlify will show "DNS configuration detected" when ready
   - SSL certificate is automatically provisioned

4. **Test Your Domain**
   - Visit your domain in a browser
   - It should load your portfolio site

### DNS Record Types Explained

- **A Record**: Points domain to an IP address (for root domain)
- **CNAME Record**: Points domain to another domain (for subdomains)
- **TTL**: Time to live - how long DNS is cached (3600 = 1 hour)

### Troubleshooting DNS

- **Domain not working?**
  - Wait 24-48 hours for full DNS propagation
  - Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
  - Verify records are correct in your registrar's dashboard

- **SSL certificate not issued?**
  - Wait a few hours after DNS is configured
  - Both Vercel and Netlify automatically provision SSL (free)
  - Check your hosting dashboard for SSL status

---

## Post-Deployment

### 1. Test Everything

- [ ] Visit your live site
- [ ] Test all navigation links
- [ ] Check all pages load correctly
- [ ] Test on mobile device
- [ ] Verify all external links work
- [ ] Test contact form (if applicable)

### 2. SEO Optimization

- [ ] Update meta tags in `index.html`
- [ ] Add Open Graph tags for social sharing
- [ ] Submit sitemap to Google Search Console (optional)

### 3. Analytics (Optional)

Consider adding:
- Google Analytics
- Vercel Analytics (if using Vercel)
- Netlify Analytics (if using Netlify)

### 4. Performance Check

- Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome DevTools
- Aim for 90+ scores

### 5. Share Your Portfolio

- Update your LinkedIn profile
- Add to your GitHub profile
- Share on social media
- Include in job applications

---

## Quick Reference

### Vercel
- **Website**: [vercel.com](https://vercel.com)
- **Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Support**: [vercel.com/support](https://vercel.com/support)

### Netlify
- **Website**: [netlify.com](https://netlify.com)
- **Documentation**: [docs.netlify.com](https://docs.netlify.com)
- **Support**: [netlify.com/support](https://netlify.com/support)

### Domain Registrars
- **Namecheap**: [namecheap.com](https://namecheap.com)
- **Cloudflare**: [cloudflare.com](https://cloudflare.com)
- **Google Domains**: [domains.google](https://domains.google)

---

## Common Issues & Solutions

### Issue: Build fails on deployment

**Solution:**
- Check build logs in your hosting dashboard
- Ensure all dependencies are in `package.json`
- Make sure `node_modules` is in `.gitignore`
- Try building locally first: `npm run build`

### Issue: 404 errors on routes

**Solution:**
- Ensure `vercel.json` (Vercel) or `netlify.toml` (Netlify) exists
- These files configure redirects for Vue Router

### Issue: Domain shows "Not Secure"

**Solution:**
- Wait a few hours for SSL certificate to be issued
- Both Vercel and Netlify provide free SSL automatically
- Check SSL status in your hosting dashboard

### Issue: Changes not appearing

**Solution:**
- Ensure you pushed changes to GitHub
- Check deployment logs in your hosting dashboard
- Wait a few minutes for deployment to complete

---

**Congratulations! Your portfolio is now live! 🎉**

If you need help, refer to the hosting platform's documentation or support.
