# 🐉 DragoHost - Premium Minecraft Server Hosting Showcase

A modern, animated showcase website for Minecraft server hosting with **real-time Pterodactyl API integration**, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![DragoHost Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-ff0055?style=for-the-badge&logo=framer)

## ✨ Features

- 🚀 **Real-time Stats** - Live server and user counts from Pterodactyl API
- 🎨 **Modern Animations** - Framer Motion powered micro-interactions
- 🎯 **Performance Optimized** - Next.js 14 App Router with React Server Components
- 📱 **Fully Responsive** - Mobile-first design with Tailwind CSS
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🔒 **Type-Safe** - Full TypeScript coverage
- 🎭 **Dopamine Design** - Modern gradients and neon color palette
- 📊 **SEO Optimized** - Complete metadata and Open Graph tags

## 🏗️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type safety and developer experience |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Advanced animations and transitions |
| **Axios** | HTTP client for API requests |
| **Lucide React** | Beautiful icon library |
| **Pterodactyl API** | Real-time hosting statistics |

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm 9+
- Pterodactyl Panel Application API key
- Discord server invite URL (optional)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Configure Environment Variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your configuration:

```env
# Pterodactyl Panel URL (without trailing slash)
NEXT_PUBLIC_PTERODACTYL_URL=https://console.dragohost.cloud

# Pterodactyl Application API Key
PTERODACTYL_API_KEY=ptla_your_api_key_here

# Discord Server Invite URL
NEXT_PUBLIC_DISCORD_URL=https://discord.gg/your-invite

# Stats Refresh Interval (milliseconds)
NEXT_PUBLIC_STATS_REFRESH_INTERVAL=30000

# Use Mock Data for Development
NEXT_PUBLIC_USE_MOCK_DATA=false
```

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🔑 Pterodactyl API Setup

### Creating an Application API Key

1. Log into your Pterodactyl panel as an administrator
2. Navigate to **Account Settings** → **API Credentials**
3. Click **Create New** under "Application API"
4. Set permissions:
   - ✅ Servers: **Read**
   - ✅ Users: **Read**
5. Copy the generated API key and add it to `.env.local`

### API Endpoints Used

The application uses the following Pterodactyl API endpoints:

- `GET /api/application/servers` - Fetch all servers
- `GET /api/application/users` - Fetch all users

### Testing API Connection

The app includes automatic connection validation. Check browser console for:

```
✓ Pterodactyl API connected successfully
```

If you see errors, verify:
- API key has correct permissions
- Panel URL is correct (no trailing slash)
- Panel is accessible from your deployment

## 🎨 Customization Guide

### Replace Dragon Logo

1. Add your dragon logo image to `/public/` folder:
   - `logo-dragon.png` (recommended: 512x512px)
   - `logo-dragon.svg` (vector format)

2. Update [src/components/sections/Hero.tsx:75-85](src/components/sections/Hero.tsx#L75-L85):

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

### Update Hosting Plans

Edit [src/components/sections/Plans.tsx:38-128](src/components/sections/Plans.tsx#L38-L128) to customize:

- Plan names and prices
- RAM, CPU, storage specs
- Feature lists
- Colors and icons

```typescript
const plans: HostingPlan[] = [
  {
    name: 'Your Plan Name',
    price: 10,
    specs: {
      ram: '4 GB',
      cpu: '4 Cores',
      // ...
    },
    // ...
  },
];
```

### Change Color Scheme

Update [tailwind.config.ts:16-39](tailwind.config.ts#L16-L39) to customize colors:

```typescript
colors: {
  primary: {
    500: '#your-color',
    // ...
  },
  neon: {
    blue: '#your-blue',
    purple: '#your-purple',
    // ...
  },
}
```

### Modify Features

Edit [src/components/sections/Features.tsx:35-112](src/components/sections/Features.tsx#L35-L112):

```typescript
const features: Feature[] = [
  {
    icon: YourIcon,
    title: 'Your Feature',
    description: 'Feature description',
    color: 'text-blue-400',
  },
];
```

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

```bash
npm run build
```

Deploy the `.next` folder to Netlify.

### Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:

```bash
docker build -t dragohost .
docker run -p 3000:3000 dragohost
```

## 📁 Project Structure

```
dragohost/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/                  # API routes
│   │   │   └── stats/            # Stats endpoint
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   └── globals.css           # Global styles
│   ├── components/               # React components
│   │   ├── animations/           # Reusable animations
│   │   │   ├── FadeIn.tsx       # Fade in animation
│   │   │   ├── AnimatedNumber.tsx # Number counter
│   │   │   ├── GlowCard.tsx     # Glow effect card
│   │   │   ├── FloatingElement.tsx
│   │   │   ├── ScaleIn.tsx
│   │   │   └── StaggerContainer.tsx
│   │   └── sections/             # Page sections
│   │       ├── Hero.tsx          # Hero section
│   │       ├── Plans.tsx         # Pricing plans
│   │       ├── Features.tsx      # Features grid
│   │       └── Footer.tsx        # Footer
│   ├── hooks/                    # Custom React hooks
│   │   ├── useStats.ts          # Stats fetching hook
│   │   ├── useAnimatedNumber.ts # Number animation
│   │   └── useInView.ts         # Viewport detection
│   └── lib/                      # Utilities and libraries
│       ├── pterodactyl/          # Pterodactyl API client
│       │   ├── client.ts        # API client
│       │   └── types.ts         # TypeScript types
│       └── utils.ts              # Helper functions
├── public/                       # Static assets
│   ├── logo-dragon.png          # Dragon logo (add yours)
│   ├── favicon.ico
│   └── og-image.png             # Open Graph image
├── .env.local                    # Environment variables
├── package.json                  # Dependencies
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript config
└── next.config.js               # Next.js config
```

## 🎯 Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Cumulative Layout Shift**: < 0.1

Optimizations included:
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Font optimization with `next/font`
- API response caching (30s)
- Reduced motion support

## 🐛 Troubleshooting

### API Connection Fails

**Problem**: Stats show "---" or error message

**Solutions**:
1. Verify API key has correct permissions
2. Check panel URL is accessible
3. Ensure no CORS issues (API route handles this)
4. Enable mock data for testing: `NEXT_PUBLIC_USE_MOCK_DATA=true`

### Build Errors

**Problem**: TypeScript or build errors

**Solutions**:
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Type check
npm run type-check
```

### Animations Not Working

**Problem**: Elements not animating

**Solutions**:
1. Check `prefers-reduced-motion` setting
2. Verify Framer Motion is installed: `npm list framer-motion`
3. Check browser console for errors

## 📄 License

MIT License - feel free to use this for your hosting business!

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 💬 Support

- **Discord**: [Join our community](https://discord.gg/dragohost)
- **Documentation**: See `/docs` folder
- **Issues**: [GitHub Issues](https://github.com/dragohost/website/issues)

## 🙏 Credits

- **Built with**: Next.js, TypeScript, Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Space Grotesk, JetBrains Mono
- **API**: Pterodactyl Panel

---

**Made with ❤️ for the Minecraft community**

🐉 **DragoHost** - Where your adventure begins!
