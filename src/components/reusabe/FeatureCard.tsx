"use client"

import React, { FC, RefObject, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Eye } from 'lucide-react'
import { Separator } from '../ui/separator'

type FeatureCardProps = {
    id: number
    title: string
    description: string
    icon: React.ElementType
    link?: string
    showOverlay?: boolean
    index?: number;
    cardsContainerRef: RefObject<Element | null>
}

const FeatureCard: FC<FeatureCardProps> = ({
    id,
    title,
    description,
    icon: Icon,
    link = "#",
    showOverlay = true,
    index = 0,
    cardsContainerRef
}) => {
    const [isHovered, setIsHovered] = useState(false)

     const isInView = useInView(cardsContainerRef, {
            once: true,
            margin: "-100px",
            amount: 0.2
        });

    return (
        <motion.div
            className="relative group hover:cursor-pointer rounded-md h-80 overflow-hidden bg-card transition-all duration-300 px-6 py-8 flex flex-col justify-between
            before:absolute before:inset-0 before:rounded-md before:p-[1px] before:bg-gradient-to-br before:from-[#8B5FBF] before:via-[#A855F7] before:to-[#9333EA] before:animate-pulse after:absolute after:inset-[1px] after:rounded-md after:bg-card after:z-[1] shadow-[0_0_10px_rgba(139,95,191,0.4),0_0_15px_rgba(168,85,247,0.3),0_0_20px_rgba(147,51,234,0.2)] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,95,191,0.6),0_0_30px_rgba(168,85,247,0.4),0_0_40px_rgba(147,51,234,0.3)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 15 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 }: "hidden"}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 2,
                delay: index * 0.15
            }}
        >
            {/* Overlay */}
            {showOverlay && (
                <motion.div
                    className="absolute inset-0 z-20 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-md"
                    initial={{ y: -350, opacity: 0 }}
                    animate={{
                        y: isHovered ? 0 : -350,
                        opacity: isHovered ? 1 : 0,
                        backdropFilter: isHovered ? "blur(10px)" : "blur(0px)"
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.3
                    }}
                >
                    <div className="w-full h-full flex justify-center items-center">
                        <motion.div
                            initial={{ scale: 0, rotate: -180, opacity: 0 }}
                            animate={{
                                scale: isHovered ? 1 : 0,
                                rotate: isHovered ? 0 : -180,
                                opacity: isHovered ? 1 : 0
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                                delay: 0.1
                            }}
                        >
                            <Link
                                href={link}
                                className="w-28 h-28 bg-[#9333EA] text-white hover:bg-[#8B5FBF] hover:text-white shadow-md rounded-full flex flex-col justify-center items-center transition-all duration-200
                                hover:shadow-[0_0_15px_rgba(139,95,191,0.8)] hover:ring-2 hover:ring-[#8B5FBF]/30"
                            >
                                <Eye className="size-6" />
                                <span className="text-xs font-medium block mt-1">View Details</span>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            )}

            {/* Icon */}
            <motion.div
                className="flex items-center justify-center relative w-14 h-14 mb-4 z-[2]"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.1 + 0.5
                }}
            >
                <div className="absolute inset-0 bg-[#A855F7] rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)] animate-pulse" />
                <Icon className="relative text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] size-7.5 stroke-[1.5]" />
            </motion.div>

            {/* Content */}
            <motion.div
                className="flex flex-col gap-3 z-[2]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: index * 0.1 + 0.7,
                    duration: 0.5,
                    ease: "easeOut"
                }}
            >
                <div>
                    <h3 className="text-lg font-semibold leading-tight text-foreground drop-shadow-[0_0_8px_rgba(139,95,191,0.3)]">
                        {title}
                    </h3>
                    <Separator className="!w-20 mt-1 rounded-full border-2 border-[#8B5FBF] shadow-[0_0_10px_rgba(139,95,191,0.6)]" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </motion.div>
        </motion.div>
    )
}

export default FeatureCard
