import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { ProjectBadges } from "./ProjectBadges";

interface ProjectImageProps {
  projectImage?: string;
  title: string;
  icon: LucideIcon;
  index: number;
  isHovered: boolean;
  category?: string;
  starred?: boolean;
  year?: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = React.memo(
  ({
    projectImage,
    title,
    icon: Icon,
    index,
    isHovered,
    category,
    starred,
    year,
  }) => (
    <motion.div
      className="relative z-[2] h-48 w-full overflow-hidden rounded-t-xl"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.15 + 0.3,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <ProjectBadges category={category} starred={starred} year={year} />

      {projectImage ? (
        <div className="relative h-full w-full">
          <Image
            src={projectImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ) : (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[oklch(0.16_0.015_280)] via-[oklch(0.2_0.015_280)] to-[oklch(0.18_0.01_280)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.65_0.22_295,0.2),transparent_70%)]" />
          <Icon className="relative z-10 size-16 stroke-[1] text-[oklch(0.75_0.1_290)]/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.01_280)]/30 to-transparent" />
        </div>
      )}

      {/* Animated cosmic overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[oklch(0.65_0.22_295)]/60 via-[oklch(0.75_0.1_280)]/30 to-transparent opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </motion.div>
  ),
);

ProjectImage.displayName = "ProjectImage";
