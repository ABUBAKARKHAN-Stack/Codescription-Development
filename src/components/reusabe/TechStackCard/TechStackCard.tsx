"use client";

import React, { FC, useCallback, useState } from "react";
import { motion } from "motion/react";
import { IconType } from "react-icons/lib";

type Props = {
  Icon: IconType;
  name: string;
};

const TechStackCard: FC<Props> = ({ name, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <motion.div
      layout
      className="relative flex size-30 flex-col items-center justify-center gap-y-4 overflow-hidden rounded-full shadow-[0_0_1px_rgba(255,255,255,0.5)] backdrop-blur-3xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Default state */}
      <Icon className="relative z-10 text-3xl" />
      <span className="relative z-10 text-center text-xs text-wrap">
        {name}
      </span>

      {/* Background hover grow */}
      <motion.div
        animate={isHovered ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`absolute inset-0 ${isHovered ? "bg-white" : "bg-transparent"} rounded-full`}
        style={{ transformOrigin: "center" }}
      />

      {/* Hover overlay */}
      <motion.div
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2, delay: isHovered ? 0.1 : 0 }}
        className="absolute inset-0 z-20 flex flex-col-reverse items-center justify-center gap-y-4 rounded-full text-black"
      >
        <Icon className="text-3xl" />
        <span className="text-center text-xs font-medium text-wrap">
          {name}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default TechStackCard;
