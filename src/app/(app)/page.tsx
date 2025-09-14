"use client";

import React from "react";
import {
  HeroSection,
  WhatWeDoSection,
  WhyChooseTetraCodeSection,
  AboutUsSection,
  OurWorkSection,
  TestimonialSection,
  TechStackSection,
  ContactSection,
} from "@/components/section/landing";
import { SpaceSeparator } from "@/components/ui/space-theme-separator";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <WhyChooseTetraCodeSection />
      <AboutUsSection />
      <OurWorkSection />
      <TestimonialSection />
      <TechStackSection />
      <ContactSection />
      <SpaceSeparator />
    </>
  );
};

export default Home;
