import React from 'react'
import { SectionHeader } from '../reusabe'
import ContainerLayout from '../layout/ContainerLayout'

const WhyChooseTetraCodeSection = () => {
    return (
        <div className=' w-full h-full'>
            <ContainerLayout>
                <section className='mt-10'>
                    <SectionHeader
                        mainHeading='Why Our Clients Trust Us'
                        subText='Our code is clean, our communication is clear, and our delivery is fast.'
                        animateOnce={false}
                    />
                </section>
            </ContainerLayout>
        </div>
    )
}

export default WhyChooseTetraCodeSection