import { ContainerLayout } from '@/components/layout'
import { SectionHeader } from '@/components/reusable'
import Image from 'next/image'
import webdev from '../../../../public/assets/imgs/webDev.svg'
import React from 'react'

function FeaturedServiceSection() {

    const SignatureServiceContent = [
        "The web is more than a platform — it’s the front door to your brand, the space where first impressions are made and lasting connections begin. That’s why we treat every project not just as a build, but as an experience.",
        "From sleek, responsive designs to seamless functionality, we craft web solutions that balance creativity with performance. we engineer sites that are intuitive, fast, secure, and built to grow with you.",
        "Whether it’s a bold new website, a powerful web application, or a complete digital ecosystem, our expertise ensures that your presence online isn’t just seen — it’s remembered.",
        "This is where your vision meets our craft — and together, we make it unforgettable."
    ]

    return (
        <section
            className="h-full w-full relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
                 <Image src={webdev} className='absolute z-0 opacity-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' alt='web image' /> 

            <ContainerLayout>
                <div className='relative z-50'>
                   <SectionHeader mainHeading='Our Signature Service' />
                <h1 className='font-extrabold text-6xl my-10 text-center'>Web Development</h1>
                <div className='space-y-10  '>
             {
                SignatureServiceContent.map((content,index)=>(
                    <div className='text-3xl text-center ' key={index}>
                        <p>{content}</p>
                    </div>

                ))
             }
                </div>  
                </div>
               
            


            </ContainerLayout>
        </section>
    )
}

export default FeaturedServiceSection