'use client';
import React, { FC } from 'react';
import { SparklesCore } from '../ui/sparkles';
import SectionHeader from './SectionHeader';

type Props = {
  mainHeading: string;
  subHeading:string
};

const SparklesPreview: FC<Props> = ({ mainHeading , subHeading }) => {
  return (
    <div className="min-h-screen relative min-w-screen flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={2}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#A05FFF"
        />
      </div>
      <h1 className='lg:text-6xl md:text-5xl text-4xl text-wrap text-center  font-sigmar'>
                          {mainHeading}
                      </h1>             
                      <p className='font-poppins mx-auto text-primary font-normal text-sm md:text-base max-w-[80%] leading-relaxed text-wrap text-center xl:text-xl mb-6'>
                          {subHeading}
                      </p>
    </div>
  );
};

export default SparklesPreview;
