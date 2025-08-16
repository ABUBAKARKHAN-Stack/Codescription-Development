import React from 'react'
import {
    HeroSection,
    WhatWeDoSection,
    WhyChooseTetraCodeSection,
    NavbarSection,
} from "@/components/section";
import OurWorkSection from "@/components/section/OurWorkSection";
import { SpaceSeparator } from '../ui/space-theme-separator';
import TestimonialSection from '../section/testimonialsSection';

const LandingPage = () => {
    return (
     <> 
     <NavbarSection />
      <HeroSection />
      <WhatWeDoSection />
      <SpaceSeparator starCount={20} height="h-6" />
      <WhyChooseTetraCodeSection />
      <TestimonialSection></TestimonialSection>
      <SpaceSeparator starCount={20} height="h-6"  />
      <OurWorkSection />
     </>
    )
}

export default LandingPage