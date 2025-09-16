import { ContainerLayout } from '@/components/layout'
import { SectionHeader } from '@/components/reusable'
import Image from 'next/image'
import webdev from '../../../../public/assets/imgs/webDev.svg'
import React from 'react'
import WebSvg from '@/components/ui/websvg'

function FeaturedServiceSection() {

    const SignatureServiceContent = [
        "The web is more than a platform — it's the front door to your brand, the space where first impressions are made and lasting connections begin. That's why we treat every project not just as a build, but as an experience.",
        "From sleek, responsive designs to seamless functionality, we craft web solutions that balance creativity with performance. we engineer sites that are intuitive, fast, secure, and built to grow with you.",
        "Whether it's a bold new website, a powerful web application, or a complete digital ecosystem, our expertise ensures that your presence online isn't just seen — it's remembered.",
        "This is where your vision meets our craft — and together, we make it unforgettable."
    ]

    return (
        <section className="h-full w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24">
            
            <div className='absolute animate-pulse hidden lg:block z-0 opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <WebSvg />
            </div>

            <ContainerLayout>
                <div className='relative z-30'>
                    <SectionHeader mainHeading='Our Signature Service' />
                    
                    <h1 className='font-extrabold text-4xl lg:text-7xl my-16 text-center text-white tracking-tight'>
                        Web Development
                    </h1>
                    
                    <div className=' flex items-center justify-between gap-10  mx-auto'>
                        <div className='space-y-12 lg:space-y-5  lg:max-w-[500px]'>
                        {SignatureServiceContent.map((content, index) => (
                            <div className='lg:text-left lg:text-base xl:text-[20px] md:text-[20px] text-center leading-relaxed text-gray-300' key={index}>
                                <p>{content}</p>

                                {
                                    index === 1 && (
                                        <div className='lg:hidden my-6 flex justify-center'>
                                            <WebSvg />
                                        </div>
                                    )
                                }
                            </div>
                        ))}
                        </div>
                        <div className='hidden lg:block'>
                <WebSvg />
                        </div>
                    </div>  
                </div>
            </ContainerLayout>
        </section>
    )
}

export default FeaturedServiceSection