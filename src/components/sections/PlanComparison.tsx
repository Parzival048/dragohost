/**
 * PlanComparison Component
 * Interactive side-by-side comparison of all hosting plans
 * Features:
 * - Horizontal scroll on mobile
 * - Highlight differences on hover
 * - Filter by budget or player count
 * - Tooltips for features
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  X,
  Filter,
  Sparkles,
  Crown,
  Zap,
  Info
} from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

interface PlanFeature {
  name: string;
  tooltip?: string;
  coal: boolean | string;
  stone: boolean | string;
  iron: boolean | string;
  lapis: boolean | string;
  diamond: boolean | string;
  netherite: boolean | string;
  enchanter: boolean | string;
  crystal: boolean | string;
  blueDragon: boolean | string;
  redDragon: boolean | string;
}

const comparisonFeatures: PlanFeature[] = [
  {
    name: 'RAM',
    coal: '2 GB',
    stone: '4 GB',
    iron: '6 GB',
    lapis: '8 GB',
    diamond: '12 GB',
    netherite: '16 GB',
    enchanter: '20 GB',
    crystal: '24 GB',
    blueDragon: '28 GB',
    redDragon: '32 GB',
  },
  {
    name: 'CPU Cores',
    tooltip: 'Percentage of dedicated CPU resources',
    coal: '100%',
    stone: '150%',
    iron: '200%',
    lapis: '250%',
    diamond: '350%',
    netherite: '450%',
    enchanter: '550%',
    crystal: '650%',
    blueDragon: '700%',
    redDragon: '800%',
  },
  {
    name: 'NVMe Storage',
    coal: '10 GB',
    stone: '15 GB',
    iron: '20 GB',
    lapis: '25 GB',
    diamond: '30 GB',
    netherite: '30 GB',
    enchanter: '30 GB',
    crystal: '30 GB',
    blueDragon: '35 GB',
    redDragon: '35 GB',
  },
  {
    name: 'Databases',
    tooltip: 'MySQL databases for plugins',
    coal: '2',
    stone: '3',
    iron: '4',
    lapis: '5',
    diamond: '6',
    netherite: 'Unlimited',
    enchanter: 'Unlimited',
    crystal: 'Unlimited',
    blueDragon: 'Unlimited',
    redDragon: 'Unlimited',
  },
  {
    name: 'Backups',
    tooltip: 'Automatic daily backups',
    coal: '3',
    stone: '5',
    iron: '7',
    lapis: '10',
    diamond: '15',
    netherite: '20',
    enchanter: '25',
    crystal: 'Unlimited',
    blueDragon: 'Unlimited',
    redDragon: 'Unlimited',
  },
  {
    name: 'DDoS Protection',
    tooltip: 'Enterprise-grade DDoS mitigation',
    coal: true,
    stone: true,
    iron: true,
    lapis: true,
    diamond: true,
    netherite: true,
    enchanter: true,
    crystal: true,
    blueDragon: true,
    redDragon: true,
  },
  {
    name: 'Custom JAR Support',
    tooltip: 'Run Paper, Spigot, Forge, Fabric, etc.',
    coal: true,
    stone: true,
    iron: true,
    lapis: true,
    diamond: true,
    netherite: true,
    enchanter: true,
    crystal: true,
    blueDragon: true,
    redDragon: true,
  },
  {
    name: 'Plugin Installation',
    coal: true,
    stone: true,
    iron: true,
    lapis: true,
    diamond: true,
    netherite: true,
    enchanter: true,
    crystal: true,
    blueDragon: true,
    redDragon: true,
  },
  {
    name: 'Subdomain',
    tooltip: 'Free yourserver.dragohost.cloud subdomain',
    coal: true,
    stone: true,
    iron: true,
    lapis: true,
    diamond: true,
    netherite: true,
    enchanter: true,
    crystal: true,
    blueDragon: true,
    redDragon: true,
  },
  {
    name: 'Custom Plugins',
    tooltip: 'Upload custom/private plugins',
    coal: false,
    stone: false,
    iron: true,
    lapis: true,
    diamond: true,
    netherite: true,
    enchanter: true,
    crystal: true,
    blueDragon: true,
    redDragon: true,
  },
  {
    name: 'Priority Support',
    coal: false,
    stone: false,
    iron: false,
    lapis: true,
    diamond: true,
    netherite: true,
    enchanter: true,
    crystal: true,
    blueDragon: true,
    redDragon: true,
  },
  {
    name: 'Dedicated IP',
    tooltip: 'Your own dedicated IPv4 address',
    coal: false,
    stone: false,
    iron: false,
    lapis: false,
    diamond: true,
    netherite: true,
    enchanter: true,
    crystal: true,
    blueDragon: true,
    redDragon: true,
  },
  {
    name: 'Custom Domain',
    tooltip: 'Use your own domain name',
    coal: false,
    stone: false,
    iron: false,
    lapis: false,
    diamond: true,
    netherite: true,
    enchanter: true,
    crystal: true,
    blueDragon: true,
    redDragon: true,
  },
  {
    name: 'Server Console Access',
    coal: true,
    stone: true,
    iron: true,
    lapis: true,
    diamond: true,
    netherite: true,
    enchanter: true,
    crystal: true,
    blueDragon: true,
    redDragon: true,
  },
];

const plans = [
  { id: 'coal', name: 'Coal', price: 199, color: 'gray', badge: null },
  { id: 'stone', name: 'Stone', price: 299, color: 'slate', badge: null },
  { id: 'iron', name: 'Iron', price: 399, color: 'zinc', badge: 'Most Popular' },
  { id: 'lapis', name: 'Lapis', price: 499, color: 'blue', badge: null },
  { id: 'diamond', name: 'Diamond', price: 599, color: 'cyan', badge: 'Best Value' },
  { id: 'netherite', name: 'Netherite', price: 699, color: 'purple', badge: null },
  { id: 'enchanter', name: 'Enchanter', price: 849, color: 'violet', badge: null },
  { id: 'crystal', name: 'Crystal', price: 999, color: 'pink', badge: null },
  { id: 'blueDragon', name: 'Blue Dragon', price: 1149, color: 'blue', badge: null },
  { id: 'redDragon', name: 'Red Dragon', price: 1299, color: 'red', badge: null },
];

export function PlanComparison() {
  const [filter, setFilter] = useState<'all' | 'budget' | 'premium'>('all');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [tooltipFeature, setTooltipFeature] = useState<string | null>(null);

  const filteredPlans = plans.filter((plan) => {
    if (filter === 'budget') return plan.price <= 499;
    if (filter === 'premium') return plan.price >= 699;
    return true;
  });

  return (
    <section className="relative py-20 lg:py-32 bg-dark-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/10 via-dark-900 to-dark-900" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/20">
                <span className="text-neon-purple font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Compare Plans
                </span>
              </div>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Find Your{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Side-by-side comparison of all features across our hosting tiers
            </p>
          </div>
        </FadeIn>

        {/* Filter Buttons */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex justify-center gap-4 mb-8">
            <FilterButton
              active={filter === 'all'}
              onClick={() => setFilter('all')}
              icon={Filter}
            >
              All Plans
            </FilterButton>
            <FilterButton
              active={filter === 'budget'}
              onClick={() => setFilter('budget')}
              icon={Zap}
            >
              Budget Friendly
            </FilterButton>
            <FilterButton
              active={filter === 'premium'}
              onClick={() => setFilter('premium')}
              icon={Crown}
            >
              Premium
            </FilterButton>
          </div>
        </FadeIn>

        {/* Comparison Table */}
        <FadeIn direction="up" delay={0.2}>
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-dark-800">
              <table className="w-full border-collapse min-w-max">
                {/* Table Header */}
                <thead>
                  <tr>
                    <th className="sticky left-0 z-20 bg-dark-900 p-4 text-left">
                      <div className="text-gray-400 font-semibold text-sm uppercase tracking-wider">
                        Features
                      </div>
                    </th>
                    {filteredPlans.map((plan) => (
                      <th
                        key={plan.id}
                        className="p-4 min-w-[140px]"
                        onMouseEnter={() => setHoveredPlan(plan.id)}
                        onMouseLeave={() => setHoveredPlan(null)}
                      >
                        <motion.div
                          animate={{
                            scale: hoveredPlan === plan.id ? 1.05 : 1,
                          }}
                          className={`relative p-4 rounded-xl border ${
                            hoveredPlan === plan.id
                              ? 'border-primary-500 bg-primary-500/10'
                              : 'border-dark-600 bg-dark-800/50'
                          }`}
                        >
                          {plan.badge && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-brand text-white text-xs font-bold rounded-full whitespace-nowrap">
                              {plan.badge}
                            </div>
                          )}
                          <div className="text-white font-bold text-lg mb-1">
                            {plan.name}
                          </div>
                          <div className="text-2xl font-bold text-neon-blue font-mono">
                            ₹{plan.price}
                          </div>
                          <div className="text-xs text-gray-500">/month</div>
                        </motion.div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {comparisonFeatures.map((feature, idx) => (
                    <motion.tr
                      key={feature.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="border-t border-dark-700"
                    >
                      <td className="sticky left-0 z-10 bg-dark-900 p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium">
                            {feature.name}
                          </span>
                          {feature.tooltip && (
                            <div
                              className="relative"
                              onMouseEnter={() => setTooltipFeature(feature.name)}
                              onMouseLeave={() => setTooltipFeature(null)}
                            >
                              <Info className="w-4 h-4 text-gray-500 cursor-help" />
                              <AnimatePresence>
                                {tooltipFeature === feature.name && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute left-6 top-0 w-48 p-2 bg-dark-800 border border-dark-600 rounded-lg text-xs text-gray-300 z-30"
                                  >
                                    {feature.tooltip}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )}
                        </div>
                      </td>
                      {filteredPlans.map((plan) => {
                        const value = feature[plan.id as keyof PlanFeature] as boolean | string;
                        const isHighlighted = hoveredPlan === plan.id;

                        return (
                          <td
                            key={plan.id}
                            className={`p-4 text-center transition-colors ${
                              isHighlighted ? 'bg-primary-500/5' : ''
                            }`}
                          >
                            {typeof value === 'boolean' ? (
                              value ? (
                                <Check className="w-5 h-5 text-green-400 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-600 mx-auto" />
                              )
                            ) : (
                              <span className="text-white font-semibold font-mono">
                                {value}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Need help choosing? Contact our team for personalized recommendations
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-brand text-white font-semibold rounded-lg shadow-glow-primary"
            >
              Chat with Sales
            </motion.button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/**
 * Filter Button Component
 */
function FilterButton({
  active,
  onClick,
  icon: Icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all ${
        active
          ? 'bg-gradient-brand text-white shadow-glow-primary'
          : 'bg-dark-800 text-gray-400 border border-dark-600 hover:border-primary-500'
      }`}
    >
      <Icon className="w-4 h-4" />
      {children}
    </motion.button>
  );
}
