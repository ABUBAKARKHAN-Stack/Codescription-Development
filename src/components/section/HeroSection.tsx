"use client"

import React from 'react'
import { Button } from '../ui/button'
import { WordRotate } from '../magicui/word-rotate'
import { Sparkles } from '../reusabe'
import { AuroraBackground } from '../ui/aurora-background'
import { AuroraBackgroundDemo } from './AuroraBg'


const HeroSection = () => {


  return (
    <div
      style={{
        backgroundImage: "url('/assets/herobg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",

      }}
      className='min-h-screen w-full h-full flex justify-center items-center relative z-30 mask-b-from-40% to-100%'
    >
      <AuroraBackgroundDemo/>
      <Sparkles />
      
      <div className='flex flex-col absolute z-50 mt-5  justify-center items-center gap-y-4'>
        <div className="space-y-3">
          <h1 className="flex justify-center items-center font-sigmar text-4xl md:text-5xl lg:text-6xl flex-wrap leading-tight text-center">
            We Deliver&nbsp;
            <span className="inline-block min-w-[12ch] text-center">
              <WordRotate
                words={[
                  "Modern Stack",
                  "Faster Delivery",
                  "Scalable Code",
                ]}
              />
            </span>
          </h1>

          <p className="font-poppins mx-auto text-primary font-normal text-sm md:text-base max-w-[80%] leading-relaxed text-wrap text-center xl:text-xl mb-6">
            We build modern, scalable, and efficient digital solutions tailored for your success.
          </p>
        </div>

        <div className="flex  flex-col xsm:flex-row gap-x-10 gap-y-3">
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

        </div>
      </div>
    </div>
  )
}

export default HeroSection