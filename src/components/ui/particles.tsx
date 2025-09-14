import { cn } from '@/lib/utils';
import React, { FC } from 'react'

type Props = {
    className?: string;
    particlesCount?: number;
    particlesStyles?: string;
}

const Particles: FC<Props> = ({
    className,
    particlesCount = 50,
    particlesStyles
}) => {
    return (
        <div className={cn(
            "absolute inset-0",
            className
        )}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(158,104,254,0.1),transparent_50%)]"></div>
            {[...Array(particlesCount)].map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        "absolute h-1 w-1 animate-pulse rounded-full bg-purple-400",
                        particlesStyles
                    )}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 3}s`,
                    }}
                />
            ))}
        </div>
    )
}

export default Particles