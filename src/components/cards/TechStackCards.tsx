"use client";

import { techStackData } from "@/data/techstack.data";
import React, { FC, useRef } from "react";
import { AnimatePresence, useInView, motion } from "motion/react";
import { TechStackCard } from "../reusabe";

type Props = {
  activeTab: string;
};

const TechStackCards: FC<Props> = ({ activeTab }) => {
  const cardRef = useRef(null);

  const isInView = useInView(cardRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={cardRef}
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex flex-col flex-wrap items-center justify-center gap-4"
      >
        {techStackData
          .filter(({ label }) => label === activeTab)
          .flatMap(({ techs, subText }) => [
            <div
              key="subText"
              className="max-w-md text-center text-sm font-medium"
            >
              {subText}
            </div>,
            <div
              key="techs"
              className="mt-4 flex flex-wrap items-center justify-center gap-4"
            >
              {techs.map(({ icon: Icon, name }) => (
                <TechStackCard key={name} Icon={Icon} name={name} />
              ))}
            </div>,
          ])}
      </motion.div>
    </AnimatePresence>
  );
};

export default TechStackCards;
