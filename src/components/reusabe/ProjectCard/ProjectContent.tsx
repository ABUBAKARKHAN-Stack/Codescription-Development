import React from "react";
import { motion } from "motion/react";
import { ProjectTechStack } from "./ProjectTechStack";

interface ProjectContentProps {
  title: string;
  description: string;
  projectTech: string[];
  index: number;
  isInView: boolean;
}

export const ProjectContent: React.FC<ProjectContentProps> = React.memo(
  ({ title, description, projectTech, index, isInView }) => (
    <motion.div
      className="relative z-[2] flex flex-1 flex-col gap-3 px-6 py-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.15 + 0.5,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className="space-y-2">
        <h3 className="bg-gradient-to-r from-[oklch(0.75_0.1_290)] to-[oklch(0.8_0.08_300)] bg-clip-text text-lg leading-tight font-bold text-transparent">
          {title}
        </h3>
        <motion.div
          className="h-0.5 rounded-full bg-gradient-to-r from-[oklch(0.65_0.22_295)] via-[oklch(0.75_0.1_280)] to-[oklch(0.8_0.08_300)] shadow-lg"
          initial={{ width: 0 }}
          animate={{ width: isInView ? "60px" : 0 }}
          transition={{
            delay: index * 0.15 + 0.8,
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      </div>

      <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-[oklch(0.7_0.01_280)]">
        {description}
      </p>

      <ProjectTechStack projectTech={projectTech} index={index} />
    </motion.div>
  ),
);

ProjectContent.displayName = "ProjectContent";
