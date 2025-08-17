'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Star {
  id: number
  startX: number
  startY: number
  endX: number
  endY: number
  delay: number
  duration: number
  size: number
  angle: number
}

const ShootingStars = () => {
  const [stars, setStars] = useState<Star[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])
  useEffect(() => {
    const generateStars = () => {
      if (!dimensions.width || !dimensions.height) return
      
      const newStars: Star[] = []
      for (let i = 0; i < 3; i++) { // Reduced from 5 to 3
        // Create realistic diagonal shooting trajectory
        const angle = 25 + Math.random() * 20 // 25-45 degree angle
        const startX = -50 - Math.random() * 100 // Start from off-screen left
        const startY = Math.random() * (dimensions.height * 0.6) // Top 60% of screen
        
        // Calculate travel distance for realistic arc
        const travelDistance = dimensions.width + 300
        const endX = startX + travelDistance
        const endY = startY + (travelDistance * Math.tan(angle * Math.PI / 180))
        
        newStars.push({
          id: Date.now() + i, // Unique ID based on timestamp
          startX,
          startY,
          endX,
          endY,
          delay: i * 3 + Math.random() * 2, // Staggered delays: 0-2s, 3-5s, 6-8s
          duration: 1.5 + Math.random() * 1, // More consistent speed
          size: 2 + Math.random() * 1.5, // Consistent size range
          angle
        })
      }
      setStars(newStars)
    }

    // Initial generation with slight delay to ensure dimensions are set
    const initialTimeout = setTimeout(() => generateStars(), 100)
    const interval = setInterval(generateStars, 12000) // Regenerate every 12s
    
    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [dimensions])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={`${star.id}-${star.startX}`}
          className="absolute"
          style={{
            left: star.startX,
            top: star.startY,
          }}
          initial={{ 
            x: 0, 
            y: 0, 
            opacity: 0,
          }}
          animate={{
            x: star.endX - star.startX,
            y: star.endY - star.startY,
            opacity: [0, 0.8, 1, 0.8, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 9, // Reduced repeat delay
            ease: [0.25, 0.46, 0.45, 0.94], // Realistic easing
            times: [0, 0.1, 0.5, 0.9, 1], // Better opacity timing
          }}
        >
          {/* Optimized glowing core */}
          <div 
            className="bg-white rounded-full will-change-transform"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8), 0 0 ${star.size * 4}px rgba(135, 206, 250, 0.3)`,
            }}
          />
          
          {/* Optimized trail */}
          <div
            className="absolute top-1/2 origin-right will-change-transform"
            style={{
              right: `${star.size/2}px`,
              width: `${40 + star.size * 6}px`,
              height: `${Math.max(1, star.size * 0.3)}px`,
              transform: `translateY(-50%) rotate(${star.angle}deg)`,
              background: `linear-gradient(to right, transparent, rgba(255,255,255,0.4), rgba(255,255,255,0.8))`,
              borderRadius: '50px',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ShootingStars