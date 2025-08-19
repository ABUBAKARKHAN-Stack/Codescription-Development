"use client";

import React from "react";
import {
  HeroSection,
  WhatWeDoSection,
  WhyChooseTetraCodeSection,
  NavbarSection,
  TestimonialSection,
  TechStackSection,
  OurWorkSection,
  AboutUsSection,
  ContactSection,
} from "@/components/section";
import { SpaceSeparator } from "@/components/ui/space-theme-separator";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutUsSection />
      <WhatWeDoSection />
      <WhyChooseTetraCodeSection />
      <OurWorkSection />
      <TestimonialSection />
      <TechStackSection />
      <ContactSection />
      <SpaceSeparator />
      <Footer />
    </>
  );
};

export default Home;
