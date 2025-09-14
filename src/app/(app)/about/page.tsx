import { WhyChooseTetraCodeSection } from "@/components/section/landing";
import {
  AboutHeroSection,
  OurStorySection,
  OurPrinciplesSection,
  TeamSection,
} from "@/components/section/about";
import React from "react";

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <WhyChooseTetraCodeSection />
      <OurPrinciplesSection />
      <TeamSection />
    </>
  );
};

export default About;
