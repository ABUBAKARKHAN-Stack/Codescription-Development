import React from 'react'
import ContainerLayout from '../layout/ContainerLayout';
import { ourWorkSectionHeader } from '@/data/ourwork.data';
import { SectionHeader } from '../reusabe';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';
import { OurWorkCards } from '../cards';

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
          className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <OurWorkCards />
          <div className='col-span-full mx-auto'>
            <InteractiveHoverButton
              className='font-sigmar w-fit  py-3 px-6 shadow-[0_0_10px_rgba(139,95,191,0.4),_0_0_15px_rgba(168,85,247,0.3),_0_0_20px_rgba(147,51,234,0.2)] tracking-wider'
            >
              View Portfolio
            </InteractiveHoverButton>
          </div>
        </section>

      </ContainerLayout>
    </main>
  );
}

export default OurWorkSection