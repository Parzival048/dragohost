/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['console.dragohost.cloud'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable SWC minification for better performance
  swcMinify: true,
  // Optimize fonts
  optimizeFonts: true,
  // Disable ESLint during production builds (run separately in CI/CD)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during builds (run separately)
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
