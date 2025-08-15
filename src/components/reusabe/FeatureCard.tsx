"use client";

import React, { FC, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import { Eye, LucideIcon } from "lucide-react";
import Image from "next/image";

type FeatureCardProps = {
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

const FeatureCard: FC<FeatureCardProps> = ({
  id,
  title,
  description,
  icon: Icon,
  link = "#",
  showOverlay = true,
  index = 0,
  height,
  width,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardRef = useRef(null);

  const isInView = useInView(cardRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      className={`group relative rounded-xl hover:cursor-pointer ${width ?? "w-full"} ${height ?? "h-80"} flex flex-col justify-between overflow-hidden bg-[oklch(0.12_0.01_280)]/95 px-6 py-8 backdrop-blur-sm before:absolute before:inset-0 before:animate-pulse before:rounded-xl before:bg-gradient-to-br before:from-[oklch(0.75_0.1_290)] before:via-[oklch(0.65_0.22_295)] before:to-[oklch(0.8_0.08_300)] before:p-[1px] after:absolute after:inset-[1px] after:z-[1] after:rounded-xl after:bg-[oklch(0.16_0.015_280)]/98`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotateX: 15,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }
          : {}
      }
      whileHover={{
        y: -12,
        scale: 1.03,
        rotateX: -2,
        boxShadow: [
          "0 10px 30px rgba(168,85,247,0.3), 0 0 20px rgba(196,181,253,0.2)",
          "0 20px 60px rgba(168,85,247,0.4), 0 0 40px rgba(196,181,253,0.3), 0 0 0 1px rgba(168,85,247,0.1)",
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
    >
      {/* Starfield Background */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-[oklch(0.75_0.1_290)] to-[oklch(0.8_0.08_300)]"
            style={{
              width: Math.random() * 2 + 0.5,
              height: Math.random() * 2 + 0.5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {/* Enhanced Purple Overlay */}
        {showOverlay && (
          <motion.div
            key={"overlay"}
            className="absolute inset-0 z-20 overflow-hidden rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Animated purple gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.22_295)]/40 via-[oklch(0.75_0.1_280)]/20 to-[oklch(0.8_0.08_300)]/30"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, oklch(0.65 0.22 295 / 0.4), oklch(0.75 0.1 280 / 0.2), oklch(0.8 0.08 300 / 0.3))",
                  "radial-gradient(circle at 80% 50%, oklch(0.75 0.1 280 / 0.5), oklch(0.8 0.08 300 / 0.2), oklch(0.65 0.22 295 / 0.3))",
                  "radial-gradient(circle at 50% 20%, oklch(0.8 0.08 300 / 0.4), oklch(0.65 0.22 295 / 0.2), oklch(0.75 0.1 280 / 0.3))",
                  "radial-gradient(circle at 50% 80%, oklch(0.65 0.22 295 / 0.5), oklch(0.75 0.1 280 / 0.2), oklch(0.8 0.08 300 / 0.3))",
                  "radial-gradient(circle at 20% 50%, oklch(0.65 0.22 295 / 0.4), oklch(0.75 0.1 280 / 0.2), oklch(0.8 0.08 300 / 0.3))",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            {/* Enhanced backdrop blur */}
            <motion.div
              className="absolute inset-0 bg-[oklch(0.12_0.01_280)]/30 backdrop-blur-md"
              animate={{
                backdropFilter: isHovered ? "blur(15px)" : "blur(0px)",
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Floating purple particles */}
            <div className="pointer-events-none absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-0.5 w-0.5 rounded-full bg-[oklch(0.75_0.1_290)] opacity-70 shadow-[0_0_4px_oklch(0.75_0.1_290)]"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={
                    isHovered
                      ? {
                          y: [0, -25, 0],
                          x: [0, Math.random() * 30 - 15, 0],
                          opacity: [0.7, 1, 0.7],
                          scale: [1, 1.3, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 3 + Math.random() * 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Purple energy waves */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-transparent via-[oklch(0.65_0.22_295)]/10 to-transparent"
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: isHovered ? 0 : -100,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: 0.1,
              }}
            />

            <div className="relative flex h-full w-full items-center justify-center">
              {/* Orbital rings around button */}
              <motion.div
                className="absolute h-32 w-32 rounded-full border border-[oklch(0.75_0.1_290)]/30"
                initial={{ scale: 0, rotate: 0, opacity: 0 }}
                animate={{
                  scale: isHovered ? 1 : 0,
                  rotate: isHovered ? 360 : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{
                  scale: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.1,
                  },
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.3, delay: 0.1 },
                }}
              />

              <motion.div
                className="absolute h-40 w-40 rounded-full border border-[oklch(0.8_0.08_300)]/20"
                initial={{ scale: 0, rotate: 0, opacity: 0 }}
                animate={{
                  scale: isHovered ? 1 : 0,
                  rotate: isHovered ? -360 : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{
                  scale: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.15,
                  },
                  rotate: { duration: 16, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.3, delay: 0.15 },
                }}
              />

              {/* Main purple button */}
              <motion.div
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{
                  scale: isHovered ? 1 : 0,
                  rotate: isHovered ? 0 : -180,
                  opacity: isHovered ? 1 : 0,
                }}
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
                  {/* Inner purple glow */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-[oklch(0.75_0.1_290)]/20" />

                  {/* Animated icon */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Eye className="relative z-10 mb-2 size-6 drop-shadow-lg" />
                  </motion.div>

                  <span className="relative z-10 text-xs font-bold drop-shadow-md transition-colors group-hover/btn:text-[oklch(0.95_0.01_0)]">
                    Explore
                  </span>

                  {/* Button purple glow effect */}
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

              {/* Smaller purple sparkles around button */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute h-1 w-1 rounded-full bg-[oklch(0.75_0.1_290)] shadow-[0_0_4px_oklch(0.75_0.1_290)]"
                  style={{
                    left: `${50 + 22 * Math.cos((i * Math.PI * 2) / 8)}%`,
                    top: `${50 + 22 * Math.sin((i * Math.PI * 2) / 8)}%`,
                  }}
                  animate={
                    isHovered
                      ? {
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          rotate: [0, 180, 360],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2.5,
                    delay: 0.3 + i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Additional smaller sparkles */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={`mini-sparkle-${i}`}
                  className="absolute h-0.5 w-0.5 rounded-full bg-[oklch(0.8_0.08_300)] shadow-[0_0_2px_oklch(0.8_0.08_300)]"
                  style={{
                    left: `${50 + 30 * Math.cos((i * Math.PI * 2) / 12)}%`,
                    top: `${50 + 30 * Math.sin((i * Math.PI * 2) / 12)}%`,
                  }}
                  animate={
                    isHovered
                      ? {
                          scale: [0, 1.2, 0],
                          opacity: [0, 0.8, 0],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.8,
                    delay: 0.4 + i * 0.08,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Purple Icon */}
      <motion.div
        className="relative z-[2] mb-4 flex h-14 w-14 items-center justify-center"
        initial={{ scale: 0, rotate: 180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: index * 0.15 + 0.3,
        }}
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.3 },
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.75_0.1_290)] to-[oklch(0.65_0.22_295)] shadow-lg" />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.75_0.1_290)] to-[oklch(0.65_0.22_295)] shadow-[0_0_20px_oklch(0.75_0.1_290_/_0.7)]"
          animate={{
            boxShadow: [
              "0_0_15px_oklch(0.75_0.1_290_/_0.7)",
              "0_0_25px_oklch(0.65_0.22_295_/_0.9)",
              "0_0_15px_oklch(0.75_0.1_290_/_0.7)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.15 + 0.5 }}
        >
          <Icon className="relative z-10 size-7 stroke-[1.5] text-white drop-shadow-[0_0_8px_oklch(0.75_0.1_290)]" />
        </motion.div>
      </motion.div>

      {/* Enhanced Content with Purple Theme */}
      <motion.div
        className="z-[2] flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.15 + 0.5,
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <div className="space-y-2">
          <motion.h3
            className="bg-gradient-to-r from-[oklch(0.75_0.1_290)] to-[oklch(0.8_0.08_300)] bg-clip-text text-lg leading-tight font-semibold text-transparent drop-shadow-[0_0_8px_oklch(0.75_0.1_290_/_0.4)]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 + 0.7 }}
          >
            {title}
          </motion.h3>
          <motion.div
            className="h-0.5 rounded-full bg-gradient-to-r from-[oklch(0.65_0.22_295)] via-[oklch(0.75_0.1_280)] to-[oklch(0.8_0.08_300)] shadow-[0_0_8px_oklch(0.75_0.1_290_/_0.7)]"
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: isInView ? "80px" : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              delay: index * 0.15 + 0.8,
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        </div>
        <motion.p
          className="text-sm leading-relaxed text-[oklch(0.7_0.01_280)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.9 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
