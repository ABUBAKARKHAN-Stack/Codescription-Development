import {
  ContactSection,
  OurWorkSection,
  WhatWeDoSection,
} from "@/components/section/landing";
import FeaturedServiceSection from "@/components/section/services/FeaturedServiceSection";
import ServicesHero from "@/components/section/services/ServicesHero";
import { brandName } from "@/constants/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Services`,
  description: `Explore ${brandName}'s services including web development, app development, full stack solutions, e-commerce platforms, UI/UX design, and DevOps automation.`,
};

const ServicePage = () => {
  return (
    <div>
      <ServicesHero />
      {/* <OurWorkSection /> */}
      <WhatWeDoSection />
      <FeaturedServiceSection />
      <ContactSection />
    </div>
  );
};

export default ServicePage;
