"use client";

import React, { useRef, useState } from "react";
import ContainerLayout from "../layout/ContainerLayout";
import { SectionHeader } from "../reusabe";
import {
    Eye,
} from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { whatWeDoData, whatWeDoSectionHeader } from "@/data/whatwedo.data";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const WhatWeDoSection = () => {


    const cardsRef = useRef(null);
    const isInView = useInView(cardsRef, { once: false, margin: "-50px" });

    const [isCardHovered, setIsCardHovered] = useState({ id: 0 });

    const handleCardHover = (id: number) => {
        setIsCardHovered({ id });
    };

    return (
        <main
        id="what-we-do"
        className="w-full h-full py-16 md:py-24">
            <ContainerLayout>
                <SectionHeader
                    mainHeading={whatWeDoSectionHeader.mainHeading}
                    subText={whatWeDoSectionHeader.subText}
                    animateOnce={true}
                />

                <section
                    ref={cardsRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 w-full"
                >
                    {whatWeDoData.map(({ id, title, description, icon: Icon, link }, index) => (
                        <motion.div
                            key={id}
                            custom={index}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={cardVariants}
                            className="relative group hover:cursor-pointer border rounded-xl h-80 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 px-6 py-8 flex flex-col justify-between"
                            onMouseEnter={() => handleCardHover(id)}
                            onMouseLeave={() => setIsCardHovered({ id: 0 })}
                        >
                            {/* Hover Overlay */}
                            <motion.div
                                className="absolute inset-0 z-20 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-xl"
                                animate={{
                                    y: isCardHovered.id === id ? 0 : -350,
                                    backdropFilter: isCardHovered.id === id ? "blur(10px)" : "blur(0px)",
                                }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                                <div className="w-full h-full flex justify-center items-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: isCardHovered.id === id ? 1 : 0 }}
                                        transition={{ duration: 0.2, delay: 0.2 }}
                                    >
                                        <Link
                                            href={link}
                                            className="p-2 w-28 h-28 bg-white text-black hover:bg-black hover:text-white border-2 shadow-md rounded-full flex flex-col justify-center items-center transition-colors duration-200"
                                        >
                                            <Eye className="size-6" />
                                            <span className="text-xs font-medium block mt-1">View Details</span>
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Icon */}
                            <div className="flex items-center justify-center relative w-14 h-14 mb-4">
                                <div className="absolute inset-0 bg-accent rounded-full" />
                                <Icon className="relative text-white drop-shadow size-7.5 stroke-[1.5]" />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col gap-3">
                                <div>
                                    <h3 className="text-lg font-semibold leading-tight">{title}</h3>
                                    <Separator className="!w-20 mt-1 rounded-full border-2 border-accent" />
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                            </div>
                        </motion.div>
                    ))}
                </section>
            </ContainerLayout>
        </main>
    );
};

export default WhatWeDoSection;
