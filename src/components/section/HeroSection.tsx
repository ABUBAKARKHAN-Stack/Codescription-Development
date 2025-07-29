"use client"

import React from 'react'
import { Button } from '../ui/button'
import { WordRotate } from '../magicui/word-rotate'
import { Sparkles } from '../reusabe'
import { AuroraBackgroundDemo } from './AuroraBg'
import { ChevronDownCircle } from 'lucide-react'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import {motion} from 'motion/react'
import TetraCode3D from '../ui/tetracode-3d'


const HeroSection = () => {

  const scrollToSection = useScrollToSection()


  return (
    <div

      className='min-h-screen w-full h-full flex justify-center items-center mask-b-from-40% to-100%'
    >
      <div style={{
        backgroundImage: "url('/assets/herobg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
        // className='absolute z-40 inset-0  mask-b-from-20% to-100%'
      ></div>
      {/* <AuroraBackgroundDemo />
      <Sparkles /> */}

      {/* <div className='flex flex-col absolute z-50 mt-5  justify-center items-center gap-y-4'> */}
        {/* <div className="space-y-3">
          <h1 className="flex justify-center items-center font-sigmar text-4xl md:text-5xl lg:text-6xl flex-wrap leading-tight text-center">
            We Deliver&nbsp;
            <span className="inline-block min-w-[12ch] text-center">
              <WordRotate
                words={[
                  "Modern Stack",
                  "Faster Delivery",
                  "Scalable Code",
                ]}
                className='text-primary'
              />
            </span>
          </h1>

          <p className="font-poppins mx-auto text-primary font-normal text-sm md:text-base max-w-[80%] leading-relaxed text-wrap text-center xl:text-xl mb-6">
            We build modern, scalable, and efficient digital solutions tailored for your success.
          </p>
        </div> */}

  <TetraCode3D
  
  />

        {/* <div className="flex  flex-col xsm:flex-row gap-x-10 gap-y-3">
          <Button
            className='cursor-pointer scale-110 text-white font-sigmar tracking-wider hover:scale-115'
            size={"lg"}
          >
            Our Portfolio
          </Button>
          <Button
            size={"lg"}
            className='cursor-pointer scale-110 text-white font-sigmar tracking-wider hover:scale-115'
          >
            Learn More
          </Button>

        </div> */}
      {/* </div> */}
      <button
        onClick={() => scrollToSection('#what-we-do')}
        className='absolute  bottom-14 z-40'>
        <ChevronDownCircle className=' size-10 animate-bounce transition-all duration-200 ease-linear hover:scale-110 cursor-pointer hover:brightness-150  stroke-1' />
      </button>
    </div>
  )
}

export default HeroSection