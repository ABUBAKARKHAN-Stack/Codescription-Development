"use client";
import {
  HeroSection,
  WhatWeDoSection,
  WhyChooseTetraCodeSection,
  NavbarSection,
} from "@/components/section";
import { Separator } from "@/components/ui/separator";
import React from "react";
import OurWorkSection from "@/components/section/OurWorkSection";
import { SpaceSeparator } from "@/components/ui/space-theme-separator";

const Home = () => {
  return (
    <div className="bg-background overflow-hidden">
      <NavbarSection />
      <HeroSection />
      <WhatWeDoSection />
      <SpaceSeparator starCount={100} height="h-7" />
      <WhyChooseTetraCodeSection />
      <SpaceSeparator height="h-7" />
      <OurWorkSection />
    </div>
  );
};

export default Home;
