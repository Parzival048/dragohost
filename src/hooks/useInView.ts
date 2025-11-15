/**
 * Custom hook for Intersection Observer
 * Detects when element enters viewport for scroll animations
 */

'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook to detect when element is in viewport
 * @param options Intersection Observer configuration
 * @returns Ref to attach to element and inView state
 */
export function useInView<T extends Element>(
  options: UseInViewOptions = {}
): [React.RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;

  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting;

        if (isInView) {
          setInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, inView];
}
