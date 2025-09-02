import React from "react";
import ContainerLayout from "@/components/layout/ContainerLayout";
import { ourWorkSectionHeader } from "@/data/ourwork.data";
import { SectionHeader } from "@/components/reusable";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { OurWorkCards } from "@/components/cards";
import { browserSupportStyles } from "@/constants/style.constants";

const OurWorkSection = () => {
  return (
    <section
      className="h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16"
      // style={{ backgroundImage: browserSupportStyles.bg }}
    >
      <ContainerLayout>
        <SectionHeader mainHeading={ourWorkSectionHeader.mainHeading} />
        <section className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <OurWorkCards />
          <div className="col-span-full mx-auto">
            <InteractiveHoverButton className="font-orbitron w-fit border-none bg-transparent px-6 py-3 font-bold tracking-wider shadow-[0_0_10px_rgba(139,95,191,0.4),_0_0_15px_rgba(168,85,247,0.3),_0_0_20px_rgba(147,51,234,0.2)]">
              View Portfolio
            </InteractiveHoverButton>
          </div>
        </section>
      </ContainerLayout>
    </section>
  );
};

export default OurWorkSection;
