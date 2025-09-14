"use client";

import React from "react";
import ContainerLayout from "@/components/layout/ContainerLayout";
import { SectionHeader } from "@/components/reusable";
import { whatWeDoSectionHeader } from "@/data/whatwedo.data";
import { WhatWeDoCards } from "@/components/cards";

const WhatWeDoSection = () => {
  return (
    <section
      id="what-we-do"
      className="h-full w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16"
    >
      <ContainerLayout>
        <SectionHeader mainHeading={whatWeDoSectionHeader.mainHeading} />

        <section className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <WhatWeDoCards />
        </section>
      </ContainerLayout>
    </section>
  );
};

export default WhatWeDoSection;
