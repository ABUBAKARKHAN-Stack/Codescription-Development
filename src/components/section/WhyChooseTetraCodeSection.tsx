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
                    className="mt-10 w-full"
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