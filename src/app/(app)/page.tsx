"use client";

import React from "react";
import {
  HeroSection,
  WhatWeDoSection,
  WhyChooseTetraCodeSection,
  TestimonialSection,
  TechStackSection,
  OurWorkSection,
  AboutUsSection,
  ContactSection,
} from "@/components/section";
import { SpaceSeparator } from "@/components/ui/space-theme-separator";

const Home = () => {
  return (
    <div className=" ">
      <HeroSection />
      <AboutUsSection />
      <WhatWeDoSection />
      <WhyChooseTetraCodeSection />
      <OurWorkSection />
      <TestimonialSection />
      <TechStackSection />
      <ContactSection />
      <SpaceSeparator />
    </div>
  );
};

export default Home;
