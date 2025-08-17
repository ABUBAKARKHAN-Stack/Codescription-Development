"use client";

import { whyChooseData } from "@/data/whychoose.data";
import React from "react";
import WhyTetraCard from "../reusabe/WhyCard/WhyTetraCard";

const WhyChooseTetraCodeCards = () => {
  return (
    <>
      {whyChooseData.map(({ description, icon, id, title }, i) => (
        
        <div className="flex">
           <WhyTetraCard
          key={id}
          icon={icon}
          description={description}
          title={title}
          id={id}
          showOverlay={false}
          index={i}
        />
         <div className="w-1 bg-gradient-to-b from-transparent via-brand to-transparent mx-4 self-stretch hidden md:block " />

        </div>
       
        
      ))}
    </>
  );
};

export default WhyChooseTetraCodeCards;
