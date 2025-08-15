import React from 'react'
import {
    HeroSection,
    WhatWeDoSection,
    WhyChooseTetraCodeSection,
    NavbarSection,
} from "@/components/section";
import OurWorkSection from "@/components/section/OurWorkSection";
import { SpaceSeparator } from '../ui/space-theme-separator';


const LandingPage = () => {
    return (
     <> 
     <NavbarSection />
      <HeroSection />
      <WhatWeDoSection />
      <SpaceSeparator starCount={100} height="h-7" />
      <WhyChooseTetraCodeSection />
      <SpaceSeparator height="h-7" />
      <OurWorkSection />
     </>
    )
}

export default LandingPage