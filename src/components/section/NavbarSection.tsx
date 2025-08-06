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
import { usePathname } from 'next/navigation';

function NavbarSection() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <nav className="fixed top-0 h-18 mx-10 lg:w-[95%] lg:max-w-[1100px] left-0 right-0 z-50 mt-8 shadow-lg bg-transparent backdrop-blur-[15px] lg:mx-auto rounded-full px-6">
        <div className="mx-auto h-full px-2 flex justify-between items-center">
          <div className="h-33 w-auto flex items-center">
            <Logo className='h-full w-auto object-contain'/>
          </div>

          <div className="lg:hidden">
            <SheetTrigger>
              <div className="text-black dark:text-white focus:outline-none">
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </SheetTrigger>
          </div>

          <ul className="hidden lg:flex space-x-6 text-black dark:text-white font-normal items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={`transition ${link.isbutton ? 'bg-primary ml-20 text-white px-4 py-2 rounded-full' : `hover:text-primary ${pathname === link.href && "text-primary font-medium"}`}  `}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <SheetContent className='bg-transparent backdrop-blur-xl'>
          <div className="lg:hidden px-4 pb-4 overflow-hidden outline-none">
            <ul className="flex flex-col p-5 mt-10 text-black dark:text-white font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block hover:text-primary transition py-2"
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
    </Sheet>
  );
}

export default NavbarSection