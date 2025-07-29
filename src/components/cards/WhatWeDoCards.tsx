"use client"

import { whatWeDoData } from '@/data/whatwedo.data'
import React, { FC, RefObject } from 'react'
import { FeatureCard } from '../reusabe';

type Props = {
    cardsContainerRef: RefObject<Element | null>
}

const WhatWeDoCards: FC<Props> = ({
    cardsContainerRef
}) => {

    return (
        <>
            {
                whatWeDoData.map(({ description, icon, id, link, title }, i) => (
                    <FeatureCard
                        key={id}
                        icon={icon}
                        cardsContainerRef={cardsContainerRef}
                        showOverlay={true}
                        description={description}
                        title={title}
                        id={id}
                        link={link}
                        index={i}
                    />
                ))
            }
        </>
    );
};

export default WhatWeDoCards;