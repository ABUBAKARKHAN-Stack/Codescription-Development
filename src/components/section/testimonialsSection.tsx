"use client";

import React from "react";
import ContainerLayout from "../layout/ContainerLayout";
import { SectionHeader } from "../reusabe";
import { testimonialSectionHeader } from "@/data/testimonials.data";
import TestimonialCards from "@/components/cards/TestimonialCards";

const TestimonialsSection = () => {
  return (
    <main id="what-we-do" className="h-full w-full py-16 md:py-24">
      <ContainerLayout>
        <SectionHeader
          mainHeading={testimonialSectionHeader.mainHeading}
          subText={testimonialSectionHeader.subText}
          animateOnce={true}
        />

        <section className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TestimonialCards />
        </section>
      </ContainerLayout>
    </main>
  );
};

export default TestimonialsSection;
