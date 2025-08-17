import React from "react";
import { motion } from "motion/react";

interface SparklesProps {
  count?: number;
  radius?: number;
  isVisible: boolean;
}

export const Sparkles: React.FC<SparklesProps> = React.memo(
  ({ count = 6, radius = 22, isVisible }) => {
    const sparkles = React.useMemo(
      () =>
        Array.from({ length: count }).map((_, i) => ({
          id: i,
          left: 50 + radius * Math.cos((i * Math.PI * 2) / count),
          top: 50 + radius * Math.sin((i * Math.PI * 2) / count),
        })),
      [count, radius],
    );

    if (!isVisible) return null;

    return (
      <>
        {sparkles.map((sparkle) => (
          <motion.div
            key={`sparkle-${sparkle.id}`}
            className="absolute h-1 w-1 rounded-full bg-[oklch(0.75_0.1_290)] shadow-[0_0_4px_oklch(0.75_0.1_290)]"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              delay: 0.3 + sparkle.id * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </>
    );
  },
);

Sparkles.displayName = "Sparkles";
