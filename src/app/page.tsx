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
import { Footer, Navbar } from "@/components/layout";

const Home = () => {
  return (
    <>
      <Navbar />
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
