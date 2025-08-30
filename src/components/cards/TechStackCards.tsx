"use client";

import { techStackData } from "@/data/techstack.data";
import React, { FC, useEffect, useRef, useState } from "react";
import { AnimatePresence, useInView, motion } from "motion/react";
import { TechStackCard } from "../reusabe/client";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Props = {
  activeTab: string;
};

const TechStackCards: FC<Props> = ({ activeTab }) => {
  const cardRef = useRef(null);

  const isInView = useInView(cardRef, {
    once: true,
    margin: "-100px",
  });
  const isXsm = useMediaQuery("(width >= 550px)");

  const getDynamicCardsLimit = () => {
    if (isXsm) return 13;
    return 10;
  };

  const [cardsLimit, setCardsLimit] = useState<null | number>(null);

  useEffect(() => {
    setCardsLimit(getDynamicCardsLimit());
  }, [isXsm]);

  const flatTechStackData = techStackData
    .filter(({ label }) => label === activeTab)
    .flatMap(({ techs, subText }) => ({ techs, subText }))[0];

  const { techs, subText } = flatTechStackData;

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
        <div key="subText" className="max-w-md text-center text-sm font-medium">
          {subText}
        </div>
        <div
          key="techs"
          className="mt-4 flex flex-wrap items-center justify-center gap-4"
        >
          {techs.slice(0, cardsLimit!).map(({ icon: Icon, name }) => (
            <TechStackCard key={name} Icon={Icon} name={name} />
          ))}
        </div>
        {cardsLimit !== null && cardsLimit < techs.length && (
          <Button
            key="loadMoreCards"
            onClick={() => setCardsLimit((prev) => prev! + 5)}
            className="mt-4 flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 shadow-md transition-all hover:shadow-lg"
          >
            <ArrowDown className="size-5" />
            Load More
          </Button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default TechStackCards;
