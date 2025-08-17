import React from "react";
import {
  HeroSection,
  WhatWeDoSection,
  WhyChooseTetraCodeSection,
  NavbarSection,
  TestimonialSection,
  TechStackSection,
} from "@/components/section";
import OurWorkSection from "@/components/section/OurWorkSection";
import { SpaceSeparator } from "../ui/space-theme-separator";

const LandingPage = () => {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <WhatWeDoSection />
      <SpaceSeparator starCount={20} height="h-6" />
      <WhyChooseTetraCodeSection />
      <SpaceSeparator starCount={20} height="h-6" />
      <OurWorkSection />
      <SpaceSeparator starCount={20} height="h-6" />
      <TestimonialSection />
      <SpaceSeparator starCount={20} height="h-6" />
      <TechStackSection />
    </>
  );
};

export default LandingPage;
