"use client";

import { useLenis } from "lenis/react";
import { useCallback } from "react";

interface ScrollOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
  onComplete?: () => void;
  onStart?: () => void;
}

export const useScrollToSection = () => {
  const lenis = useLenis();

  const scrollToSection = useCallback(
    (selector: string, options: ScrollOptions = {}) => {
      const {
        offset = 0,
        duration = 1.5,
        easing = (t) => 1 - Math.pow(1 - t, 3),
        onComplete,
        onStart,
      } = options;

      let target: HTMLElement | null = null;

      if (
        selector.startsWith("#") ||
        selector.startsWith(".") ||
        selector.includes("[")
      ) {
        target = document.querySelector(selector) as HTMLElement | null;
      } else {
        target = document.getElementById(selector);
      }

      console.log(
        "Scrolling to:",
        selector,
        "Found element:",
        target,
        "Lenis:",
        lenis,
      );

      if (target && lenis) {
        onStart?.();

        lenis.scrollTo(target, {
          offset,
          duration,
          easing,
          onComplete,
        });
      } else {
        console.warn(`Element not found for selector: ${selector}`);
      }
    },
    [lenis],
  );

  const scrollToTop = useCallback(
    (options: Omit<ScrollOptions, "offset"> = {}) => {
      if (lenis) {
        const { duration = 1.2, easing, onComplete, onStart } = options;

        onStart?.();
        lenis.scrollTo(0, {
          duration,
          easing: easing || ((t) => 1 - Math.pow(1 - t, 3)),
          onComplete,
        });
      }
    },
    [lenis],
  );

  const scrollToBottom = useCallback(
    (options: Omit<ScrollOptions, "offset"> = {}) => {
      if (lenis) {
        const { duration = 1.5, easing, onComplete, onStart } = options;

        onStart?.();
        lenis.scrollTo(document.body.scrollHeight, {
          duration,
          easing: easing || ((t) => 1 - Math.pow(1 - t, 3)),
          onComplete,
        });
      }
    },
    [lenis],
  );

  const scrollBy = useCallback(
    (distance: number, options: Omit<ScrollOptions, "offset"> = {}) => {
      if (lenis) {
        const { duration = 1, easing, onComplete, onStart } = options;

        onStart?.();
        const currentScroll = lenis.scroll;
        lenis.scrollTo(currentScroll + distance, {
          duration,
          easing: easing || ((t) => 1 - Math.pow(1 - t, 3)),
          onComplete,
        });
      }
    },
    [lenis],
  );

  return {
    scrollToSection,
    scrollToTop,
    scrollToBottom,
    scrollBy,
    isReady: !!lenis,
  };
};
