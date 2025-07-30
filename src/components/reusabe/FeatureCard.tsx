"use client"

import React, { FC, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
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
}

const FeatureCard: FC<FeatureCardProps> = ({
    id,
    title,
    description,
    icon: Icon,
    link = "#",
    showOverlay = true,
    index = 0,
}) => {
    const [isHovered, setIsHovered] = useState(false)

    const cardRef = useRef(null)

    const isInView = useInView(cardRef, {
        once: true,
        margin: "-100px",
    });

    return (
        <motion.div
            className="relative group hover:cursor-pointer rounded-md h-80 overflow-hidden bg-card px-6 py-8 flex flex-col justify-between
            before:absolute before:inset-0 before:rounded-md before:p-[1px] before:bg-gradient-to-br before:from-[#8B5FBF] before:via-[#A855F7] before:to-[#9333EA] before:animate-pulse after:absolute after:inset-[1px] after:rounded-md after:bg-card after:z-[1]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={cardRef}
            initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
                rotateX: 10
            }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0
            } : {}}
            whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: [
                    "0 0 10px rgba(139,95,191,0.4), 0 0 15px rgba(168,85,247,0.3), 0 0 20px rgba(147,51,234,0.2)",
                    "0 0 20px rgba(139,95,191,0.6), 0 0 30px rgba(168,85,247,0.4), 0 0 40px rgba(147,51,234,0.3)"
                ]
            }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 25,
                mass: 0.8,
                delay: index * 0.1
            }}
            style={{
                boxShadow: "0 0 10px rgba(139,95,191,0.4), 0 0 15px rgba(168,85,247,0.3), 0 0 20px rgba(147,51,234,0.2)"
            }}
        >
            <AnimatePresence>
                {/* Overlay */}
                {showOverlay && (
                    <motion.div
                        key={"overlay"}
                        className="absolute inset-0 z-20 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-md"
                        initial={{ y: -350, opacity: 0 }}
                        animate={{
                            y: isHovered ? 0 : -350,
                            opacity: isHovered ? 1 : 0,
                            backdropFilter: isHovered ? "blur(10px)" : "blur(0px)"
                        }}
                        exit={{ y: -350, opacity: 0 }}
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
                                    className="w-28 h-28 bg-[#9333EA] text-white hover:bg-[#8B5FBF] hover:text-white shadow-md rounded-full flex flex-col justify-center items-center transition-colors duration-200
                            hover:shadow-[0_0_15px_rgba(139,95,191,0.8)] hover:ring-2 hover:ring-[#8B5FBF]/30"
                                >
                                    <Eye className="size-6" />
                                    <span className="text-xs font-medium block mt-1">View Details</span>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Icon */}
            <motion.div
                className="flex items-center justify-center relative w-14 h-14 mb-4 z-[2]"
                initial={{ scale: 0, rotate: 180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: index * 0.1 + 0.3
                }}
            >
                <div className="absolute inset-0 bg-[#A855F7] rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)] animate-pulse" />
                <Icon className="relative text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] size-7.5 stroke-[1.5]" />
            </motion.div>

            {/* Content */}
            <motion.div
                className="flex flex-col gap-3 z-[2]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: index * 0.1 + 0.4,
                    duration: 0.4,
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
