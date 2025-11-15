/**
 * Footer Component
 * Site footer with links, social icons, and copyright
 * Features:
 * - Discord CTA
 * - Social media links
 * - Quick navigation
 * - Animated hover effects
 */

'use client';

import { motion } from 'framer-motion';
import {
  MessageCircle,
  Twitter,
  Youtube,
  Github,
  Heart,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SocialLink {
  name: string;
  icon: React.ElementType;
  href: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Discord',
    icon: MessageCircle,
    href: process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/dragohost',
    color: 'hover:text-[#5865F2]',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/dragohost',
    color: 'hover:text-[#1DA1F2]',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    href: 'https://youtube.com/@dragohost',
    color: 'hover:text-[#FF0000]',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/dragohost',
    color: 'hover:text-white',
  },
];

const footerLinks = {
  Product: [
    { name: 'Plans & Pricing', href: '#plans' },
    { name: 'Features', href: '#features' },
    { name: 'Server Locations', href: '#locations' },
    { name: 'Panel Demo', href: process.env.NEXT_PUBLIC_PTERODACTYL_URL || '#' },
  ],
  Support: [
    { name: 'Documentation', href: '#docs' },
    { name: 'Discord Community', href: process.env.NEXT_PUBLIC_DISCORD_URL || '#' },
    { name: 'Knowledge Base', href: '#kb' },
    { name: 'Contact Us', href: '#contact' },
  ],
  Company: [
    { name: 'About Us', href: '#about' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Status Page', href: '#status' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-900 border-t border-dark-700">
      {/* Top Section - Discord CTA */}
      <div className="relative py-16 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-neon-purple/5" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Ready to Start Your{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Adventure?
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of players already hosting on DragoHost. Get started in minutes!
            </p>

            <Link
              href={process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/dragohost'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'inline-flex items-center gap-3 px-8 py-4',
                  'text-lg font-bold text-white',
                  'bg-gradient-brand rounded-full',
                  'shadow-[0_0_30px_rgba(14,165,233,0.5)]',
                  'hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]',
                  'transition-all duration-300'
                )}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Join Discord</span>
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Middle Section - Links */}
      <div className="border-t border-dark-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">D</span>
                </div>
                <span className="text-xl font-display font-bold text-white">
                  DragoHost
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Premium Minecraft server hosting with enterprise-grade performance and support.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      'p-2 rounded-lg bg-dark-800 text-gray-400',
                      'hover:bg-dark-700 transition-all duration-200',
                      social.color
                    )}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1 group"
                      >
                        <span>{link.name}</span>
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="border-t border-dark-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm text-center sm:text-left">
              © {currentYear} DragoHost. All rights reserved.
            </div>

            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.div>
              <span>for the Minecraft community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
