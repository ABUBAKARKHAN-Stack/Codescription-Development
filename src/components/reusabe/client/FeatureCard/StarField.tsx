import React from "react";
import { motion } from "motion/react";

interface StarFieldProps {
  count?: number;
  shouldAnimate: boolean;
}

export const StarField: React.FC<StarFieldProps> = React.memo(
  ({ count = 20, shouldAnimate }) => {
    const stars = React.useMemo(
      () =>
        Array.from({ length: count }).map((_, i) => ({
          id: i,
          size: Math.random() * 2 + 0.5,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 2,
          duration: Math.random() * 3 + 3,
        })),
      [count],
    );

    return (
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <motion.div
            key={`star-${star.id}`}
            className="absolute rounded-full bg-gradient-to-r from-[oklch(0.75_0.1_290)] to-[oklch(0.8_0.08_300)]"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={
              shouldAnimate
                ? {
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.2, 1],
                  }
                : {}
            }
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}
      </div>
    );
  },
);

StarField.displayName = "StarField";
