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
            <SpaceSeparator starCount={20} height="h-6" />
            <WhyChooseTetraCodeSection />
            <SpaceSeparator starCount={20} height="h-6" />
            <OurWorkSection />
            <SpaceSeparator starCount={20} height="h-6" />
        </>
    )
}

export default LandingPage