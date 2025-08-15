"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type StarProps = {
  x: string;
  y: string;
  size: number;
  delay: number;
};

function Star({ x, y, size = 1, delay = 0 }: StarProps) {
  const glowSize = size * 2.5;
  return (
    <motion.span
      className="absolute rounded-full"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: "white",
        boxShadow: `0 0 ${glowSize}px ${glowSize / 2}px rgba(255, 255, 255, 0.2)`,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        x: [0, size * 2, 0],
        y: [0, size * 0.5, 0],
      }}
      transition={{
        duration: 10 + Math.random() * 8,
        repeat: Infinity,
        repeatType: "mirror",
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

function ShootingStar() {
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
      transition={{
        duration: 3.2,
        repeat: Infinity,
        repeatDelay: 8 + Math.random() * 10,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div
        className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/90 to-transparent"
        style={{
          filter: "blur(0.5px)",
        }}
      />
      <div
        className="absolute top-1/2 -right-1 h-1 w-1 -translate-y-1/2 rounded-full bg-white"
        style={{
          boxShadow: "0 0 4px 2px rgba(255, 255, 255, 0.5)",
        }}
      />
    </motion.div>
  );
}

type SpaceSeparatorProps = {
  height?: string;
  starCount?: number;
  starSize?: number;
  shootingStars?: boolean;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
};

export function SpaceSeparator({
  height = "h-8",
  starCount = 50,
  starSize = 1.2,
  shootingStars = true,
  className = "",
  gradientFrom = "var(--brand)",
  gradientTo = "var(--brand-foreground)",
}: SpaceSeparatorProps) {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [fgStars, setFgStars] = useState<StarProps[]>([]);

  useEffect(() => {
    // Generate star positions & sizes only after mount to avoid SSR mismatch
    const bg = Array.from({ length: Math.floor(starCount * 0.7) }).map(() => ({
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * starSize * 0.5,
      delay: Math.random() * 5,
    }));

    const fg = Array.from({ length: Math.floor(starCount * 0.3) }).map(() => ({
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * starSize + 0.8,
      delay: Math.random() * 3,
    }));

    setStars(bg);
    setFgStars(fg);
  }, [starCount, starSize]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className={`relative ${height} overflow-hidden`}
        style={{
          background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
        }}
      >
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
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `radial-gradient(circle at center, white 0.5px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>
    </div>
  );
}
