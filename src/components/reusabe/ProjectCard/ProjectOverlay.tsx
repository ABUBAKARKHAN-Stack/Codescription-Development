import React from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { ExternalLink, Eye, Github } from "lucide-react";

interface ProjectOverlayProps {
  showOverlay: boolean;
  isHovered: boolean;
  githubLink?: string;
  liveLink?: string;
  link: string;
}

export const ProjectOverlay: React.FC<ProjectOverlayProps> = React.memo(
  ({ showOverlay, isHovered, githubLink, liveLink, link }) => (
    <AnimatePresence mode="wait">
      {showOverlay && isHovered && (
        <motion.div
          key="project-overlay"
          className="absolute inset-0 z-30 flex flex-col items-center justify-center rounded-xl"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{
            opacity: isHovered ? 1 : 0,
            backdropFilter: isHovered ? "blur(8px)" : "blur(0px)",
          }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            background: isHovered
              ? "radial-gradient(circle at 50% 50%, oklch(0.12 0.01 280 / 0.6), oklch(0.16 0.015 280 / 0.8), oklch(0.12 0.01 280 / 0.95))"
              : "transparent",
          }}
        >
          <motion.div
            className="flex gap-4"
            initial={{ scale: 0, y: 30, opacity: 0 }}
            animate={{
              scale: isHovered ? 1 : 0,
              y: isHovered ? 0 : 30,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.15,
            }}
          >
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex h-14 w-14 items-center justify-center rounded-2xl border border-[oklch(0.25_0.01_280)] bg-gradient-to-br from-[oklch(0.18_0.01_280)] to-[oklch(0.16_0.015_280)] text-white shadow-xl transition-all duration-300 hover:border-[oklch(0.65_0.22_295)]/50 hover:shadow-2xl hover:shadow-[oklch(0.65_0.22_295)]/30"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="size-6 transition-transform duration-300 group-hover/btn:scale-110" />
              </Link>
            )}
            {liveLink && (
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex h-14 w-14 items-center justify-center rounded-2xl border border-[oklch(0.65_0.22_295)]/40 bg-gradient-to-br from-[oklch(0.65_0.22_295)] to-[oklch(0.75_0.1_280)] text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[oklch(0.65_0.22_295)]/50"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="size-6 transition-transform duration-300 group-hover/btn:scale-110" />
              </Link>
            )}
            <Link
              href={link}
              className="group/btn flex h-14 w-14 items-center justify-center rounded-2xl border border-black/90 bg-gradient-to-br from-white/90 to-white/85 text-black shadow-xl transition-all duration-300 hover:border-[oklch(0.65_0.22_295)]/50 hover:shadow-2xl hover:shadow-[oklch(0.65_0.22_295)]/30"
              onClick={(e) => e.stopPropagation()}
            >
              <Eye className="size-6 transition-transform duration-300 group-hover/btn:scale-110" />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  ),
);

ProjectOverlay.displayName = "ProjectOverlay";
