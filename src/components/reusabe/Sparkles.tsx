'use client';
import React, { FC } from 'react';
import { SparklesCore } from '../ui/sparkles';


const Sparkles: FC = () => {
  return (
      <div className="w-full absolute inset-0 h-full">
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
  );
};

export default Sparkles;
