import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Search } from "lucide-react";

interface SpaceButtonProps {
  link: string;
  isVisible: boolean;
}

export const SpaceButton: React.FC<SpaceButtonProps> = React.memo(
  ({ link, isVisible }) => {
    if (!isVisible) return null;

    return (
      <div className="relative flex h-full w-full items-center justify-center">
        {/* Orbital rings */}
        <motion.div
          className="absolute h-32 w-32 rounded-full border border-[oklch(0.75_0.1_290)]/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.1,
          }}
          style={{
            animation: "spin 12s linear infinite",
          }}
        />

        <motion.div
          className="absolute h-40 w-40 rounded-full border border-[oklch(0.8_0.08_300)]/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.15,
          }}
          style={{
            animation: "spin 16s linear infinite reverse",
          }}
        />

        {/* Main button */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.2,
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Link
            href={link}
            className="group/btn relative flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-[oklch(0.75_0.1_290)]/40 bg-gradient-to-br from-[oklch(0.75_0.1_290)] to-[oklch(0.65_0.22_295)] text-white shadow-2xl transition-all duration-300 hover:border-[oklch(0.75_0.1_290)]/70 hover:from-[oklch(0.65_0.22_295)] hover:to-[oklch(0.8_0.08_300)]"
          >
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-[oklch(0.75_0.1_290)]/20" />

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Search className="relative z-10 mb-2 size-6 drop-shadow-lg" />
            </motion.div>

            <span className="relative z-10 text-xs font-bold drop-shadow-md transition-colors group-hover/btn:text-[oklch(0.95_0.01_0)]">
              Explore More
            </span>

            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.75_0.1_290)]/30 to-[oklch(0.65_0.22_295)]/30"
              animate={{
                boxShadow: [
                  "0_0_15px_oklch(0.75_0.1_290_/_0.4)",
                  "0_0_30px_oklch(0.75_0.1_290_/_0.6)",
                  "0_0_15px_oklch(0.75_0.1_290_/_0.4)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Link>
        </motion.div>
      </div>
    );
  },
);

SpaceButton.displayName = "SpaceButton";
