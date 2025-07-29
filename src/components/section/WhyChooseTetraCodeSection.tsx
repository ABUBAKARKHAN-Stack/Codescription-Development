"use client"

import React, { useRef } from 'react'
import { SectionHeader } from '../reusabe'
import ContainerLayout from '../layout/ContainerLayout'
import { WhyChooseTetraCodeCards } from '../cards'
import { whyChooseSectionHeader } from '@/data/whychoose.data'

const WhyChooseTetraCodeSection = () => {
    const cardsContainerRef = useRef(null);

    return (
        <main
            className="w-full h-full py-16 md:py-24">
            <ContainerLayout>
                <SectionHeader
                    mainHeading={whyChooseSectionHeader.mainHeading}
                    subText={whyChooseSectionHeader.subText}
                    animateOnce={true}
                />
                <section
                    ref={cardsContainerRef}
                    className=" mt-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <WhyChooseTetraCodeCards
                        cardsContainerRef={cardsContainerRef}
                    />
                </section>
            </ContainerLayout>
        </main>
    )
}

export default WhyChooseTetraCodeSection