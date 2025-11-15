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
}

module.exports = nextConfig
