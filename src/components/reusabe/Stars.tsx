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
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#A05FFF"
        />
      </div>
      <SectionHeader mainHeading={mainHeading} subText={subHeading} />
    </div>
  );
};

export default SparklesPreview;
