'use client'
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from '../reusabe';
import { navLinks } from '@/data/navItems';

function NavbarSection() {
  const [open, setOpen] = useState(false);



  return (
    <Sheet open={open} onOpenChange={setOpen}>

      <div>
        <nav className=" fixed top-0 max-w-full xsm:max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-[1100px] left-0 right-0 z-50 mt-8 shadow-lg bg-transparent backdrop-blur-[15px]  mx-5 lg:mx-auto bord  rounded-full px-5 ">
          <div className="mx-auto py-3 px-2 flex justify-between items-center">
            <Logo
              width={155}
              height={155}
              className='mt-1'
            />
            <div className="lg:hidden">
              <SheetTrigger>
                <div className="text-black dark:text-white focus:outline-none">
                  {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </div>
              </SheetTrigger>
            </div>

            <ul className="hidden lg:flex space-x-6 text-black dark:text-white font-normal">
              {navLinks.map((link) => (
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
                {navLinks.map((link) => (
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