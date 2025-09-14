import { WhyChooseTetraCodeSection } from "@/components/section";
import {
  AboutPageHeader,
  HeroSection,
  OurStorySection,
  OurPrinciplesSection,
} from "@/components/section/about";
import React from "react";

const About = () => {
  return (
    <div className="relative h-full min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <AboutPageHeader />
      <OurStorySection />
      <WhyChooseTetraCodeSection />
      <OurPrinciplesSection />
    </div>
  );
};

export default About;
