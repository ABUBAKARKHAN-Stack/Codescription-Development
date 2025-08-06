import React, { FC } from 'react'
import { BlurFade } from '../magicui/blur-fade';

type Props = {
    mainHeading: string;
    subText: string;
    animateOnce?: boolean
}

const SectionHeader: FC<Props> = ({
    mainHeading,
    subText,
    animateOnce = false
}) => {
    return (
        <div className='flex w-full justify-center items-center flex-col gap-y-4 relative'>
            <BlurFade
                direction="down" once={animateOnce} delay={0.25} inView
                blur='20px'
            >
                <h1 className='lg:text-6xl md:text-5xl text-4xl tracking text-wrap text-center font-sans font-bold'>
                    {mainHeading}
                </h1>
            </BlurFade>
            <BlurFade
                direction="down" once={animateOnce} delay={0.25 * 2} inView
                blur='10px'

            >
                <p className='font-poppins mx-auto text-primary font-normal text-sm md:text-base max-w-[90%] leading-relaxed text-wrap text-center xl:text-xl mb-6'>
                    {subText}
                </p>
            </BlurFade>
        </div>
    )
}

export default SectionHeader