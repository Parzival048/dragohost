/**
 * Plans Section Component
 * Displays hosting tiers with animated cards
 * Features:
 * - 10 Minecraft-themed pricing tiers with hover animations
 * - Progressive features from Coal to Red Dragon
 * - Glow effects and micro-interactions
 * - Responsive grid layout (1/2/3/5 columns)
 */

'use client';

import { GlowCard } from '@/components/animations/GlowCard';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';
import {
  Cpu,
  HardDrive,
  Zap,
  Crown,
  Check,
  TrendingUp,
  Layers,
  Database,
  Shield,
  Gauge,
  Sparkles,
  Cloud,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanFeature {
  text: string;
  highlight?: boolean;
}

interface HostingPlan {
  name: string;
  tagline: string;
  price: number;
  currency: string;
  period: string;
  icon: React.ElementType;
  iconColor: string;
  glowColor: string;
  popular?: boolean;
  specs: {
    ram: string;
    cpu: string;
    storage: string;
    databases: string;
  };
  features: PlanFeature[];
}

const plans: HostingPlan[] = [
  {
    name: 'Coal',
    tagline: 'Start your journey',
    price: 199,
    currency: '₹',
    period: '/month',
    icon: Layers,
    iconColor: 'text-gray-400',
    glowColor: 'rgba(107, 114, 128, 0.3)',
    specs: {
      ram: '2 GB',
      cpu: '100%',
      storage: '10 GB NVMe',
      databases: '2',
    },
    features: [
      { text: 'Up to 15 players' },
      { text: 'DDoS Protection' },
      { text: 'Instant Setup' },
      { text: 'Pterodactyl Panel' },
      { text: 'Daily Backups' },
    ],
  },
  {
    name: 'Stone',
    tagline: 'Solid foundation',
    price: 299,
    currency: '₹',
    period: '/month',
    icon: Database,
    iconColor: 'text-slate-400',
    glowColor: 'rgba(148, 163, 184, 0.3)',
    specs: {
      ram: '4 GB',
      cpu: '200%',
      storage: '10 GB NVMe',
      databases: '3',
    },
    features: [
      { text: 'Up to 30 players' },
      { text: 'DDoS Protection' },
      { text: 'Instant Setup' },
      { text: 'Pterodactyl Panel' },
      { text: 'Daily Backups' },
      { text: 'Free Subdomain' },
    ],
  },
  {
    name: 'Iron',
    tagline: 'Strong & reliable',
    price: 399,
    currency: '₹',
    period: '/month',
    icon: Cpu,
    iconColor: 'text-zinc-300',
    glowColor: 'rgba(212, 212, 216, 0.3)',
    popular: true,
    specs: {
      ram: '6 GB',
      cpu: '200%',
      storage: '15 GB NVMe',
      databases: '5',
    },
    features: [
      { text: 'Up to 50 players' },
      { text: 'Advanced DDoS Protection' },
      { text: 'Instant Setup' },
      { text: 'Pterodactyl Panel' },
      { text: 'Hourly Backups', highlight: true },
      { text: 'Priority Support', highlight: true },
      { text: 'Free Subdomain' },
    ],
  },
  {
    name: 'Lapis',
    tagline: 'Enchanting power',
    price: 499,
    currency: '₹',
    period: '/month',
    icon: Zap,
    iconColor: 'text-blue-400',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    specs: {
      ram: '8 GB',
      cpu: '300%',
      storage: '15 GB NVMe',
      databases: '7',
    },
    features: [
      { text: 'Up to 70 players' },
      { text: 'Advanced DDoS Protection' },
      { text: 'Instant Setup' },
      { text: 'Pterodactyl Panel' },
      { text: 'Hourly Backups' },
      { text: 'Priority Support' },
      { text: 'Free Subdomain' },
      { text: 'Plugin Installation', highlight: true },
    ],
  },
  {
    name: 'Diamond',
    tagline: 'Premium experience',
    price: 599,
    currency: '₹',
    period: '/month',
    icon: TrendingUp,
    iconColor: 'text-cyan-400',
    glowColor: 'rgba(34, 211, 238, 0.4)',
    specs: {
      ram: '10 GB',
      cpu: '400%',
      storage: '20 GB NVMe',
      databases: '10',
    },
    features: [
      { text: 'Up to 90 players' },
      { text: 'Enterprise DDoS Protection' },
      { text: 'Instant Setup' },
      { text: 'Pterodactyl Panel' },
      { text: 'Hourly Backups' },
      { text: 'Priority Support' },
      { text: 'Free Subdomain' },
      { text: 'Plugin Installation' },
      { text: 'Modpack Support', highlight: true },
    ],
  },
  {
    name: 'Netherite',
    tagline: 'Unbreakable performance',
    price: 699,
    currency: '₹',
    period: '/month',
    icon: Shield,
    iconColor: 'text-purple-400',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    specs: {
      ram: '12 GB',
      cpu: '400%',
      storage: '20 GB NVMe',
      databases: '12',
    },
    features: [
      { text: 'Up to 110 players' },
      { text: 'Enterprise DDoS Protection' },
      { text: 'Instant Setup' },
      { text: 'Pterodactyl Panel' },
      { text: 'Real-time Backups', highlight: true },
      { text: 'Priority Support' },
      { text: 'Free Subdomain' },
      { text: 'Plugin Installation' },
      { text: 'Modpack Support' },
    ],
  },
  {
    name: 'Enchanter',
    tagline: 'Magical capabilities',
    price: 849,
    currency: '₹',
    period: '/month',
    icon: Gauge,
    iconColor: 'text-fuchsia-400',
    glowColor: 'rgba(232, 121, 249, 0.4)',
    specs: {
      ram: '16 GB',
      cpu: '500%',
      storage: '20 GB NVMe',
      databases: '15',
    },
    features: [
      { text: 'Up to 140 players' },
      { text: 'Enterprise DDoS Protection' },
      { text: 'Instant Setup' },
      { text: 'Pterodactyl Panel' },
      { text: 'Real-time Backups' },
      { text: 'Dedicated Support', highlight: true },
      { text: 'Free Subdomain' },
      { text: 'Plugin Installation' },
      { text: 'Modpack Support' },
      { text: 'Custom Configuration', highlight: true },
    ],
  },
  {
    name: 'Crystal',
    tagline: 'Crystal clear power',
    price: 999,
    currency: '₹',
    period: '/month',
    icon: Sparkles,
    iconColor: 'text-pink-300',
    glowColor: 'rgba(249, 168, 212, 0.4)',
    specs: {
      ram: '20 GB',
      cpu: '600%',
      storage: '25 GB NVMe',
      databases: '20',
    },
    features: [
      { text: 'Up to 180 players' },
      { text: 'Enterprise DDoS Protection' },
      { text: 'Instant Setup' },
      { text: 'Pterodactyl Panel' },
      { text: 'Real-time Backups' },
      { text: 'Dedicated Support' },
      { text: 'Free Domain', highlight: true },
      { text: 'Plugin Installation' },
      { text: 'Modpack Support' },
      { text: 'Custom Configuration' },
    ],
  },
  {
    name: 'Blue Dragon',
    tagline: 'Legendary performance',
    price: 1149,
    currency: '₹',
    period: '/month',
    icon: Cloud,
    iconColor: 'text-neon-blue',
    glowColor: 'rgba(0, 212, 255, 0.5)',
    specs: {
      ram: '24 GB',
      cpu: '700%',
      storage: '30 GB NVMe',
      databases: 'Unlimited',
    },
    features: [
      { text: 'Up to 220 players' },
      { text: 'Max DDoS Protection' },
      { text: 'Instant Setup' },
      { text: 'Pterodactyl Panel' },
      { text: 'Real-time Backups' },
      { text: 'Dedicated Support' },
      { text: 'Free Domain' },
      { text: 'Plugin Installation' },
      { text: 'Modpack Support' },
      { text: 'Custom Configuration' },
      { text: 'White-glove Setup', highlight: true },
    ],
  },
  {
    name: 'Red Dragon',
    tagline: 'Ultimate dominance',
    price: 1299,
    currency: '₹',
    period: '/month',
    icon: Crown,
    iconColor: 'text-red-400',
    glowColor: 'rgba(248, 113, 113, 0.5)',
    specs: {
      ram: '32 GB',
      cpu: '800%',
      storage: '35 GB NVMe',
      databases: 'Unlimited',
    },
    features: [
      { text: 'Unlimited players', highlight: true },
      { text: 'Max DDoS Protection' },
      { text: 'Instant Setup' },
      { text: 'Pterodactyl Panel' },
      { text: 'Real-time Backups' },
      { text: 'Dedicated Support' },
      { text: 'Free Domain' },
      { text: 'Custom Plugins', highlight: true },
      { text: 'Modpack Support' },
      { text: 'Custom Configuration' },
      { text: 'White-glove Setup' },
      { text: 'Network Optimization', highlight: true },
    ],
  },
];

export function Plans() {
  return (
    <section id="plans" className="relative py-20 lg:py-32 bg-dark-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-900 to-dark-900" />

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
              <div className="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
                <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
                  Hosting Plans
                </span>
              </div>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Choose Your{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              All plans include DDoS protection, NVMe storage, and instant setup with Pterodactyl panel
            </p>
          </div>
        </FadeIn>

        {/* Plans Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <StaggerItem key={plan.name}>
              <GlowCard
                glowColor={plan.glowColor}
                hoverScale={1.03}
                className={cn(
                  'relative h-full p-6 lg:p-8',
                  plan.popular && 'ring-2 ring-neon-purple shadow-[0_0_40px_rgba(168,85,247,0.3)]'
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full"
                  >
                    <span className="text-white font-bold text-xs uppercase tracking-wider">
                      Most Popular
                    </span>
                  </motion.div>
                )}

                {/* Plan Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={cn('inline-flex p-3 rounded-xl mb-4', `bg-${plan.iconColor}/10`)}
                >
                  <plan.icon className={cn('w-8 h-8', plan.iconColor)} />
                </motion.div>

                {/* Plan Name */}
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {plan.name}
                </h3>

                {/* Tagline */}
                <p className="text-gray-400 text-sm mb-6">{plan.tagline}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-bold text-white font-mono">
                      {plan.currency}{plan.price}
                    </span>
                    <span className="text-gray-500 text-lg">{plan.period}</span>
                  </div>
                </div>

                {/* Specs */}
                <div className="space-y-3 mb-6 pb-6 border-b border-dark-600">
                  <SpecItem icon={Database} label="RAM" value={plan.specs.ram} />
                  <SpecItem icon={Cpu} label="CPU" value={plan.specs.cpu} />
                  <SpecItem icon={HardDrive} label="Storage" value={plan.specs.storage} />
                  <SpecItem icon={Layers} label="Databases" value={plan.specs.databases} />
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <Check
                        className={cn(
                          'w-5 h-5 mt-0.5 flex-shrink-0',
                          feature.highlight ? 'text-neon-green' : 'text-primary-400'
                        )}
                      />
                      <span
                        className={cn(
                          'text-sm',
                          feature.highlight ? 'text-white font-semibold' : 'text-gray-300'
                        )}
                      >
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'w-full py-3 px-6 rounded-lg font-bold transition-all duration-300',
                    plan.popular
                      ? 'bg-gradient-brand text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]'
                      : 'bg-dark-700 text-white hover:bg-dark-600'
                  )}
                >
                  Get Started
                </motion.button>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/**
 * Spec Item Component for plan specifications
 */
function SpecItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2 text-gray-400">
        <Icon className="w-4 h-4" />
        <span>{label}</span>
      </div>
      <span className="text-white font-semibold font-mono">{value}</span>
    </div>
  );
}
