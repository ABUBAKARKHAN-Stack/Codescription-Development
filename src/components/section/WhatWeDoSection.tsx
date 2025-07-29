"use client"
import React, { useState } from 'react'
import ContainerLayout from '../layout/ContainerLayout'
import { SectionHeader } from '../reusabe'
import { Code, Eye, Layers3, LayoutTemplate, Paintbrush, ServerCog, ShoppingCart, Smartphone } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import { BlurFade } from '../magicui/blur-fade'

const WhatWeDoSection = () => {

    const whatWeDoData = [
        {
            id: 1,
            title: "Web Development",
            description:
                "Build fast, responsive, and SEO-friendly websites tailored to your brand and goals.",
            icon: LayoutTemplate,
            link: "/services/web-development",
        },
        {
            id: 2,
            title: "App Development",
            description:
                "Create high-performance mobile apps designed for seamless use on iOS and Android devices.",
            icon: Smartphone,
            link: "/services/app-development",
        },
        {
            id: 3,
            title: "Full Stack Development",
            description:
                "Deliver complete applications with robust backends and intuitive frontend experiences.",
            icon: Layers3,
            link: "/services/full-stack-development",
        },
        {
            id: 4,
            title: "E-Commerce Solutions",
            description:
                "Develop secure, scalable online stores with smooth checkout and payment integration.",
            icon: ShoppingCart,
            link: "/services/e-commerce",
        },
        {
            id: 5,
            title: "UI/UX Design",
            description:
                "Design visually engaging and user-friendly interfaces that boost interaction and retention.",
            icon: Paintbrush,
            link: "/services/ui-ux-design",
        },
        {
            id: 6,
            title: "DevOps & Automation",
            description:
                "Automate deployment and monitoring with CI/CD pipelines and modern cloud infrastructure.",
            icon: ServerCog,
            link: "/services/devops-automation",
        },
    ];

    const [isCardHovered, setIsCardHovered] = useState({
        id: 0,
    })

    const handleCardHover = (id: number) => {
        setIsCardHovered(() => ({
            id,
        }))
    }

    return (
        <main className=' w-full h-full py-16 md:py-24'>
            <ContainerLayout>
                <SectionHeader
                    mainHeading='Areas of Expertise'
                    subText='We offer end-to-end services to help you grow fast and scale smarter.'
                    animateOnce={true}
                />

                <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 w-full'>
                    {whatWeDoData.map(({ id, title, description, icon: Icon, link }) => (
                        <div
                            key={id}
                            className="relative group border rounded-xl h-80 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 px-6 py-8 flex flex-col justify-between"
                            onMouseEnter={() => handleCardHover(id)}
                            onMouseLeave={() => setIsCardHovered({ id: 0 })}
                        >
                            {/* Overlay */}
                            <motion.div
                                className="absolute inset-0 z-20 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-xl"
                                animate={{
                                    y: isCardHovered.id === id ? 0 : -350,
                                    backdropFilter: isCardHovered.id === id ? "blur(10px)" : "blur(0px)",
                                }}
                                transition={{
                                    type: "tween",
                                    ease: "linear",
                                    duration: 0.2,
                                }}
                            >
                                <div className="size-full flex justify-center items-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: isCardHovered.id === id ? 1 : 0 }}
                                        transition={{ duration: 0.2, delay: 0.2, ease: "easeInOut" }}
                                    >
                                        <Link
                                            href={link}
                                            className="p-2 w-28 h-28 transition-colors duration-200 bg-white text-black hover:bg-black shadow-md border-2 hover:text-white rounded-full flex flex-col justify-center items-center"
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
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        </div>

                    ))}
                </section>
            </ContainerLayout>
        </main>
    )
}

export default WhatWeDoSection