import { HeroSection, WhatWeDoSection, WhyChooseTetraCodeSection } from '@/components/section'
import { Separator } from '@/components/ui/separator'
import React from 'react'



const Home = () => {
  return (
    <>
      <HeroSection />
      <Separator className='border-2 border-primary' />
      <WhatWeDoSection />
      <Separator className='border-2 border-primary' />
      <WhyChooseTetraCodeSection />
    </>
  )
}

export default Home