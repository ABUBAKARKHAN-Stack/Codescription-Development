import React from "react";
import { motion } from "motion/react";

interface CardContentProps {
  title: string;
  description: string;
  index: number;
  shouldAnimate: boolean;
  isInView: boolean;
}

export const CardContent: React.FC<CardContentProps> = React.memo(
  ({ title, description, index, shouldAnimate, isInView }) => (
    <motion.div
      className="z-[2] flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1 + 0.5,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className="space-y-2">
        <motion.h3
          className="bg-gradient-to-r from-[oklch(0.75_0.1_290)] to-[oklch(0.8_0.08_300)] bg-clip-text text-lg leading-tight font-semibold text-transparent drop-shadow-[0_0_8px_oklch(0.75_0.1_290_/_0.4)]"
          initial={{ opacity: 0, x: -20 }}
          animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.7 }}
        >
          {title}
        </motion.h3>
        <motion.div
          className="h-0.5 rounded-full bg-gradient-to-r from-[oklch(0.65_0.22_295)] via-[oklch(0.75_0.1_280)] to-[oklch(0.8_0.08_300)] shadow-[0_0_8px_oklch(0.75_0.1_290_/_0.7)]"
          initial={{ width: 0, opacity: 0 }}
          animate={shouldAnimate ? { width: "80px", opacity: 1 } : {}}
          transition={{
            delay: index * 0.1 + 0.8,
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      </div>
      <motion.p
        className="text-sm leading-relaxed font-light text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.1 + 0.9 }}
      >
        {description}
      </motion.p>
    </motion.div>
  ),
);

CardContent.displayName = "CardContent";
