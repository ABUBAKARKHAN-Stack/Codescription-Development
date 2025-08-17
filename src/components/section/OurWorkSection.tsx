import React from "react";
import ContainerLayout from "../layout/ContainerLayout";
import { ourWorkSectionHeader } from "@/data/ourwork.data";
import { SectionHeader } from "../reusabe";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { OurWorkCards } from "../cards";

const OurWorkSection = () => {
  return (
    <main className="h-full w-full py-16 md:py-24">
      <ContainerLayout>
        <SectionHeader
          mainHeading={ourWorkSectionHeader.mainHeading}
          animateOnce={true}
        />
        <section className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <OurWorkCards />
          <div className="col-span-full mx-auto">
            <InteractiveHoverButton className="font-sigmar w-fit px-6 py-3 tracking-wider shadow-[0_0_10px_rgba(139,95,191,0.4),_0_0_15px_rgba(168,85,247,0.3),_0_0_20px_rgba(147,51,234,0.2)]">
              View Portfolio
            </InteractiveHoverButton>
          </div>
        </section>
      </ContainerLayout>
    </main>
  );
};

export default OurWorkSection;
