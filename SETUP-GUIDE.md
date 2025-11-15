# 🚀 DragoHost Complete Setup Guide

This guide will walk you through setting up the DragoHost website from scratch, including Pterodactyl API integration, customization, and deployment.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Pterodactyl Configuration](#pterodactyl-configuration)
4. [Logo & Branding](#logo--branding)
5. [Content Customization](#content-customization)
6. [Testing](#testing)
7. [Deployment](#deployment)
8. [Post-Deployment](#post-deployment)

---

## Prerequisites

### Required Software

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (comes with Node.js)
- **Git**: For version control
- **Code Editor**: VS Code recommended

### Check Versions

```bash
node --version  # Should be 18+
npm --version   # Should be 9+
```

### Required Access

- Pterodactyl panel administrator access
- Discord server (for community invite)
- Domain name (for production deployment)

---

## Initial Setup

### 1. Install Dependencies

```bash
# Navigate to project directory
cd dragohost

# Install all packages
npm install

# Verify installation
npm list
```

### 2. Configure Environment

```bash
# Copy example environment file
cp .env.local.example .env.local

# Open in editor
code .env.local  # or your preferred editor
```

### 3. Environment Variables Explained

```env
# Your Pterodactyl panel URL (NO trailing slash)
NEXT_PUBLIC_PTERODACTYL_URL=https://console.dragohost.cloud

# Application API key from Pterodactyl (starts with ptla_)
PTERODACTYL_API_KEY=ptla_lfjKW4bznNfGRxDXE7MvhDn9xf9kI4QqNcxiFjn9rgf

# Your Discord server permanent invite link
NEXT_PUBLIC_DISCORD_URL=https://discord.gg/your-invite-code

# How often to refresh stats (30000 = 30 seconds)
NEXT_PUBLIC_STATS_REFRESH_INTERVAL=30000

# Use fake data during development (true/false)
NEXT_PUBLIC_USE_MOCK_DATA=false
```

---

## Pterodactyl Configuration

### Step 1: Create Application API Key

1. **Log into Pterodactyl** as administrator
2. Go to **Account Settings** (top right)
3. Click **API Credentials** tab
4. Scroll to **Application API** section
5. Click **Create New**
6. **Configure permissions**:
   ```
   ✅ Servers → Read
   ✅ Users → Read
   ❌ Everything else (uncheck)
   ```
7. Give it a description: "DragoHost Website API"
8. Click **Create**
9. **IMPORTANT**: Copy the API key immediately (shown only once!)
10. Paste into `.env.local` as `PTERODACTYL_API_KEY`

### Step 2: Verify API Access

The API client is located at [src/lib/pterodactyl/client.ts](src/lib/pterodactyl/client.ts)

**Test the connection:**

```bash
# Start development server
npm run dev

# Open browser to http://localhost:3000
# Check browser console for:
# "✓ Pterodactyl API connected successfully"
```

### Step 3: Understanding API Caching

The stats endpoint [src/app/api/stats/route.ts](src/app/api/stats/route.ts) implements caching:

- **Cache Duration**: 30 seconds
- **Purpose**: Reduce API load, improve performance
- **Behavior**:
  - First request: Fetches fresh data
  - Subsequent requests (within 30s): Returns cached data
  - After 30s: Fetches fresh data again

**Monitor API calls:**
- Open browser DevTools → Network tab
- Filter by "stats"
- Watch for `cached: true/false` in response

---

## Logo & Branding

### Step 1: Prepare Your Dragon Logo

**Recommended specs:**
- **Format**: PNG (with transparency) or SVG
- **Size**: 512x512 pixels minimum
- **Background**: Transparent
- **File size**: < 500KB

### Step 2: Add Logo to Project

```bash
# Place your logo file in public folder
cp /path/to/your/dragon-logo.png public/logo-dragon.png

# Optional: Add multiple sizes for optimization
cp /path/to/your/logo-192.png public/logo-192.png
cp /path/to/your/logo-512.png public/logo-512.png
```

### Step 3: Update Hero Component

Edit [src/components/sections/Hero.tsx](src/components/sections/Hero.tsx)

**Find this section (around line 75):**

```tsx
{/* TODO: Replace with actual dragon logo */}
<div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48...">
  <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 text-neon-blue" />
</div>
```

**Replace with:**

```tsx
<Image
  src="/logo-dragon.png"
  alt="DragoHost Dragon Logo"
  width={192}
  height={192}
  className="w-full h-full object-contain"
  priority
/>
```

### Step 4: Add Favicon

```bash
# Add favicon files to public/
favicon.ico          # 32x32 or 16x16
apple-touch-icon.png # 180x180
```

---

## Content Customization

### Hosting Plans

Edit [src/components/sections/Plans.tsx](src/components/sections/Plans.tsx)

**Customize pricing (lines 38-128):**

```typescript
const plans: HostingPlan[] = [
  {
    name: 'Starter',           // Plan name
    tagline: 'Perfect for...',  // Subtitle
    price: 5,                   // Monthly price
    currency: '$',              // Currency symbol
    period: '/month',           // Billing period
    specs: {
      ram: '2 GB',             // RAM allocation
      cpu: '2 Cores',          // CPU cores
      storage: '10 GB NVMe',   // Disk space
      databases: '2',          // Database limit
    },
    features: [
      { text: 'Up to 10 players' },
      { text: 'DDoS Protection' },
      // Add more features...
    ],
  },
  // Add more plans...
];
```

### Features Grid

Edit [src/components/sections/Features.tsx](src/components/sections/Features.tsx)

**Customize features (lines 35-112):**

```typescript
const features: Feature[] = [
  {
    icon: Shield,                    // Icon from lucide-react
    title: 'DDoS Protection',        // Feature name
    description: 'Enterprise-grade...', // Description
    color: 'text-neon-blue',        // Text color
    bgColor: 'bg-neon-blue/10',     // Background color
  },
  // Modify or add features...
];
```

### Discord Integration

**Update Discord URL in multiple places:**

1. **.env.local**: `NEXT_PUBLIC_DISCORD_URL=https://discord.gg/your-code`
2. **Hero button**: Auto-reads from environment
3. **Footer**: Auto-reads from environment

**Create Discord invite:**
1. Open Discord server
2. Right-click channel → "Invite People"
3. Click "Edit Invite Link"
4. Set "Expire After" → **Never**
5. Set "Max Uses" → **No limit**
6. Copy link

### Footer Links

Edit [src/components/sections/Footer.tsx](src/components/sections/Footer.tsx)

**Update social links (lines 20-39):**

```typescript
const socialLinks: SocialLink[] = [
  {
    name: 'Discord',
    icon: MessageCircle,
    href: 'https://discord.gg/your-code',
    color: 'hover:text-[#5865F2]',
  },
  // Update Twitter, YouTube, etc.
];
```

**Update footer links (lines 41-66):**

```typescript
const footerLinks = {
  Product: [
    { name: 'Plans & Pricing', href: '#plans' },
    // Add/modify links...
  ],
  Support: [
    { name: 'Documentation', href: '#docs' },
    // Add/modify links...
  ],
  Company: [
    { name: 'About Us', href: '#about' },
    // Add/modify links...
  ],
};
```

### Colors & Theme

Edit [tailwind.config.ts](tailwind.config.ts)

**Customize color palette (lines 16-39):**

```typescript
colors: {
  primary: {
    500: '#0ea5e9',  // Main brand color
    // Add more shades...
  },
  neon: {
    blue: '#00d4ff',    // Accent colors
    purple: '#a855f7',
    pink: '#ec4899',
    green: '#10b981',
  },
}
```

**Preview colors:**
- Use a color picker or [coolors.co](https://coolors.co)
- Test with light and dark backgrounds
- Ensure WCAG contrast ratios

---

## Testing

### Local Development Testing

```bash
# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

**Testing checklist:**

- [ ] Hero section loads with logo
- [ ] Stats display correctly (or show mock data)
- [ ] Discord button links to correct invite
- [ ] All pricing plans render properly
- [ ] Features grid displays all items
- [ ] Footer links work
- [ ] Animations work smoothly
- [ ] Mobile responsive (test in DevTools)

### API Testing

**Enable mock data for testing:**

```env
NEXT_PUBLIC_USE_MOCK_DATA=true
```

This generates random stats without API calls.

**Test real API:**

```env
NEXT_PUBLIC_USE_MOCK_DATA=false
```

Check browser console for API responses:

```
Stats API response: {
  totalServers: 150,
  onlineServers: 120,
  totalUsers: 500,
  cached: false
}
```

### Type Checking

```bash
# Run TypeScript type checker
npm run type-check

# Should show "No errors found"
```

### Build Test

```bash
# Test production build
npm run build

# Should complete without errors
# Then test the build:
npm start
```

---

## Deployment

### Option 1: Vercel (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/dragohost.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Add Environment Variables**
   - In Vercel dashboard → Project → Settings → Environment Variables
   - Add all variables from `.env.local`
   - Redeploy

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag `.next` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Or use Netlify CLI:
     ```bash
     npm install -g netlify-cli
     netlify deploy --prod
     ```

3. **Configure Environment**
   - Site Settings → Build & Deploy → Environment
   - Add all environment variables

### Option 3: Custom VPS

**Requirements:**
- Ubuntu 20.04+ or similar
- Node.js 18+
- Nginx or Apache
- PM2 for process management

**Setup:**

```bash
# Install PM2
npm install -g pm2

# Build project
npm run build

# Start with PM2
pm2 start npm --name "dragohost" -- start

# Save PM2 config
pm2 save
pm2 startup
```

**Nginx config:**

```nginx
server {
    listen 80;
    server_name dragohost.cloud;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Post-Deployment

### SSL Certificate

**Using Certbot (Let's Encrypt):**

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d dragohost.cloud -d www.dragohost.cloud
```

### Monitoring

**Set up monitoring:**

1. **Uptime monitoring**: [UptimeRobot](https://uptimerobot.com)
2. **Analytics**: Add Google Analytics or Plausible
3. **Error tracking**: Sentry.io

**Add Sentry (optional):**

```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

### Performance Optimization

**After deployment, test:**

- **PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
- **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)
- **Lighthouse**: Chrome DevTools → Lighthouse

**Target scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### SEO Setup

**Update [src/app/layout.tsx](src/app/layout.tsx) metadata:**

```typescript
export const metadata: Metadata = {
  title: 'Your Company - Minecraft Hosting',
  description: 'Your description...',
  openGraph: {
    url: 'https://yourdomain.com',
    images: ['/og-image.png'],
  },
};
```

**Create Open Graph image:**
- Size: 1200x630px
- Format: PNG or JPG
- Save as `public/og-image.png`

### Maintenance

**Regular tasks:**

- Update dependencies monthly: `npm update`
- Monitor API usage and limits
- Check error logs
- Test all features quarterly
- Backup database/config

---

## 🎉 You're Done!

Your DragoHost showcase site is now live and running!

**Next steps:**
- Share your site on Discord
- Gather user feedback
- Monitor performance
- Iterate and improve

**Need help?**
- Check [README.md](README.md) for troubleshooting
- Review inline code comments
- Open an issue on GitHub

---

**Made with ❤️ for the Minecraft hosting community**
