"use client"

import React from 'react'
import { Sparkles } from '../reusabe'
import { AuroraBackgroundDemo } from './AuroraBg'
import { ChevronDownCircle } from 'lucide-react'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import TetraCode3D from '../ui/tetracode-3d'


const HeroSection = () => {

  const scrollToSection = useScrollToSection()


  return (
    <div
      className='min-h-screen w-full h-full flex justify-center items-center mask-b-from-40% to-100% relative'
    >
      <div style={{
        backgroundImage: "url('/assets/herobg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        
      }}
        className='absolute inset-0 z-20'
      ></div>
      
      {/* Background layers with lowest z-index */}
      <div className='absolute inset-0 z-10'>
        <AuroraBackgroundDemo />
      </div>
      
      <div className='absolute inset-0 z-20'>
        <Sparkles />
      </div>

      {/* 3D Component with highest z-index and transparent background */}
      <div className='absolute inset-0 z-30 pointer-events-none'>
        <div className='w-full h-full bg-transparent'>
          <TetraCode3D />
        </div>
      </div>

      {/* Navigation button */}
      <button
        onClick={() => scrollToSection('#what-we-do')}
        className='absolute bottom-14 z-40'>
        <ChevronDownCircle className='size-10 animate-bounce transition-all duration-200 ease-linear hover:scale-110 cursor-pointer hover:brightness-150 stroke-1' />
      </button>
    </div>
  )
}

export default HeroSection