/**
 * Features Section Component
 * Showcases key hosting features with animations
 * Features:
 * - Animated feature cards with icons
 * - Pterodactyl panel screenshot carousel
 * - Responsive grid layout
 * - Hover effects and micro-interactions
 */

'use client';

import { ScaleIn } from '@/components/animations/ScaleIn';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { AnimatedConsole } from '@/components/animations/AnimatedConsole';
import { motion } from 'framer-motion';
import {
  Shield,
  Zap,
  HardDrive,
  Clock,
  Terminal,
  Rocket,
  Globe,
  Cpu,
  Lock,
  RefreshCw,
  Cloud,
  Gauge,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: 'DDoS Protection',
    description: 'Enterprise-grade DDoS mitigation keeps your server online 24/7, no matter what.',
    color: 'text-neon-blue',
    bgColor: 'bg-neon-blue/10',
  },
  {
    icon: Zap,
    title: 'Ultra-Low Latency',
    description: 'Premium network routes and optimized infrastructure for lag-free gameplay.',
    color: 'text-neon-purple',
    bgColor: 'bg-neon-purple/10',
  },
  {
    icon: HardDrive,
    title: 'NVMe Storage',
    description: 'Lightning-fast NVMe SSD storage for instant world loading and backups.',
    color: 'text-neon-green',
    bgColor: 'bg-neon-green/10',
  },
  {
    icon: Clock,
    title: '99.9% Uptime',
    description: 'Rock-solid infrastructure with redundant systems and 24/7 monitoring.',
    color: 'text-primary-400',
    bgColor: 'bg-primary-400/10',
  },
  {
    icon: Terminal,
    title: 'Pterodactyl Panel',
    description: 'Powerful, intuitive control panel for complete server management.',
    color: 'text-neon-pink',
    bgColor: 'bg-neon-pink/10',
  },
  {
    icon: Rocket,
    title: 'Instant Setup',
    description: 'Deploy your server in seconds with one-click modpack installation.',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
  },
  {
    icon: Globe,
    title: 'Global Locations',
    description: 'Choose from multiple datacenter locations worldwide for optimal performance.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
  },
  {
    icon: Cpu,
    title: 'AMD Ryzen CPUs',
    description: 'Latest generation Ryzen processors for maximum performance per player.',
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
  },
  {
    icon: Lock,
    title: 'Automatic Backups',
    description: 'Daily automated backups with one-click restore to keep your world safe.',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-400/10',
  },
  {
    icon: RefreshCw,
    title: 'Mod Support',
    description: 'Full support for Forge, Fabric, Paper, and all major server types.',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
  },
  {
    icon: Cloud,
    title: 'Cloud Scalability',
    description: 'Easily upgrade resources as your community grows, no downtime required.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
  },
  {
    icon: Gauge,
    title: 'Real-time Analytics',
    description: 'Monitor performance, player count, and resources with live dashboards.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
  },
];

const panelFeatures = [
  'Instant server deployment',
  'Real-time console access',
  'Advanced file manager',
  'Database management',
  'Scheduled tasks',
  'User permissions',
];

export function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-32 bg-dark-800 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20">
                <span className="text-neon-blue font-semibold text-sm uppercase tracking-wider">
                  Features
                </span>
              </div>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Built for{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Performance
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to run a successful Minecraft server, included as standard
            </p>
          </div>
        </FadeIn>

        {/* Features Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <FeatureCard feature={feature} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Pterodactyl Panel Showcase */}
        <FadeIn direction="up">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-dark-700 to-dark-900 rounded-2xl p-8 lg:p-12 border border-dark-600">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Panel Info */}
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/20 mb-6"
                  >
                    <Terminal className="w-4 h-4 text-neon-purple" />
                    <span className="text-neon-purple font-semibold text-sm uppercase tracking-wider">
                      Pterodactyl Panel
                    </span>
                  </motion.div>

                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                    Professional Control Panel
                  </h3>

                  <p className="text-gray-400 text-lg mb-6">
                    Manage your Minecraft server with the industry-leading Pterodactyl panel.
                    Full control at your fingertips.
                  </p>

                  <ul className="space-y-3">
                    {panelFeatures.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-brand" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.a
                    href={process.env.NEXT_PUBLIC_PTERODACTYL_URL || 'https://console.dragohost.cloud'}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-lg transition-colors"
                  >
                    <Terminal className="w-5 h-5" />
                    View Demo Panel
                  </motion.a>
                </div>

                {/* Panel Mockup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative rounded-lg overflow-hidden border border-dark-600 bg-dark-900 shadow-2xl">
                    {/* Browser Chrome */}
                    <div className="bg-dark-700 px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="flex-1 text-center text-xs text-gray-500 font-mono">
                        console.dragohost.cloud
                      </div>
                    </div>

                    {/* Panel Screenshot Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 p-6">
                      <div className="space-y-4">
                        {/* Simulated server stats */}
                        <div className="flex gap-4">
                          <div className="flex-1 bg-primary-500/10 rounded p-4 border border-primary-500/20">
                            <div className="text-xs text-gray-500 mb-1">CPU Usage</div>
                            <div className="text-2xl font-bold text-primary-400 font-mono">23%</div>
                          </div>
                          <div className="flex-1 bg-neon-green/10 rounded p-4 border border-neon-green/20">
                            <div className="text-xs text-gray-500 mb-1">RAM Usage</div>
                            <div className="text-2xl font-bold text-neon-green font-mono">1.2GB</div>
                          </div>
                        </div>
                        {/* Animated Console with real-time typing */}
                        <AnimatedConsole />
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-brand opacity-20 blur-2xl -z-10" />
                </motion.div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/**
 * Individual Feature Card Component
 */
function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'group relative p-6 rounded-xl',
        'bg-dark-900/50 backdrop-blur-sm',
        'border border-dark-600',
        'hover:border-dark-500',
        'transition-all duration-300'
      )}
    >
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className={cn('inline-flex p-3 rounded-lg mb-4', feature.bgColor)}
      >
        <feature.icon className={cn('w-6 h-6', feature.color)} />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-brand group-hover:bg-clip-text transition-all">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {feature.description}
      </p>

      {/* Hover Glow */}
      <div className={cn(
        'absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10',
        'bg-gradient-to-br blur-xl',
        feature.bgColor
      )} />
    </motion.div>
  );
}
