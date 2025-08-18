"use client";

import React, { useState } from "react";
import ContainerLayout from "../layout/ContainerLayout";
import { SectionHeader } from "../reusabe";
import { techStackSectionHeader, techStackData } from "@/data/techstack.data";
import { TechStackTabs } from "@/types/main.types";
import { TechStackCards } from "../cards";
import StarButton from "../ui/star-button";

const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState<TechStackTabs>(
    TechStackTabs.FRONTEND,
  );

  return (
    <main className="h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 md:py-24">
      <ContainerLayout>
        <SectionHeader
          mainHeading={techStackSectionHeader.mainHeading}
          animateOnce={true}
        />
        <section className="mt-10 w-full space-y-10">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {techStackData.map(({ category, label }) => (
              <StarButton
                key={label}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                label={label}
                category={category}
              />
            ))}
          </div>
          <TechStackCards activeTab={activeTab} />
        </section>
      </ContainerLayout>
    </main>
  );
};

export default TechStackSection;
