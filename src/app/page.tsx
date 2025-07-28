import { HeroSection, WhatWeDoSection, WhyChooseTetraCodeSection ,NavbarSection} from '@/components/section'
import { Separator } from '@/components/ui/separator'
import React from 'react'



const Home = () => {
  return (
    <div className='overflow-hidden bg-[#F3F8FF] '>
      <NavbarSection />
      <HeroSection />
      <Separator className='border-2 border-primary' />
      <WhatWeDoSection />
      <Separator className='border-2 border-primary' />
      <WhyChooseTetraCodeSection />
    </div>
  )
}

export default Home