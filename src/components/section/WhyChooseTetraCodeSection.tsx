"use client";

import React from "react";
import { SectionHeader } from "../reusabe";
import ContainerLayout from "../layout/ContainerLayout";
import { WhyChooseTetraCodeCards } from "../cards";
import { whyChooseSectionHeader } from "@/data/whychoose.data";

const WhyChooseTetraCodeSection = () => {
  return (
    <main className="h-full w-full py-16 md:py-24">
      <ContainerLayout>
        <SectionHeader
          mainHeading={whyChooseSectionHeader.mainHeading}
          animateOnce={true}
        />
        <section className="mt-10 grid w-full grid-cols-1 gap-14  sm:grid-cols-2 lg:grid-cols-3">
          <WhyChooseTetraCodeCards />
        </section>
      </ContainerLayout>
    </main>
  );
};

export default WhyChooseTetraCodeSection;
