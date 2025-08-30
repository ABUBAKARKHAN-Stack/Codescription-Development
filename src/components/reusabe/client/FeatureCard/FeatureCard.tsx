"use client";

import React, { FC, useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { LucideIcon } from "lucide-react";
import { StarField } from "./StarField";
import { FloatingParticles } from "./FloatingParticles";
import { SpaceButton } from "./SpaceButton";
import { Sparkles } from "./Sparkles";
import { SpaceIcon } from "./SpaceIcon";
import { CardContent } from "./CardContent";

type FeatureCardProps = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
  showOverlay?: boolean;
  index?: number;
  width?: string;
  height?: string;
};

const FeatureCard: FC<FeatureCardProps> = ({
  id,
  title,
  description,
  icon: Icon,
  link = "#",
  showOverlay = true,
  index = 0,
  height,
  width,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const cardRef = useRef(null);

  const isInView = useInView(cardRef, {
    once: true,
    margin: "-100px",
  });

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShouldAnimate(true), index * 50);
      return () => clearTimeout(timer);
    }
  }, [isInView, index]);

  return (
    <motion.div
      className={`group relative rounded-xl hover:cursor-pointer ${width ?? "w-full"} ${height ?? "h-80"} flex flex-col justify-between overflow-hidden border border-white/10 bg-slate-800/40 px-6 py-8 backdrop-blur-md before:absolute before:inset-0 before:animate-pulse before:rounded-xl before:bg-gradient-to-br before:from-slate-900 before:via-purple-900 before:to-slate-900 before:p-[1px] after:absolute after:inset-[1px] after:z-[1] after:rounded-xl after:bg-slate-900/40 after:backdrop-blur-sm`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      whileHover={{
        y: -12,
        scale: 1.02,
        boxShadow: [
          "0 10px 30px rgba(168,85,247,0.3), 0 0 20px rgba(196,181,253,0.2)",
          "0 20px 60px rgba(168,85,247,0.4), 0 0 40px rgba(196,181,253,0.3)",
        ],
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 25,
        delay: index * 0.1,
      }}
      style={{
        boxShadow:
          "0 8px 25px rgba(168,85,247,0.15), 0 3px 10px rgba(0,0,0,0.3)",
        willChange: "transform, opacity",
      }}
    >
      <StarField shouldAnimate={shouldAnimate} />

      <AnimatePresence mode="wait">
        {showOverlay && isHovered && (
          <motion.div
            key="overlay"
            className="absolute inset-0 z-20 overflow-hidden rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.22_295)]/40 via-[oklch(0.75_0.1_280)]/20 to-[oklch(0.8_0.08_300)]/30"
              // animate={{
              //   background: [
              //     "radial-gradient(circle at 20% 50%, oklch(0.65 0.22 295 / 0.4), oklch(0.75 0.1 280 / 0.2), oklch(0.8 0.08 300 / 0.3))",
              //     "radial-gradient(circle at 80% 50%, oklch(0.75 0.1 280 / 0.5), oklch(0.8 0.08 300 / 0.2), oklch(0.65 0.22 295 / 0.3))",
              //     "radial-gradient(circle at 20% 50%, oklch(0.65 0.22 295 / 0.4), oklch(0.75 0.1 280 / 0.2), oklch(0.8 0.08 300 / 0.3))",
              //   ],
              // }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            <div className="absolute inset-0 bg-[oklch(0.12_0.01_280)]/30 backdrop-blur-md" />

            <FloatingParticles isVisible={isHovered} />

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-transparent via-[oklch(0.65_0.22_295)]/10 to-transparent"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: 0.1,
              }}
            />

            <SpaceButton link={link} isVisible={isHovered} />
            <Sparkles isVisible={isHovered} />
            <Sparkles count={8} radius={30} isVisible={isHovered} />
          </motion.div>
        )}
      </AnimatePresence>

      <SpaceIcon Icon={Icon} index={index} shouldAnimate={shouldAnimate} />
      <CardContent
        title={title}
        description={description}
        index={index}
        shouldAnimate={shouldAnimate}
        isInView={isInView}
      />

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default FeatureCard;
