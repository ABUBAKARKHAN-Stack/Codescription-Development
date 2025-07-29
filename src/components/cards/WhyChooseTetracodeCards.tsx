"use client"

import { whyChooseData } from '@/data/whychoose.data'
import React, { FC, RefObject } from 'react'
import { FeatureCard } from '../reusabe'


type Props = {
    cardsContainerRef: RefObject<Element | null>
}

const WhyChooseTetraCodeCards: FC<Props> = ({
    cardsContainerRef
}) => {
   
    return (
        <>
            {
                whyChooseData.map(({ description, icon, id, title }, i) => (
                    <FeatureCard
                        key={id}
                        icon={icon}
                        description={description}
                        title={title}
                        id={id}
                        showOverlay={false}
                        cardsContainerRef={cardsContainerRef}
                        index={i}
                    />
                ))
            }
        </>
    )
}

export default WhyChooseTetraCodeCards