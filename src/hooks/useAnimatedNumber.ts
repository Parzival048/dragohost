/**
 * Custom hook for animating number changes
 * Creates smooth counting animation when numbers update
 */

'use client';

import { useEffect, useRef, useState } from 'react';

interface UseAnimatedNumberOptions {
  duration?: number;
  easing?: (t: number) => number;
}

/**
 * Easing function for smooth animation
 * Uses ease-out cubic for natural deceleration
 */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Hook to animate number transitions
 * @param value Target value to animate to
 * @param options Animation configuration
 * @returns Animated current value
 */
export function useAnimatedNumber(
  value: number,
  options: UseAnimatedNumberOptions = {}
): number {
  const { duration = 1000, easing = easeOutCubic } = options;

  const [displayValue, setDisplayValue] = useState(value);
  const animationRef = useRef<number>();
  const startValueRef = useRef(value);
  const startTimeRef = useRef<number>();

  useEffect(() => {
    // If value hasn't changed, don't animate
    if (value === displayValue) return;

    startValueRef.current = displayValue;
    startTimeRef.current = undefined;

    /**
     * Animation frame callback
     */
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(progress);

      const currentValue =
        startValueRef.current +
        (value - startValueRef.current) * easedProgress;

      setDisplayValue(Math.round(currentValue));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, duration, easing, displayValue]);

  return displayValue;
}
