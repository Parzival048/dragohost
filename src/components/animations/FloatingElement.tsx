/**
 * FloatingElement Component
 * Creates subtle floating animation for background elements
 * Perfect for decorative elements and hero graphics
 */

'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingElementProps {
  children: React.ReactNode;
  duration?: number;
  yOffset?: number;
  delay?: number;
  className?: string;
}

/**
 * Element with continuous floating animation
 */
export function FloatingElement({
  children,
  duration = 6,
  yOffset = 20,
  delay = 0,
  className,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  );
}
