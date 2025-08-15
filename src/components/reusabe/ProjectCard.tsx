"use client";
import React, { FC, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import Image from "next/image";
import {
  Calendar,
  ExternalLink,
  Eye,
  Github,
  LucideIcon,
  Star,
} from "lucide-react";
import Link from "next/link";

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

  return (
    <motion.div
      className={`group relative cursor-pointer rounded-xl ${width ?? "w-full"} ${height ?? "h-[400px]"} flex flex-col overflow-hidden bg-[oklch(0.12_0.01_280)]/95 backdrop-blur-sm before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-[oklch(0.65_0.22_295)] before:via-[oklch(0.75_0.1_280)] before:to-[oklch(0.8_0.08_300)] before:p-[1px] after:absolute after:inset-[1px] after:z-[1] after:rounded-xl after:bg-[oklch(0.16_0.015_280)]/98`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={cardRef}
      // initial={{
      //   opacity: 0,
      //   y: 50,
      //   scale: 0.9,
      //   rotateX: 15,
      // }}
      // animate={
      //   isInView
      //     ? {
      //         opacity: 1,
      //         y: 0,
      //         scale: 1,
      //         rotateX: 0,
      //       }
      //     : {}
      // }
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
      }}
      layout={false}
    >
      {/* Starfield Background */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-[oklch(0.75_0.1_290)] to-[oklch(0.8_0.08_300)]"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Project Image Container */}
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
        {/* Top badges */}
        <div className="absolute top-3 right-3 left-3 z-10 flex items-start justify-between">
          <div className="flex gap-2">
            {category && (
              <span className="rounded-full border border-[oklch(0.65_0.22_295)]/30 bg-[oklch(0.12_0.01_280)]/80 px-2 py-1 text-xs font-medium text-[oklch(0.75_0.1_290)] backdrop-blur-md">
                {category}
              </span>
            )}
            {starred && (
              <div className="flex items-center gap-1 rounded-full border border-[oklch(0.8_0.08_300)]/40 bg-gradient-to-r from-[oklch(0.65_0.22_295)]/30 to-[oklch(0.75_0.1_280)]/30 px-2 py-1 backdrop-blur-md">
                <Star className="size-3 fill-[oklch(0.8_0.08_300)] text-[oklch(0.8_0.08_300)]" />
                <span className="text-xs font-medium text-[oklch(0.95_0.01_0)]">
                  Featured
                </span>
              </div>
            )}
          </div>
          {year && (
            <div className="flex items-center gap-1 rounded-full border border-[oklch(0.65_0.22_295)]/30 bg-[oklch(0.12_0.01_280)]/80 px-2 py-1 text-[oklch(0.75_0.1_290)] backdrop-blur-md">
              <Calendar className="size-3" />
              <span className="text-xs font-medium">{year}</span>
            </div>
          )}
        </div>

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

      <AnimatePresence>
        {/* Enhanced Space Overlay */}
        {showOverlay && (
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

      {/* Enhanced Project Content */}
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

        {/* Enhanced Tech Stack */}
        {projectTech.length > 0 && (
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
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
