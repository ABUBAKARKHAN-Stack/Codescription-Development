"use client";

import React from "react";
import ContainerLayout from "../layout/ContainerLayout";
import { testimonialSectionHeader } from "@/data/testimonials.data";
import { SectionHeader } from "../reusabe";
import { TestimonialCards } from "../cards";
import { Marquee } from "../magicui/marquee";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { sectionStyles } from "@/constants/style.constants";

const TestimonialSection = () => {
  const isXSM = useMediaQuery("(width >= 550px)");

  return (
    <section
      id="what-we-do"
      className="h-full w-full bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 py-16"
      style={{ backgroundImage: sectionStyles.bg }}
    >
      <ContainerLayout>
        <SectionHeader mainHeading={testimonialSectionHeader.mainHeading} />

        <section className="xsm:mask-y-from-100% xsm:max-h-full xsm:overflow-y-visible xsm:mask-x-from-60% mt-10 h-full max-h-100 overflow-y-hidden mask-y-from-80% mask-x-from-100%">
          <Marquee
            // draggable
            className="flex w-full [--duration:20s]"
            pauseOnHover
            position={isXSM ? "horizontal" : "vertical"}
          >
            <TestimonialCards />
          </Marquee>
        </section>
      </ContainerLayout>
    </section>
  );
};

export default TestimonialSection;
