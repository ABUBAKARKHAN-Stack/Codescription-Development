'use client'
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import Link from 'next/link';


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
    <nav className=" fixed top-0 left-0 right-0 z-50 mt-10 lg:max-w-[1300px]  bg-transparent backdrop-blur-[3px] lg:w-[90%] mx-5 lg:mx-auto border-2 border-black rounded-full px-5 ">
      <div className=" mx-auto pl-4  py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 ">MySite</div>

        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-800 focus:outline-none">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <ul className="hidden lg:flex space-x-6 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link  href={link.href} className={`transition ${link.isbutton ? 'bg-primary ml-20  text-white px-4 py-2 rounded-full' : 'hover:text-primary' } `}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-gray-700 font-medium">
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
        </div>
      )}
    </nav>
  );
}

export default NavbarSection