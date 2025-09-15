
import { ContactSection, OurWorkSection, WhatWeDoSection } from "@/components/section/landing";
import FeaturedServiceSection from "@/components/section/services/FeaturedServiceSection";
import ServicesHero from "@/components/section/services/ServicesHero";
import React from "react";

const ServicePage = () => {
  return <div>
    <ServicesHero />
    {/* <OurWorkSection /> */}
    <WhatWeDoSection />
    <FeaturedServiceSection />
    <ContactSection/>
  </div>;
};

export default ServicePage;
