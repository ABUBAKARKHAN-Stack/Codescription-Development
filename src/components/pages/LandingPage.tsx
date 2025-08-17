import React from "react";
import {
  HeroSection,
  WhatWeDoSection,
  WhyChooseTetraCodeSection,
  NavbarSection,
  TestimonialSection,
} from "@/components/section";
import OurWorkSection from "@/components/section/OurWorkSection";
import { SpaceSeparator } from "../ui/space-theme-separator";
import AboutUs from "../section/AboutUs";

const LandingPage = () => {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutUs />
      <WhatWeDoSection />
      <WhyChooseTetraCodeSection />
      <OurWorkSection />
      <TestimonialSection />
    </>
  );
};

export default LandingPage;
