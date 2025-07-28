import React from 'react'
import { SparklesPreview} from '../reusabe'


const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/herobg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        
      }}
      className='min-h-screen w-full flex  justify-center items-center mask-b-from-40% to-100%'
    >

      <div>
        <SparklesPreview mainHeading='Smart Code. Real Impact' subHeading='We build modern, scalable, and efficient digital solutions tailored for your success.'  />
        {/* <SectionHeader mainHeading='Smart Code. Real Impact' subText='We build modern, scalable, and efficient digital solutions tailored for your success.' /> */}
      </div>
    </div>
  )
}

export default HeroSection