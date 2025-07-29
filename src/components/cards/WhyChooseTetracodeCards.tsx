"use client"

import { whyChooseData } from '@/data/whychoose.data'
import React, { FC, RefObject } from 'react'
import { FeatureCard } from '../reusabe'
import { useInView, Variants, motion } from 'motion/react'


type Props = {
    cardsContainerRef: RefObject<Element | null>
}

const WhyChooseTetraCodeCards: FC<Props> = ({
    cardsContainerRef
}) => {
    const isInView = useInView(cardsContainerRef, {
        once: true,
        margin: "-100px",
        amount: 0.2
    });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                duration: 0.3
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            {
                whyChooseData.map(({ description, icon, id, title }, i) => (
                    <FeatureCard
                        key={id}
                        icon={icon}
                        description={description}
                        title={title}
                        id={id}
                        showOverlay={false}
                        index={i}
                    />
                ))
            }
        </motion.div>
    )
}

export default WhyChooseTetraCodeCards