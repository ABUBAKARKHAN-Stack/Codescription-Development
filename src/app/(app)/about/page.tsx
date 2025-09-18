import {
  AboutHeroSection,
  OurStorySection,
  OurPrinciplesSection,
  TeamSection,
} from "@/components/section/about";
import React from "react";
import { Metadata } from "next";
import { brandName } from "@/constants/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Discover ${brandName}, our story, mission, and vision. Learn how we began, our guiding principles, and our commitment to shaping the future with innovative software solutions.`,
};

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <OurPrinciplesSection />
      <TeamSection />
    </>
  );
};

export default About;
