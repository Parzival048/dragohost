/**
 * Hero Section Component
 * Features:
 * - Animated dragon logo with floating effect
 * - Real-time server and user stats from Pterodactyl
 * - Gradient background with particles effect
 * - CTA button with Discord link
 * - Parallax scrolling effects
 */

'use client';

import { useStats } from '@/hooks/useStats';
import { AnimatedNumber } from '@/components/animations/AnimatedNumber';
import { FadeIn } from '@/components/animations/FadeIn';
import { FloatingElement } from '@/components/animations/FloatingElement';
import { motion } from 'framer-motion';
import { Sparkles, Users, Server, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Hero() {
  const { stats, loading, error } = useStats({
    autoRefresh: true,
    refreshInterval: 30000, // 30 seconds
  });

  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/dragohost';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e253714_1px,transparent_1px),linear-gradient(to_bottom,#1e253714_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Dragon Logo - Floating Animation */}
          <FadeIn direction="none" duration={1}>
            <FloatingElement duration={8} yOffset={15}>
              <div className="flex justify-center mb-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    duration: 1,
                  }}
                  className="relative"
                >
                  {/* DragoHost Dragon Logo */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-brand p-1 animate-glow">
                    <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/dragohost.png"
                        alt="DragoHost Dragon Logo"
                        width={192}
                        height={192}
                        className="w-full h-full object-contain p-2"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </FloatingElement>
          </FadeIn>

          {/* Hero Title */}
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-center mb-6">
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Premium Minecraft
              </span>
              <br />
              <span className="text-white">Server Hosting</span>
            </h1>
          </FadeIn>

          {/* Hero Subtitle */}
          <FadeIn direction="up" delay={0.4}>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 text-center mb-8 max-w-3xl mx-auto">
              Lightning-fast servers powered by NVMe storage. DDoS protection included.
              <br className="hidden sm:block" />
              <span className="text-neon-blue font-semibold">Your adventure starts here.</span>
            </p>
          </FadeIn>

          {/* Live Stats Display */}
          <FadeIn direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-12">
              {/* Servers Stat */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-dark-800/80 backdrop-blur-sm border border-dark-600 min-w-[200px]"
              >
                <div className="p-3 rounded-lg bg-primary-500/20">
                  <Server className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
                    {loading ? (
                      <span className="animate-pulse">---</span>
                    ) : error ? (
                      <span className="text-red-400">--</span>
                    ) : (
                      <AnimatedNumber value={stats?.totalServers || 0} />
                    )}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Servers Hosted
                  </div>
                </div>
              </motion.div>

              {/* Users Stat */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-dark-800/80 backdrop-blur-sm border border-dark-600 min-w-[200px]"
              >
                <div className="p-3 rounded-lg bg-neon-purple/20">
                  <Users className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
                    {loading ? (
                      <span className="animate-pulse">---</span>
                    ) : error ? (
                      <span className="text-red-400">--</span>
                    ) : (
                      <AnimatedNumber value={stats?.totalUsers || 0} />
                    )}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Total Users
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn direction="up" delay={0.8}>
            <div className="flex justify-center">
              <Link href={discordUrl} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'group relative px-8 py-4 sm:px-10 sm:py-5',
                    'text-lg sm:text-xl font-bold text-white',
                    'bg-gradient-brand rounded-full',
                    'shadow-[0_0_30px_rgba(14,165,233,0.5)]',
                    'hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]',
                    'transition-all duration-300',
                    'flex items-center gap-3'
                  )}
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Join our Discord</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </FadeIn>

          {/* Scroll Indicator */}
          <FadeIn direction="none" delay={1.2}>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex justify-center mt-16"
            >
              <div className="text-gray-500 text-sm flex flex-col items-center gap-2">
                <span className="uppercase tracking-wider">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
                  <div className="w-1 h-3 bg-gray-600 rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
