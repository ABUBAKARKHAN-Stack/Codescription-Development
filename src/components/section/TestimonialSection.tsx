"use client";

import React, { useEffect } from "react";
import ContainerLayout from "../layout/ContainerLayout";
import { testimonialSectionHeader } from "@/data/testimonials.data";
import { SectionHeader } from "../reusabe";
import { TestimonialCards } from "../cards";
import { Marquee } from "../magicui/marquee";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const TestimonialSection = () => {
  const isXSM = useMediaQuery("(width >= 550px)");

  return (
    <main id="what-we-do" className="h-full w-full py-16 md:py-24">
      <ContainerLayout>
        <SectionHeader
          mainHeading={testimonialSectionHeader.mainHeading}
          animateOnce={true}
        />

        <section className="xsm:mask-y-from-100% xsm:max-h-full xsm:overflow-y-visible xsm:mask-x-from-60% mt-10 h-full max-h-100 overflow-y-hidden mask-y-from-80% mask-x-from-100%">
          <Marquee
            className="flex w-full [--duration:20s]"
            pauseOnHover
            position={isXSM ? "horizontal" : "vertical"}
          >
            <TestimonialCards />
          </Marquee>
        </section>
      </ContainerLayout>
    </main>
  );
};

export default TestimonialSection;
