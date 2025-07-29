'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

function ThemeChanger() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  return (
    <div
      className="w-16 h-10 rounded-full fixed z-50 bottom-20 shadow-[0px_0px_10px_#994AF2] border-1 border-primary/50 right-5 cursor-pointer bg-gradient-to-b to-primary/75 from-primary via-primary/75 p-1 flex items-center"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      <motion.button
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`absolute top-1 left-1 ${resolvedTheme === 'dark' ? 'translate-x-[75%]' : ''
          } w-8 h-8 rounded-full cursor-pointer bg-primary-foreground backdrop-blur-sm shadow-md flex items-center justify-center`}
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.1 }}
            >
              <Moon size={18} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -180 }}
              transition={{ duration: 0.1 }}
            >
              <Sun size={18} className="text-yellow-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

export default ThemeChanger