/**
 * Root Layout Component
 * Defines the HTML structure and global providers
 * Includes metadata for SEO
 */

import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

// SEO Metadata
export const metadata: Metadata = {
  title: 'DragoHost - Premium Minecraft Server Hosting',
  description: 'Lightning-fast Minecraft server hosting with NVMe storage, DDoS protection, and 99.9% uptime. Powered by Pterodactyl panel. Start your adventure today!',
  keywords: [
    'minecraft hosting',
    'minecraft server',
    'game hosting',
    'pterodactyl',
    'ddos protection',
    'nvme hosting',
    'dragohost',
  ],
  authors: [{ name: 'DragoHost' }],
  creator: 'DragoHost',
  publisher: 'DragoHost',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dragohost.cloud',
    siteName: 'DragoHost',
    title: 'DragoHost - Premium Minecraft Server Hosting',
    description: 'Lightning-fast Minecraft server hosting with enterprise-grade performance.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DragoHost - Premium Minecraft Server Hosting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DragoHost - Premium Minecraft Server Hosting',
    description: 'Lightning-fast Minecraft server hosting with enterprise-grade performance.',
    images: ['/og-image.png'],
    creator: '@dragohost',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

// Viewport configuration (separated from metadata in Next.js 14+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0ea5e9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          jetbrainsMono.variable,
          'font-sans antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
