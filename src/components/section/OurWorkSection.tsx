import React from 'react'
import ContainerLayout from '../layout/ContainerLayout';
import { ourWorkSectionHeader } from '@/data/ourwork.data';
import { SectionHeader } from '../reusabe';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';

const OurWorkSection = () => {
  return (
    <main
      className="w-full h-full py-16 md:py-24">
      <ContainerLayout>
        <SectionHeader
          mainHeading={ourWorkSectionHeader.mainHeading}
          subText={ourWorkSectionHeader.subText}
          animateOnce={true}
        />

        <section
          className=" mt-10 w-full max-h-full flex flex-col gap-y-10 justify-center items-center h-full"
        >
          <div>hi</div>
          <InteractiveHoverButton
            className='font-sigmar py-3 px-6 shadow-[0_0_10px_rgba(139,95,191,0.4),_0_0_15px_rgba(168,85,247,0.3),_0_0_20px_rgba(147,51,234,0.2)] tracking-wider'
          >
            View Portfolio
          </InteractiveHoverButton>
        </section>

      </ContainerLayout>
    </main>
  );
}

export default OurWorkSection