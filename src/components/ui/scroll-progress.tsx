"use client"

import React from 'react'
import {
  useScroll,
  motion
} from 'motion/react'
import { cn } from '@/lib/utils'

type Props = {

}

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className={cn(
        'fixed top-0 inset-x-0 z-50',
        "h-0.5 w-full origin-left",
        "bg-gradient-to-r from-purple-500 via-primary to-purple-500"
      )}
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default ScrollProgress