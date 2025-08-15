"use client";

import { whyChooseData } from "@/data/whychoose.data";
import React, { FC, RefObject } from "react";
import { FeatureCard } from "../reusabe";

const WhyChooseTetraCodeCards = () => {
  return (
    <>
      {whyChooseData.map(({ description, icon, id, title }, i) => (
        <FeatureCard
          key={id}
          icon={icon}
          description={description}
          title={title}
          id={id}
          showOverlay={false}
          index={i}
        />
      ))}
    </>
  );
};

export default WhyChooseTetraCodeCards;
