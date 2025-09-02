import React from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { ExternalLink, Eye, Github, Globe, Search } from "lucide-react";

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
            backdropFilter: isHovered ? "blur(6px)" : "blur(0px)", // ✅ add actual blur
          }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            background: isHovered
              ? "radial-gradient(circle at 50% 50%, oklch(0.10 0.01 280 / 0.75), oklch(0.14 0.015 280 / 0.85), oklch(0.10 0.01 280 / 0.95))"
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
                className="group/btn flex h-14 w-14 items-center justify-center rounded-2xl border border-[oklch(0.75_0.12_295)]/70 bg-gradient-to-br from-[oklch(0.95_0.03_295)] to-[oklch(0.88_0.05_295)] text-[oklch(0.22_0.06_295)] shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-[oklch(0.65_0.22_295)]/40"
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
                className="group/btn flex h-14 w-14 items-center justify-center rounded-2xl border border-[oklch(0.75_0.12_295)]/70 bg-gradient-to-br from-[oklch(0.95_0.03_295)] to-[oklch(0.88_0.05_295)] text-[oklch(0.22_0.06_295)] shadow-md transition-all duration-300 hover:border-[oklch(0.65_0.22_295)]/60 hover:shadow-xl hover:shadow-[oklch(0.65_0.22_295)]/40"
                onClick={(e) => e.stopPropagation()}
              >
                <Globe className="size-6 transition-transform duration-300 group-hover/btn:scale-110" />
              </Link>
            )}

            <Link
              href={link}
              className="group/btn flex h-14 w-14 items-center justify-center rounded-2xl border border-[oklch(0.75_0.12_295)]/70 bg-gradient-to-br from-[oklch(0.95_0.03_295)] to-[oklch(0.88_0.05_295)] text-[oklch(0.22_0.06_295)] shadow-md transition-all duration-300 hover:border-[oklch(0.65_0.22_295)]/60 hover:shadow-xl hover:shadow-[oklch(0.65_0.22_295)]/40"
              onClick={(e) => e.stopPropagation()}
            >
              <Search className="size-6 transition-transform duration-300 group-hover/btn:scale-110" />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  ),
);

ProjectOverlay.displayName = "ProjectOverlay";
