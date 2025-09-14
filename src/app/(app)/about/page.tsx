import { WhyChooseTetraCodeSection } from "@/components/section";
import {
  AboutPageHeader,
  OurStorySection,
  OurPrinciplesSection,
  TeamSection,
} from "@/components/section/about";
import React from "react";

const About = () => {
  return (
    <>
      <AboutPageHeader />
      <OurStorySection />
      <WhyChooseTetraCodeSection />
      <OurPrinciplesSection />
      <TeamSection />
    </>
  );
};

export default About;
