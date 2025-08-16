import React from "react";
import { motion } from "motion/react";

interface ProjectTechStackProps {
  projectTech: string[];
  index: number;
}

export const ProjectTechStack: React.FC<ProjectTechStackProps> = React.memo(({ 
  projectTech, 
  index 
}) => {
  if (projectTech.length === 0) return null;

  return (
    <motion.div
      className="mt-auto flex flex-wrap gap-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 + 0.7 }}
    >
      {projectTech.slice(0, 3).map((tech, techIndex) => (
        <motion.span
          key={tech}
          className="rounded-lg border border-[oklch(0.65_0.22_295)]/30 bg-gradient-to-r from-[oklch(0.65_0.22_295)]/20 to-[oklch(0.75_0.1_280)]/20 px-3 py-1.5 text-xs font-medium text-[oklch(0.75_0.1_290)] backdrop-blur-sm transition-colors duration-300 hover:from-[oklch(0.65_0.22_295)]/30 hover:to-[oklch(0.75_0.1_280)]/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.15 + 0.9 + techIndex * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          {tech}
        </motion.span>
      ))}
      {projectTech.length > 3 && (
        <motion.span
          className="rounded-lg border border-[oklch(0.25_0.01_280)] bg-[oklch(0.18_0.01_280)]/70 px-3 py-1.5 text-xs font-medium text-[oklch(0.7_0.01_280)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.15 + 1.2 }}
        >
          +{projectTech.length - 3} more
        </motion.span>
      )}
    </motion.div>
  );
});

ProjectTechStack.displayName = "ProjectTechStack";