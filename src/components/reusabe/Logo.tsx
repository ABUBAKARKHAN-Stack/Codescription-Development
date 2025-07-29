"use client"

import { useMounted } from '@/hooks/useMounted';
import { useTheme } from 'next-themes'
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react'

type Props = {
    width?: number;
    height?: number;
    className?: string
}

const Logo: FC<Props> = ({
    width = 155,
    height = 155,
    className
}) => {
    const { resolvedTheme } = useTheme();
    const mounted = useMounted()

    if(!mounted) return null;

    return (
        <Image
            src={resolvedTheme === "light" ? "/assets/light-logo.png" : '/assets/dark-logo.png'}
            width={width}
            height={height}
            alt={resolvedTheme === "dark" ? "Tetracode Logo Dark" : "Tetracode Logo Light"}
            className={`${className}`}
        />
    )
}

export default Logo