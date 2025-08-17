"use client";

import { whyChooseData } from "@/data/whychoose.data";
import React from "react";
import { FeatureCard } from "../reusabe";
import WhyTetraCard from "../reusabe/WhyCard/WhyTetraCard";

const WhyChooseTetraCodeCards = () => {
  return (
    <>
      {whyChooseData.map(({ description, icon, id, title }, i) => (
        <WhyTetraCard
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
