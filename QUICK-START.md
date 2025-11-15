# ⚡ Quick Start Guide

Get your DragoHost website running in **5 minutes**!

## 🚀 Step 1: Install Dependencies (2 minutes)

```bash
cd dragohost
npm install
```

## 🔑 Step 2: Configure Environment (1 minute)

Create `.env.local` file:

```env
NEXT_PUBLIC_PTERODACTYL_URL=https://console.dragohost.cloud
PTERODACTYL_API_KEY=ptla_lfjKW4bznNfGRxDXE7MvhDn9xf9kI4QqNcxiFjn9rgf
NEXT_PUBLIC_DISCORD_URL=https://discord.gg/your-invite
NEXT_PUBLIC_USE_MOCK_DATA=false
```

**Don't have Pterodactyl API key yet?** Use mock data:
```env
NEXT_PUBLIC_USE_MOCK_DATA=true
```

## 🎨 Step 3: Add Your Logo (1 minute)

1. Place your dragon logo in `public/logo-dragon.png`
2. Open [src/components/sections/Hero.tsx](src/components/sections/Hero.tsx)
3. Find line 75 (the TODO comment)
4. Uncomment the `<Image>` component
5. Comment out the `<Sparkles>` placeholder

**Don't have a logo yet?** Skip this step - the placeholder works fine!

## ▶️ Step 4: Start Development Server (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## ✅ Verify Everything Works

You should see:
- ✓ Hero section with animated logo/icon
- ✓ Live stats (real numbers or mock data)
- ✓ 4 pricing plan cards
- ✓ 12 feature cards
- ✓ Footer with Discord button
- ✓ Smooth animations on scroll

## 🎯 Next Steps

### Customize Content (10 minutes)

1. **Update hosting plans**: Edit [src/components/sections/Plans.tsx:38](src/components/sections/Plans.tsx#L38)
2. **Change features**: Edit [src/components/sections/Features.tsx:35](src/components/sections/Features.tsx#L35)
3. **Update Discord URL**: Change in `.env.local`
4. **Modify colors**: Edit [tailwind.config.ts:16](tailwind.config.ts#L16)

### Deploy to Production (5 minutes)

**Vercel (Recommended):**
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push

# 2. Import on Vercel
# Visit vercel.com → Import Project → Deploy
```

**Or use Netlify:**
```bash
npm run build
# Drag .next folder to netlify.com/drop
```

## 📚 Need More Help?

- **Full setup guide**: [SETUP-GUIDE.md](SETUP-GUIDE.md)
- **API documentation**: [API-DOCUMENTATION.md](API-DOCUMENTATION.md)
- **Project README**: [README.md](README.md)
- **Code structure**: [CODEBASE-STRUCTURE.xml](CODEBASE-STRUCTURE.xml)

## 🐛 Common Issues

**Stats show dashes "---":**
- Enable mock data: `NEXT_PUBLIC_USE_MOCK_DATA=true`
- Or verify your Pterodactyl API key

**Animations not working:**
- Check if Framer Motion installed: `npm list framer-motion`
- Clear cache: `rm -rf .next && npm run dev`

**Build errors:**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

## 🎉 That's It!

Your DragoHost website is ready! Customize the content, add your branding, and deploy to production.

**Happy hosting! 🐉**
