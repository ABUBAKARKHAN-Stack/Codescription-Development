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
        <div className='flex flex-col gap-y-4 relative w-fit'>
            <BlurFade
                direction="down" once={animateOnce} delay={0.25} inView
            >
                <h1 className='text-5xl font-sigmar'>
                    {mainHeading}
                </h1>
            </BlurFade>
            <BlurFade
                direction="down" once={animateOnce} delay={0.25 * 2} inView

            >
                <p className='font-poppins'>
                    {subText}
                </p>
            </BlurFade>
        </div>
    )
}

export default SectionHeader