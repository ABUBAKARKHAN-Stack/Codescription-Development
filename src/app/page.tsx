'use client'
import { HeroSection, WhatWeDoSection, WhyChooseTetraCodeSection, NavbarSection } from '@/components/section'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import OurWorkSection from '@/components/section/OurWorkSection'



const Home = () => {
  return (
    <div className='overflow-hidden bg-background '>
      <NavbarSection />
      <HeroSection />
      <WhatWeDoSection />
      <Separator className='border-2 border-primary' />
      <WhyChooseTetraCodeSection />
      <Separator className='border-2 border-primary' />
      <OurWorkSection />
    </div>
  )
}

export default Home