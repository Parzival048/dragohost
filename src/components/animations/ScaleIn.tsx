/**
 * ScaleIn Animation Component
 * Scales in element when it enters viewport
 * Great for icons and feature cards
 */

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  scale?: number;
  className?: string;
}

/**
 * Animated scale-in component
 */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.4,
  scale = 0.8,
  className,
}: ScaleInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
            }
          : {
              opacity: 0,
              scale,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
