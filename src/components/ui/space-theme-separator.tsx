"use client";

import { useEffect, useState, useMemo, memo, useCallback } from "react";
import { motion } from "framer-motion";

type StarProps = {
  x: string;
  y: string;
  size: number;
  delay: number;
};

const Star = memo(({ x, y, size = 1, delay = 0 }: StarProps) => {
  const glowSize = useMemo(() => size * 2.5, [size]);

  const starStyle = useMemo(
    () => ({
      left: x,
      top: y,
      width: size,
      height: size,
      background: "white",
      boxShadow: `0 0 ${glowSize}px ${glowSize / 2}px rgba(255, 255, 255, 0.2)`,
    }),
    [x, y, size, glowSize],
  );

  const animationProps = useMemo(
    () => ({
      opacity: [0, 0.8, 0],
      x: [0, size * 2, 0],
      y: [0, size * 0.5, 0],
    }),
    [size],
  );

  const transitionProps = useMemo(
    () => ({
      duration: 10 + Math.random() * 8,
      repeat: Infinity,
      repeatType: "mirror" as const,
      delay,
      ease: "easeInOut" as const,
    }),
    [delay],
  );

  return (
    <motion.span
      className="absolute rounded-full"
      style={starStyle}
      initial={{ opacity: 0 }}
      animate={animationProps}
      transition={transitionProps}
    />
  );
});

Star.displayName = "Star";

const ShootingStar = memo(() => {
  const transitionProps = useMemo(
    () => ({
      duration: 3.2,
      repeat: Infinity,
      repeatDelay: 2,
      ease: [0.4, 0, 0.2, 1] as const,
    }),
    [],
  );

  const trailStyle = useMemo(
    () => ({
      filter: "blur(0.5px)",
    }),
    [],
  );

  const headStyle = useMemo(
    () => ({
      boxShadow: "0 0 4px 2px rgba(255, 255, 255, 0.5)",
    }),
    [],
  );

  return (
    <motion.div
      className="pointer-events-none absolute"
      initial={{
        x: "-10%",
        y: "15%",
        opacity: 0,
        width: "0%",
      }}
      animate={{
        x: "110%",
        y: "35%",
        opacity: [0, 0.8, 0],
        width: "30%",
      }}
      transition={transitionProps}
    >
      <div
        className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/90 to-transparent"
        style={trailStyle}
      />
      <div
        className="absolute top-1/2 -right-1 h-1 w-1 -translate-y-1/2 rounded-full bg-white"
        style={headStyle}
      />
    </motion.div>
  );
});

ShootingStar.displayName = "ShootingStar";

type SpaceSeparatorProps = {
  height?: string;
  starCount?: number;
  starSize?: number;
  shootingStars?: boolean;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  gradientCenter?: string;
};

export const SpaceSeparator = memo(
  ({
    height = "h-2",
    starCount = 50,
    starSize = 1.2,
    shootingStars = true,
    className = "",
    gradientFrom = "var(--brand)",
    gradientTo = "var(--brand-foreground)",
    gradientCenter = "#8b5cf6", // Purple center
  }: SpaceSeparatorProps) => {
    const [stars, setStars] = useState<StarProps[]>([]);
    const [fgStars, setFgStars] = useState<StarProps[]>([]);

    const generateStars = useCallback(() => {
      const bg = Array.from({ length: Math.floor(starCount * 0.7) }).map(
        () => ({
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
          size: Math.random() * starSize * 0.5,
          delay: Math.random() * 5,
        }),
      );

      const fg = Array.from({ length: Math.floor(starCount * 0.3) }).map(
        () => ({
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
          size: Math.random() * starSize + 0.8,
          delay: Math.random() * 3,
        }),
      );

      setStars(bg);
      setFgStars(fg);
    }, [starCount, starSize]);

    useEffect(() => {
      generateStars();
    }, [generateStars]);

    const containerClassName = useMemo(
      () => `relative w-full overflow-hidden ${className}`,
      [className],
    );

    const heightClassName = useMemo(
      () => `relative ${height} overflow-hidden`,
      [height],
    );

    const backgroundStyle = useMemo(
      () => ({
        background: `linear-gradient(to bottom, transparent 0%, ${gradientCenter} 50%, transparent 100%)`,
      }),
      [gradientCenter],
    );

    const cosmicDustStyle = useMemo(
      () => ({
        backgroundImage: `radial-gradient(circle at center, white 0.5px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }),
      [],
    );

    const cosmicDustTransition = useMemo(
      () => ({
        duration: 120,
        repeat: Infinity,
        ease: "linear" as const,
      }),
      [],
    );

    return (
      <div className={containerClassName}>
        <div className={heightClassName} style={backgroundStyle}>
          {/* Starfield */}
          <div className="absolute inset-0">
            {stars.map((props, i) => (
              <Star key={`bg-${i}`} {...props} />
            ))}
            {fgStars.map((props, i) => (
              <Star key={`fg-${i}`} {...props} />
            ))}
            {shootingStars && <ShootingStar />}
          </div>

          {/* Cosmic dust */}
          <motion.div
            className="absolute inset-0 opacity-10"
            initial={{ backgroundPosition: "0% 0%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={cosmicDustTransition}
            style={cosmicDustStyle}
          />
        </div>
      </div>
    );
  },
);

SpaceSeparator.displayName = "SpaceSeparator";
