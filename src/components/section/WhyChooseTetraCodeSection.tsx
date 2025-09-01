"use client";

import React from "react";
import { SectionHeader } from "@/components/reusabe/server";
import ContainerLayout from "@/components/layout/ContainerLayout";
import { WhyChooseTetraCodeCards } from "@/components/cards";
import { whyChooseSectionHeader } from "@/data/whychoose.data";
import { browserSupportStyles } from "@/constants/style.constants";

const WhyChooseTetraCodeSection = () => {
  return (
    <section
      className="h-full w-full bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 py-16"
      // style={{ backgroundImage: browserSupportStyles.bg }}
    >
      <ContainerLayout>
        <SectionHeader mainHeading={whyChooseSectionHeader.mainHeading} />
        <section className="mt-10 grid w-full grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
          <WhyChooseTetraCodeCards />
        </section>
      </ContainerLayout>
    </section>
  );
};

export default WhyChooseTetraCodeSection;
