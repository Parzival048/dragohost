/**
 * GlowCard Component
 * Card with animated glow effect on hover
 * Perfect for pricing cards and feature highlights
 */

'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: number;
}

/**
 * Card component with animated glow and hover effects
 */
export function GlowCard({
  children,
  className,
  glowColor = 'rgba(14, 165, 233, 0.3)',
  hoverScale = 1.02,
}: GlowCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: hoverScale,
        boxShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
      className={cn(
        'relative rounded-xl border border-dark-600 bg-dark-800/50 backdrop-blur-sm',
        'transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
