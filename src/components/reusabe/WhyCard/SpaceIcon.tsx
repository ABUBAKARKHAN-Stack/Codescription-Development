import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface SpaceIconProps {
  Icon: LucideIcon;
  index: number;
  shouldAnimate: boolean;
}

export const SpaceIcon: React.FC<SpaceIconProps> = React.memo(
  ({ Icon, index, shouldAnimate }) => (
    <motion.div
      className="relative z-[2] mb-4 flex h-14 w-14 items-center justify-center"
      initial={{ scale: 0, rotate: 180, opacity: 0 }}
      animate={shouldAnimate ? { scale: 1, rotate: 0, opacity: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: index * 0.1 + 0.3,
      }}
      whileHover={{
        scale: 1.1,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 },
      }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.75_0.1_290)] to-[oklch(0.65_0.22_295)] shadow-lg" />
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.75_0.1_290)] to-[oklch(0.65_0.22_295)]"
        animate={
          shouldAnimate
            ? {
                boxShadow: [
                  "0_0_15px_oklch(0.75_0.1_290_/_0.7)",
                  "0_0_25px_oklch(0.65_0.22_295_/_0.9)",
                  "0_0_15px_oklch(0.75_0.1_290_/_0.7)",
                ],
              }
            : {}
        }
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        initial={{ scale: 0.8 }}
        animate={shouldAnimate ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.5 }}
      >
        <Icon className="relative z-10 size-7 stroke-[1.5] text-white drop-shadow-[0_0_8px_oklch(0.75_0.1_290)]" />
      </motion.div>
    </motion.div>
  ),
);

SpaceIcon.displayName = "SpaceIcon";
