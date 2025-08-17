import React, { FC, useCallback, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { LucideIcon } from "lucide-react";
import { ProjectImage } from "./ProjectImage";
import { ProjectOverlay } from "./ProjectOverlay";
import { ProjectContent } from "./ProjectContent";

type Props = {
  projectImage?: string;
  projectTech?: string[];
  githubLink?: string;
  liveLink?: string;
  starred?: boolean;
  year?: string;
  category?: string;
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

const ProjectCard: FC<Props> = ({
  projectImage,
  projectTech = [],
  githubLink,
  liveLink,
  starred = false,
  year,
  category,
  index = 0,
  height,
  width,
  id,
  title,
  description,
  icon: Icon,
  link = "#",
  showOverlay = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardRef = useRef(null);

  const isInView = useInView(cardRef, {
    once: true,
    margin: "-100px",
  });

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <motion.div
      className={`group relative cursor-pointer rounded-xl ${width ?? "w-full"} ${height ?? "h-[400px]"} flex flex-col overflow-hidden bg-[oklch(0.12_0.01_280)]/95 backdrop-blur-sm before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-[oklch(0.65_0.22_295)] before:via-[oklch(0.75_0.1_280)] before:to-[oklch(0.8_0.08_300)] before:p-[1px] after:absolute after:inset-[1px] after:z-[1] after:rounded-xl after:bg-[oklch(0.16_0.015_280)]/98`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      whileHover={{
        y: -12,
        scale: 1.03,
        rotateX: -2,
        boxShadow: [
          "0 10px 30px rgba(168,85,247,0.3), 0 0 20px rgba(139,92,246,0.2)",
          "0 20px 60px rgba(168,85,247,0.4), 0 0 40px rgba(139,92,246,0.3), 0 0 0 1px rgba(196,181,253,0.1)",
        ],
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.9,
        delay: index * 0.15,
      }}
      style={{
        boxShadow:
          "0 8px 25px rgba(168,85,247,0.15), 0 3px 10px rgba(0,0,0,0.3)",
        willChange: "transform, opacity",
      }}
      layout={false}
    >
      <ProjectImage
        projectImage={projectImage}
        title={title}
        icon={Icon}
        index={index}
        isHovered={isHovered}
        category={category}
        starred={starred}
        year={year}
      />

      <ProjectOverlay
        showOverlay={showOverlay}
        isHovered={isHovered}
        githubLink={githubLink}
        liveLink={liveLink}
        link={link}
      />

      <ProjectContent
        title={title}
        description={description}
        projectTech={projectTech}
        index={index}
        isInView={isInView}
      />
    </motion.div>
  );
};

export default ProjectCard;
