"use client"

import React, { FC, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Eye, ExternalLink, Github, Star, Calendar } from 'lucide-react'
import { Separator } from '../ui/separator'
import Image from 'next/image'

type FeatureCardProps = {
    id: number
    title: string
    description: string
    icon: React.ElementType
    link?: string
    showOverlay?: boolean
    index?: number;
    width?: string;
    height?: string;
    isForProjects?: boolean
    // Project-specific props
    projectImage?: string
    projectTech?: string[]
    githubLink?: string
    liveLink?: string
    starred?: boolean
    year?: string
    category?: string
}

const FeatureCard: FC<FeatureCardProps> = ({
    id,
    title,
    description,
    icon: Icon,
    link = "#",
    showOverlay = true,
    index = 0,
    height,
    width,
    isForProjects = false,
    projectImage,
    projectTech = [],
    githubLink,
    liveLink,
    starred = false,
    year,
    category
}) => {
    const [isHovered, setIsHovered] = useState(false)

    const cardRef = useRef(null)

    const isInView = useInView(cardRef, {
        once: true,
        margin: "-100px",
    });

    if (isForProjects) {
        return (
            <motion.div
                className={`relative group cursor-pointer rounded-xl ${width ?? "w-full"} ${height ?? "h-[400px]"} overflow-hidden bg-slate-950/90 backdrop-blur-sm flex flex-col
                before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-br before:from-blue-400 before:via-purple-500 before:to-cyan-400 
                after:absolute after:inset-[1px] after:rounded-xl after:bg-slate-950/95 after:z-[1]`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                ref={cardRef}
                initial={{
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                    rotateX: 15
                }}
                animate={isInView ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0
                } : {}}
                whileHover={{
                    y: -12,
                    scale: 1.03,
                    rotateX: -2,
                    boxShadow: [
                        "0 10px 30px rgba(59,130,246,0.3), 0 0 20px rgba(168,85,247,0.2)",
                        "0 20px 60px rgba(59,130,246,0.4), 0 0 40px rgba(168,85,247,0.3), 0 0 0 1px rgba(6,182,212,0.1)"
                    ]
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 0.9,
                    delay: index * 0.15
                }}
                style={{
                    boxShadow: "0 8px 25px rgba(59,130,246,0.15), 0 3px 10px rgba(0,0,0,0.3)"
                }}
            >
                {/* Starfield Background */}
                <div className="absolute inset-0 z-0">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <motion.div
                            key={`star-${i}`}
                            className="absolute bg-white rounded-full"
                            style={{
                                width: Math.random() * 2 + 1,
                                height: Math.random() * 2 + 1,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                </div>

                {/* Project Image Container */}
                <motion.div
                    className="relative w-full h-48 z-[2] overflow-hidden rounded-t-xl"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: index * 0.15 + 0.3,
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                >
                    {/* Top badges */}
                    <div className="absolute top-3 left-3 right-3 z-10 flex justify-between items-start">
                        <div className="flex gap-2">
                            {category && (
                                <span className="px-2 py-1 text-xs font-medium bg-slate-900/60 backdrop-blur-md text-cyan-300 rounded-full border border-cyan-400/20">
                                    {category}
                                </span>
                            )}
                            {starred && (
                                <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-md rounded-full border border-yellow-400/30">
                                    <Star className="size-3 text-yellow-300 fill-yellow-300" />
                                    <span className="text-xs font-medium text-yellow-100">Featured</span>
                                </div>
                            )}
                        </div>
                        {year && (
                            <div className="flex items-center gap-1 px-2 py-1 bg-slate-900/60 backdrop-blur-md text-blue-300 rounded-full border border-blue-400/20">
                                <Calendar className="size-3" />
                                <span className="text-xs font-medium">{year}</span>
                            </div>
                        )}
                    </div>

                    {projectImage ? (
                        <div className="relative w-full h-full">
                            <Image
                                src={projectImage}
                                alt={title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                        </div>
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
                            <Icon className="text-cyan-300/80 size-16 stroke-[1] relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                        </div>
                    )}

                    {/* Animated cosmic overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-purple-900/40 to-transparent opacity-0"
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                </motion.div>

                <AnimatePresence>
                    {/* Enhanced Space Overlay */}
                    {showOverlay && (
                        <motion.div
                            key="project-overlay"
                            className="absolute inset-0 z-30 flex flex-col justify-center items-center rounded-xl"
                            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                            animate={{
                                opacity: isHovered ? 1 : 0,
                                backdropFilter: isHovered ? "blur(8px)" : "blur(0px)"
                            }}
                            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                            transition={{
                                duration: 0.4,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            style={{
                                background: isHovered 
                                    ? "radial-gradient(circle at 50% 50%, rgba(30,41,59,0.4), rgba(51,65,85,0.6), rgba(15,23,42,0.9))"
                                    : "transparent"
                            }}
                        >
                            <motion.div
                                className="flex gap-4"
                                initial={{ scale: 0, y: 30, opacity: 0 }}
                                animate={{
                                    scale: isHovered ? 1 : 0,
                                    y: isHovered ? 0 : 30,
                                    opacity: isHovered ? 1 : 0
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                    delay: 0.15
                                }}
                            >
                                {githubLink && (
                                    <Link
                                        href={githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl rounded-2xl flex justify-center items-center transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 border border-slate-600/50 hover:border-cyan-400/50"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Github className="size-6 transition-transform duration-300 group-hover/btn:scale-110" />
                                    </Link>
                                )}
                                {liveLink && (
                                    <Link
                                        href={liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl rounded-2xl flex justify-center items-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 border border-blue-400/30"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <ExternalLink className="size-6 transition-transform duration-300 group-hover/btn:scale-110" />
                                    </Link>
                                )}
                                <Link
                                    href={link}
                                    className="group/btn w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-xl rounded-2xl flex justify-center items-center transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40 border border-cyan-400/30"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Eye className="size-6 transition-transform duration-300 group-hover/btn:scale-110" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Enhanced Project Content */}
                <motion.div
                    className="px-6 py-5 flex flex-col gap-3 z-[2] flex-1 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: index * 0.15 + 0.5,
                        duration: 0.6,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                >
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white leading-tight bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                            {title}
                        </h3>
                        <motion.div
                            className="h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full shadow-lg"
                            initial={{ width: 0 }}
                            animate={{ width: isInView ? "60px" : 0 }}
                            transition={{ delay: index * 0.15 + 0.8, duration: 0.8, ease: "easeOut" }}
                        />
                    </div>
                    
                    <p className="text-sm text-slate-300 leading-relaxed flex-1 line-clamp-3">
                        {description}
                    </p>

                    {/* Enhanced Tech Stack */}
                    {projectTech.length > 0 && (
                        <motion.div
                            className="flex flex-wrap gap-2 mt-auto"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 + 0.7 }}
                        >
                            {projectTech.slice(0, 3).map((tech, techIndex) => (
                                <motion.span
                                    key={tech}
                                    className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-cyan-300 rounded-lg border border-cyan-400/20 backdrop-blur-sm hover:from-blue-800/40 hover:to-purple-800/40 transition-colors duration-300"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.15 + 0.9 + techIndex * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                            {projectTech.length > 3 && (
                                <motion.span 
                                    className="px-3 py-1.5 text-xs font-medium text-slate-400 bg-slate-800/50 rounded-lg border border-slate-600/30"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.15 + 1.2 }}
                                >
                                    +{projectTech.length - 3} more
                                </motion.span>
                            )}
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        )
    }

    // Enhanced Space-Themed Feature Card
    return (
        <motion.div
            className={`relative group hover:cursor-pointer rounded-xl ${width ?? "w-full"} ${height ?? "h-80"} overflow-hidden bg-slate-950/90 backdrop-blur-sm px-6 py-8 flex flex-col justify-between
            before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-br before:from-cyan-400 before:via-blue-500 before:to-purple-500 before:animate-pulse after:absolute after:inset-[1px] after:rounded-xl after:bg-slate-950/95 after:z-[1]`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={cardRef}
            initial={{
                opacity: 0,
                y: 50,
                scale: 0.9,
                rotateX: 15
            }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0
            } : {}}
            whileHover={{
                y: -12,
                scale: 1.03,
                rotateX: -2,
                boxShadow: [
                    "0 10px 30px rgba(59,130,246,0.3), 0 0 20px rgba(6,182,212,0.2)",
                    "0 20px 60px rgba(59,130,246,0.4), 0 0 40px rgba(6,182,212,0.3), 0 0 0 1px rgba(59,130,246,0.1)"
                ]
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 0.9,
                delay: index * 0.15
            }}
            style={{
                boxShadow: "0 8px 25px rgba(59,130,246,0.15), 0 3px 10px rgba(0,0,0,0.3)"
            }}
        >
            {/* Starfield Background */}
            <div className="absolute inset-0 z-0">
                {Array.from({ length: 40 }).map((_, i) => (
                    <motion.div
                        key={`star-${i}`}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: Math.random() * 2 + 0.5,
                            height: Math.random() * 2 + 0.5,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 3
                        }}
                    />
                ))}
            </div>

            <AnimatePresence>
                {/* Enhanced Space Overlay */}
                {showOverlay && (
                    <motion.div
                        key={"overlay"}
                        className="absolute inset-0 z-20 rounded-xl overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {/* Animated cosmic gradient background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-cyan-900/30"
                            animate={{
                                background: [
                                    "radial-gradient(circle at 20% 50%, rgba(30,58,138,0.3), rgba(88,28,135,0.2), rgba(22,78,99,0.3))",
                                    "radial-gradient(circle at 80% 50%, rgba(88,28,135,0.4), rgba(22,78,99,0.2), rgba(30,58,138,0.3))",
                                    "radial-gradient(circle at 50% 20%, rgba(22,78,99,0.3), rgba(30,58,138,0.2), rgba(88,28,135,0.3))",
                                    "radial-gradient(circle at 50% 80%, rgba(30,58,138,0.4), rgba(88,28,135,0.2), rgba(22,78,99,0.3))",
                                    "radial-gradient(circle at 20% 50%, rgba(30,58,138,0.3), rgba(88,28,135,0.2), rgba(22,78,99,0.3))"
                                ]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        />
                        
                        {/* Enhanced backdrop blur */}
                        <motion.div
                            className="absolute inset-0 backdrop-blur-md bg-slate-900/20"
                            animate={{ 
                                backdropFilter: isHovered ? "blur(15px)" : "blur(0px)",
                            }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Smaller floating cosmic particles */}
                        <div className="absolute inset-0 pointer-events-none">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-0.5 h-0.5 bg-cyan-300 rounded-full opacity-70 shadow-[0_0_4px_rgba(34,211,238,0.8)]"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={isHovered ? {
                                        y: [0, -25, 0],
                                        x: [0, Math.random() * 30 - 15, 0],
                                        opacity: [0.7, 1, 0.7],
                                        scale: [1, 1.3, 1]
                                    } : {}}
                                    transition={{
                                        duration: 3 + Math.random() * 2,
                                        delay: i * 0.1,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>

                        {/* Cosmic energy waves */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{
                                y: isHovered ? 0 : -100,
                                opacity: isHovered ? 1 : 0
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 25,
                                delay: 0.1
                            }}
                        />

                        <div className="w-full h-full flex justify-center items-center relative">
                            {/* Orbital rings around button */}
                            <motion.div
                                className="absolute w-32 h-32 rounded-full border border-cyan-400/20"
                                initial={{ scale: 0, rotate: 0, opacity: 0 }}
                                animate={{
                                    scale: isHovered ? 1 : 0,
                                    rotate: isHovered ? 360 : 0,
                                    opacity: isHovered ? 1 : 0
                                }}
                                transition={{
                                    scale: { type: "spring", stiffness: 300, damping: 20, delay: 0.1 },
                                    rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                                    opacity: { duration: 0.3, delay: 0.1 }
                                }}
                            />
                            
                            <motion.div
                                className="absolute w-40 h-40 rounded-full border border-purple-400/10"
                                initial={{ scale: 0, rotate: 0, opacity: 0 }}
                                animate={{
                                    scale: isHovered ? 1 : 0,
                                    rotate: isHovered ? -360 : 0,
                                    opacity: isHovered ? 1 : 0
                                }}
                                transition={{
                                    scale: { type: "spring", stiffness: 300, damping: 20, delay: 0.15 },
                                    rotate: { duration: 16, repeat: Infinity, ease: "linear" },
                                    opacity: { duration: 0.3, delay: 0.15 }
                                }}
                            />

                            {/* Main cosmic button */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                                animate={{
                                    scale: isHovered ? 1 : 0,
                                    rotate: isHovered ? 0 : -180,
                                    opacity: isHovered ? 1 : 0
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                    delay: 0.2
                                }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <Link
                                    href={link}
                                    className="relative w-28 h-28 bg-gradient-to-br from-cyan-500 to-blue-600 text-white hover:from-blue-500 hover:to-purple-600 shadow-2xl rounded-full flex flex-col justify-center items-center transition-all duration-300 group/btn border-2 border-cyan-400/30 hover:border-cyan-400/60"
                                >
                                    {/* Inner cosmic glow */}
                                    <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-cyan-400/10 rounded-full" />
                                    
                                    {/* Animated icon */}
                                    <motion.div
                                        animate={{ 
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{ 
                                            duration: 2.5, 
                                            repeat: Infinity, 
                                            ease: "easeInOut" 
                                        }}
                                    >
                                        <Eye className="size-6 mb-2 drop-shadow-lg relative z-10" />
                                    </motion.div>
                                    
                                    <span className="text-xs font-bold drop-shadow-md relative z-10 group-hover/btn:text-cyan-100 transition-colors">
                                        Explore
                                    </span>
                                    
                                    {/* Button cosmic glow effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20"
                                        animate={{
                                            boxShadow: [
                                                "0_0_15px_rgba(34,211,238,0.3)",
                                                "0_0_30px_rgba(34,211,238,0.5)",
                                                "0_0_15px_rgba(34,211,238,0.3)"
                                            ]
                                        }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </Link>
                            </motion.div>

                            {/* Smaller cosmic sparkles around button */}
                            {Array.from({ length: 8 }).map((_, i) => (
                                <motion.div
                                    key={`sparkle-${i}`}
                                    className="absolute w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_4px_rgba(34,211,238,0.8)]"
                                    style={{
                                        left: `${50 + 22 * Math.cos((i * Math.PI * 2) / 8)}%`,
                                        top: `${50 + 22 * Math.sin((i * Math.PI * 2) / 8)}%`,
                                    }}
                                    animate={isHovered ? {
                                        scale: [0, 1, 0],
                                        opacity: [0, 1, 0],
                                        rotate: [0, 180, 360]
                                    } : {}}
                                    transition={{
                                        duration: 2.5,
                                        delay: 0.3 + (i * 0.1),
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}

                            {/* Additional smaller sparkles */}
                            {Array.from({ length: 12 }).map((_, i) => (
                                <motion.div
                                    key={`mini-sparkle-${i}`}
                                    className="absolute w-0.5 h-0.5 bg-blue-300 rounded-full shadow-[0_0_2px_rgba(147,197,253,0.8)]"
                                    style={{
                                        left: `${50 + 30 * Math.cos((i * Math.PI * 2) / 12)}%`,
                                        top: `${50 + 30 * Math.sin((i * Math.PI * 2) / 12)}%`,
                                    }}
                                    animate={isHovered ? {
                                        scale: [0, 1.2, 0],
                                        opacity: [0, 0.8, 0],
                                    } : {}}
                                    transition={{
                                        duration: 1.8,
                                        delay: 0.4 + (i * 0.08),
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Enhanced Space Icon */}
            <motion.div
                className="flex items-center justify-center relative w-14 h-14 mb-4 z-[2]"
                initial={{ scale: 0, rotate: 180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: index * 0.15 + 0.3
                }}
                whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg" />
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                    animate={{ 
                        boxShadow: [
                            "0_0_15px_rgba(34,211,238,0.6)", 
                            "0_0_25px_rgba(59,130,246,0.8)", 
                            "0_0_15px_rgba(34,211,238,0.6)"
                        ] 
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                >
                    <Icon className="relative text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] size-7 stroke-[1.5] z-10" />
                </motion.div>
            </motion.div>

            {/* Enhanced Content with Space Theme */}
            <motion.div
                className="flex flex-col gap-4 z-[2]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: index * 0.15 + 0.5,
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1]
                }}
            >
                <div className="space-y-2">
                    <motion.h3 
                        className="text-lg font-semibold leading-tight text-white bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 + 0.7 }}
                    >
                        {title}
                    </motion.h3>
                    <motion.div
                        className="h-0.5 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-500 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ 
                            width: isInView ? "80px" : 0,
                            opacity: isInView ? 1 : 0
                        }}
                        transition={{ 
                            delay: index * 0.15 + 0.8, 
                            duration: 0.8, 
                            ease: "easeOut" 
                        }}
                    />
                </div>
                <motion.p 
                    className="text-sm text-slate-300 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.9 }}
                >
                    {description}
                </motion.p>
            </motion.div>
        </motion.div>
    )
}

export default FeatureCard