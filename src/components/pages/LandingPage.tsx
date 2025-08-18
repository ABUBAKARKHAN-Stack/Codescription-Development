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
import AboutUs from "../section/AboutUs";
import ContactSection from "../section/Contact";
import Footer from "../layout/Footer";

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
      <TechStackSection />
      <ContactSection />
      <SpaceSeparator />
      <Footer />

    </>
  );
};

export default LandingPage;
