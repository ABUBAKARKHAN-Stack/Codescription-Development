"use client";

import React, { useState } from "react";
import ContainerLayout from "../layout/ContainerLayout";
import { SectionHeader } from "../reusabe";
import { techStackSectionHeader, techStackData } from "@/data/techstack.data";
import { TechStackTabs } from "@/types/main.types";
import { TechStackCards } from "../cards";
import StarButton from "../ui/star-button";
import { sectionStyles } from "@/constants/style.constants";

const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState<TechStackTabs>(
    TechStackTabs.FRONTEND,
  );

  return (
    <section
      className="h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16"
      style={{ backgroundImage: sectionStyles.bg }}
    >
      <ContainerLayout>
        <SectionHeader mainHeading={techStackSectionHeader.mainHeading} />
        <section className="mt-10 w-full space-y-10">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {techStackData.map(({ category, label }) => (
              <StarButton
                key={label}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                label={label}
                category={category}
                className="xsm:px-6 xsm:py-3 xsm:text-sm px-3 py-1.5 text-[10px] min-[350px]:px-4 min-[350px]:py-2 min-[350px]:text-xs"
              />
            ))}
          </div>
          <TechStackCards activeTab={activeTab} />
        </section>
      </ContainerLayout>
    </section>
  );
};

export default TechStackSection;
