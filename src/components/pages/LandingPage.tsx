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

const LandingPage = () => {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <WhatWeDoSection />
      <WhyChooseTetraCodeSection />
      <OurWorkSection />
      <TestimonialSection />
      <TechStackSection />
    </>
  );
};

export default LandingPage;
