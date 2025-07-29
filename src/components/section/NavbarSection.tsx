'use client'
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
import { useTheme } from 'next-themes';

function NavbarSection() {
  const [open, setOpen] = useState(false);

  const {theme} = useTheme()

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contactus', isbutton: true },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>


      <div>
        <nav className=" fixed top-0 left-0 right-0 z-50 mt-10 lg:max-w-[1300px]  bg-transparent backdrop-blur-[10px] lg:w-[90%] mx-5 lg:mx-auto border-2  rounded-full px-5 ">
          <div className=" mx-auto pl-4  py-3 flex justify-between items-center">
            <Image
              src={theme === 'light' ? '/assets/light-logo.png' : '/assets/dark-logo.png'}
              width={100}
              height={100}
              alt='logo light'
            />
            <div className="lg:hidden">
              <SheetTrigger>
                <div className="text-black dark:text-white focus:outline-none">
                  {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </div>
              </SheetTrigger>
            </div>

            <ul className="hidden lg:flex space-x-6 text-black dark:text-white font-normal">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={`transition ${link.isbutton ? 'bg-primary ml-20  text-white px-4 py-2 rounded-full' : 'hover:text-primary'} `}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <SheetContent 
          className='bg-transparent backdrop-blur-xl'
          >
            <div
              className="lg:hidden px-4 pb-4 overflow-hidden outline-none"
            > 
              <ul className="flex flex-col p-5 mt-10 text-black dark:text-white font-medium">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block hover:text-primary transition"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </SheetContent>


        </nav>


      </div>
    </Sheet>
  );
}

export default NavbarSection