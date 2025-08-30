import React from "react";
import { motion } from "motion/react";

interface FloatingParticlesProps {
  count?: number;
  isVisible: boolean;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = React.memo(
  ({ count = 10, isVisible }) => {
    const particles = React.useMemo(
      () =>
        Array.from({ length: count }).map((_, i) => ({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          moveX: Math.random() * 20 - 10,
          duration: 2.5 + Math.random() * 1,
        })),
      [count],
    );

    if (!isVisible) return null;

    return (
      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className="absolute h-0.5 w-0.5 rounded-full bg-[oklch(0.75_0.1_290)] opacity-70 shadow-[0_0_4px_oklch(0.75_0.1_290)]"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              y: [0, -20, 0],
              x: [0, particle.moveX, 0],
              opacity: [0, 0.7, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.id * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  },
);

FloatingParticles.displayName = "FloatingParticles";
