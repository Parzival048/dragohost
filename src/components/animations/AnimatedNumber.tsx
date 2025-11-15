/**
 * AnimatedNumber Component
 * Displays numbers with smooth counting animation
 * Perfect for stats display with auto-update
 */

'use client';

import { useAnimatedNumber } from '@/hooks/useAnimatedNumber';
import { formatNumber } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  format?: boolean;
  suffix?: string;
  prefix?: string;
  className?: string;
}

/**
 * Number component with smooth counting animation
 */
export function AnimatedNumber({
  value,
  duration = 1000,
  format = true,
  suffix = '',
  prefix = '',
  className,
}: AnimatedNumberProps) {
  const animatedValue = useAnimatedNumber(value, { duration });
  const displayValue = format ? formatNumber(animatedValue) : animatedValue;

  return (
    <motion.span
      key={value}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  );
}
