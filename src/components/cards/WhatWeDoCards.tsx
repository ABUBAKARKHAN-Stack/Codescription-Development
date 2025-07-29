"use client"

import { whatWeDoData } from '@/data/whatwedo.data'
import React, { FC, RefObject } from 'react'
import { motion, useInView, Variants } from "framer-motion";
import { FeatureCard } from '../reusabe';

type Props = {
    cardsContainerRef: RefObject<Element | null>
}

const WhatWeDoCards: FC<Props> = ({
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
        </motion.div>
    );
};

export default WhatWeDoCards;