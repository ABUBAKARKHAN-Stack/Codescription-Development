import React from 'react'
import ContainerLayout from '../layout/ContainerLayout'
import { SectionHeader } from '../reusabe'
import { Code, Layers3, LayoutTemplate, Paintbrush, ServerCog, ShoppingCart, Smartphone } from 'lucide-react'

const WhatWeDoSection = () => {

    const whatWeDoData = [
        {
            id: 1,
            title: "Web Development",
            description: "Modern, responsive, and SEO-friendly websites using the latest web technologies.",
            icon: LayoutTemplate,
            bg: "bg-blue-100",
        },
        {
            id: 2,
            title: "App Development",
            description: "High-performance mobile applications tailored for iOS and Android platforms.",
            icon: Smartphone,
            bg: "bg-green-100",
        },
        {
            id: 3,
            title: "Full Stack Development",
            description: "End-to-end application development, from front-end interfaces to scalable back-end APIs.",
            icon: Layers3,
            bg: "bg-purple-100",
        },
        {
            id: 4,
            title: "E-Commerce Solutions",
            description: "From storefront setup to payment integration, we help you sell smarter.",
            icon: ShoppingCart,
            bg: "bg-yellow-100",
        },
        {
            id: 5,
            title: "UI/UX Design",
            description: "Crafting intuitive and beautiful user experiences that engage and convert.",
            icon: Paintbrush,
            bg: "bg-pink-100",
        },
        {
            id: 6,
            title: "DevOps & Automation",
            description: "Streamlining development workflows with CI/CD, monitoring, and cloud automation.",
            icon: ServerCog,
            bg: "bg-slate-100",
        },
    ]

    return (
        <main className=' w-full h-full py-16 md:py-24'>
            <ContainerLayout>
                <SectionHeader
                    mainHeading='Areas of Expertise'
                    subText='We offer end-to-end services to help you grow fast and scale smarter.'
                    animateOnce={false}
                />

                <section className='grid grid-cols-3 place-items-center gap-6 mt-10 w-full'>
                    {
                        whatWeDoData.map(({
                            description,
                            icon: Icon,
                            id,
                            title,
                            bg
                        }) => (
                            <div
                                key={id}
                                className='py-8 px-4 border size-72 rounded-md'
                            >
                                <div className='relative'>
                                    <Icon className='size-8' />
                                    <div className={`absolute ${bg} size-10 rounded-full`}></div>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </ContainerLayout>
        </main>
    )
}

export default WhatWeDoSection