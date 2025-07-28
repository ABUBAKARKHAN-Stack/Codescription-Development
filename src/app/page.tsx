import { HeroSection, WhyChooseTetraCodeSection,NavbarSection } from '@/components/section'
import React from 'react'



const Home = () => {
  return (
    <div className='overflow-hidden bg-[#F3F8FF] '>
      <NavbarSection />
      <HeroSection />
      <WhyChooseTetraCodeSection />
    </div>
  )
}

export default Home