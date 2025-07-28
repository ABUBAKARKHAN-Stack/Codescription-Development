'use client'
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import Link from 'next/link';
import { AnimatePresence,motion } from 'motion/react';


function NavbarSection() {
   const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contactus',isbutton: true },
  ];

  return (
    <div>
    <nav className=" fixed top-0 left-0 right-0 z-50 mt-10 lg:max-w-[1300px]  bg-transparent backdrop-blur-[10px] lg:w-[90%] mx-5 lg:mx-auto border-2 border-black rounded-full px-5 ">
      <div className=" mx-auto pl-4  py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 ">MySite</div>

        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)} className="text-black dark:text-white focus:outline-none">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <ul className="hidden lg:flex space-x-6 text-black dark:text-white font-normal">
          {links.map((link) => (
            <li key={link.name}>
              <Link  href={link.href} className={`transition ${link.isbutton ? 'bg-primary ml-20  text-white px-4 py-2 rounded-full' : 'hover:text-primary' } `}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    
    </nav>
    <nav>
  {/* Mobile Menu */}
     <AnimatePresence>
  {open && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="lg:hidden px-4 pb-4 overflow-hidden"
    >
      <ul className="flex flex-col space-y-3 text-black dark:text-white font-medium">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="block hover:text-blue-500 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
    
    </div>
  );
}

export default NavbarSection