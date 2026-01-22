# Developer Portfolio Website

A modern, responsive portfolio website built with Vue 3, TypeScript, and TailwindCSS. This is a production-ready portfolio site perfect for showcasing your projects, skills, and experience.

## 🚀 Features

- **Modern Tech Stack**: Vue 3 with Composition API, TypeScript, Vite
- **Beautiful Design**: Dark mode first, clean and minimal UI
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Smooth Animations**: Subtle hover effects and transitions
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Performance**: Optimized build with Vite

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Git** - [Download](https://git-scm.com/)

## 🛠️ Installation

1. **Clone or download this repository**
   ```bash
   cd CV
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
   or
   ```bash
   pnpm install
   ```

## 🏃 Running Locally

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   - The site will be available at `http://localhost:5173`
   - The page will automatically reload when you make changes

3. **Build for production**
   ```bash
   npm run build
   ```
   - This creates an optimized production build in the `dist` folder

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Update Your Information

1. **Personal Information**
   - Edit `src/data/contact.ts` - Update email and social links
   - Edit `index.html` - Update meta tags and title
   - Edit `src/components/Header.vue` - Update your name in the header
   - Edit `src/components/Footer.vue` - Update copyright name

2. **About Section**
   - Edit `src/views/About.vue` - Update your bio and quick facts

3. **Projects**
   - Edit `src/data/projects.ts` - Add/update your projects
   - Replace placeholder URLs with your actual project links

4. **Skills**
   - Edit `src/data/skills.ts` - Update your skills and proficiency levels

5. **Experience**
   - Edit `src/data/experience.ts` - Update your work experience and education

6. **Colors & Styling**
   - Edit `tailwind.config.js` - Change the primary color theme
   - Currently using green (`primary`), you can change to cyan, purple, or any color

### Change Color Theme

To change from green to another color (e.g., cyan or purple):

1. Open `tailwind.config.js`
2. Replace the `primary` color values with your preferred color
3. Example for cyan:
   ```js
   primary: {
     400: '#22d3ee',
     500: '#06b6d4',
     600: '#0891b2',
     // ... etc
   }
   ```

## 📦 Project Structure

```
CV/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable Vue components
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── Button.vue
│   │   ├── ProjectCard.vue
│   │   ├── SkillCard.vue
│   │   └── SectionTitle.vue
│   ├── data/           # Data files (projects, skills, etc.)
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   └── contact.ts
│   ├── router/         # Vue Router configuration
│   │   └── index.ts
│   ├── types/          # TypeScript type definitions
│   │   └── index.ts
│   ├── views/          # Page components
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Skills.vue
│   │   ├── Projects.vue
│   │   ├── Experience.vue
│   │   └── Contact.vue
│   ├── App.vue         # Root component
│   ├── main.ts         # Application entry point
│   └── style.css       # Global styles
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚢 Deployment

### Option 1: Deploy to Vercel (Recommended)

Vercel offers free hosting with automatic deployments from GitHub.

#### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Don't initialize it with a README (you already have one)

3. **Push your code to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (recommended)

2. **Import Your Project**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Wait for Deployment**
   - Vercel will build and deploy your site
   - You'll get a URL like: `your-project.vercel.app`

4. **Automatic Deployments**
   - Every push to `main` branch will automatically deploy
   - You can also set up preview deployments for pull requests

#### Step 3: Add Custom Domain (Optional)

See the **Domain Setup Guide** section below.

---

### Option 2: Deploy to Netlify

Netlify also offers free hosting with automatic deployments.

#### Step 1: Prepare Your Repository

Same as Vercel - push your code to GitHub.

#### Step 2: Deploy to Netlify

1. **Sign up/Login to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

2. **Import Your Project**
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Wait for Deployment**
   - Netlify will build and deploy your site
   - You'll get a URL like: `your-project.netlify.app`

4. **Automatic Deployments**
   - Every push to `main` branch will automatically deploy

#### Step 3: Add Custom Domain (Optional)

See the **Domain Setup Guide** section below.

---

## 🌐 Domain Setup Guide

### Buying a Domain

1. **Choose a Domain Registrar**
   - Popular options: Namecheap, Google Domains, GoDaddy, Cloudflare
   - Search for your desired domain name
   - Purchase the domain (usually $10-15/year)

2. **Recommended**: Use **Cloudflare** or **Namecheap** for better DNS management

### Connecting Domain to Vercel

1. **In Vercel Dashboard**
   - Go to your project → Settings → Domains
   - Enter your domain (e.g., `yourname.com`)
   - Click "Add"

2. **Configure DNS Records**
   - Vercel will show you the DNS records to add
   - Go to your domain registrar's DNS settings
   - Add the following records:

   **Option A: Root Domain (yourname.com)**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **Option B: Subdomain (www.yourname.com)**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   **Recommended: Add both A and CNAME for www**

3. **Wait for Propagation**
   - DNS changes can take 24-48 hours (usually much faster)
   - Vercel will automatically detect when DNS is configured
   - SSL certificate will be automatically provisioned

### Connecting Domain to Netlify

1. **In Netlify Dashboard**
   - Go to your site → Domain settings → Custom domains
   - Click "Add custom domain"
   - Enter your domain

2. **Configure DNS Records**
   - Netlify will show you the DNS records to add
   - Go to your domain registrar's DNS settings
   - Add the following records:

   **For Root Domain (yourname.com)**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

   **For www Subdomain**
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```

3. **Wait for Propagation**
   - DNS changes can take 24-48 hours
   - Netlify will automatically provision SSL certificate

### DNS Record Types Explained

- **A Record**: Points a domain to an IP address (for root domain)
- **CNAME Record**: Points a domain to another domain (for subdomains)
- **TTL**: Time to live (how long DNS is cached) - usually 3600 seconds

### Testing Your Domain

1. After adding DNS records, wait a few minutes
2. Use online tools to check DNS propagation:
   - [whatsmydns.net](https://www.whatsmydns.net)
   - [dnschecker.org](https://dnschecker.org)
3. Once DNS is propagated, your site should be accessible via your custom domain

## ✅ Pre-Deployment Checklist

Before sharing your portfolio link:

- [ ] Update all personal information (name, email, social links)
- [ ] Replace placeholder project data with your real projects
- [ ] Update skills list with your actual skills
- [ ] Add your real work experience and education
- [ ] Update the About section with your bio
- [ ] Test all links (GitHub, LinkedIn, project demos)
- [ ] Test on mobile devices (responsive design)
- [ ] Check all pages load correctly
- [ ] Verify contact form works (or remove if not connected to backend)
- [ ] Update meta tags in `index.html` for SEO
- [ ] Test the site on different browsers
- [ ] Ensure all images/assets load correctly
- [ ] Check that the site is fast (use Lighthouse in Chrome DevTools)

## 🐛 Troubleshooting

### Build Errors

- **TypeScript errors**: Run `npm run build` to see detailed error messages
- **Missing dependencies**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Deployment Issues

- **Build fails on Vercel/Netlify**: Check build logs, ensure all dependencies are in `package.json`
- **404 errors on routes**: Ensure you have the redirect configuration (`vercel.json` or `netlify.toml`)

### DNS Issues

- **Domain not working**: Wait 24-48 hours for DNS propagation
- **SSL certificate not issued**: Wait a few hours after DNS is configured

## 📚 Additional Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

Built with:
- Vue 3
- TypeScript
- Vite
- TailwindCSS
- Lucide Icons

---

**Need Help?** If you encounter any issues, check the troubleshooting section or refer to the documentation links above.

**Good luck with your portfolio! 🚀**
