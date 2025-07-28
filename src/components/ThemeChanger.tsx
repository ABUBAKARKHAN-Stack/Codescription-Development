'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import {AnimatePresence, motion} from 'framer-motion'

function ThemeChanger() {
    const {theme, setTheme, resolvedTheme} = useTheme()
  return (
      <div
      className="w-16 h-10 rounded-full fixed z-50 bottom-20 right-5 cursor-pointer bg-slate-700  dark:from-zinc-700 dark:to-zinc-900 p-1 flex items-center"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
       <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`absolute top-1 left-1 ${
          resolvedTheme === 'dark' ? 'translate-x-[75%]' : ''
        } w-8 h-8 rounded-full bg-white dark:bg-zinc-900 backdrop-blur-sm shadow-md flex items-center justify-center`}
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.4 }}
            >
              <Moon size={18} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -180 }}
              transition={{ duration: 0.4 }}
            >
              <Sun size={18} className="text-yellow-500" />
            </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default ThemeChanger