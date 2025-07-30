"use client"

import { whatWeDoData } from '@/data/whatwedo.data'
import React, { FC, RefObject } from 'react'
import { FeatureCard } from '../reusabe';


const WhatWeDoCards = () => {

    return (
        <>
            {
                whatWeDoData.map(({ description, icon, id, link, title }, i) => (
                    <FeatureCard
                        key={id}
                        icon={icon}
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