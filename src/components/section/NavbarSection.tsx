"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "../reusabe";
import { navLinks } from "@/data/navItems";
import { usePathname } from "next/navigation";
import ContainerLayout from "../layout/ContainerLayout";

function NavbarSection() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed top-0 right-0 left-0 w-full z-50 mt-2">
      <ContainerLayout>
        <Sheet open={open} onOpenChange={setOpen}>
          <nav className="bg-transparent h-18 rounded-full px-3 xsm:px-6 shadow-lg backdrop-blur-[15px]">
            <div className="flex h-full items-center justify-between">
              {/* Logo Section */}
              <div className="flex h-28 xsm:h-32 w-auto items-center ">
                <Logo className="size-full" />
              </div>

              {/* Mobile Menu Toggle */}
              <div className="xl:hidden">
                <SheetTrigger>
                  <div className="text-white focus:outline-none">
                    {open ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </div>
                </SheetTrigger>
              </div>

              {/* Desktop Navigation */}
              <ul className="hidden items-center space-x-6 font-normal text-white xl:flex">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`transition ${
                        link.isbutton
                          ? "bg-primary ml-20 rounded-full px-4 py-2 text-white"
                          : `hover:text-primary ${
                              pathname === link.href && "text-primary font-medium"
                            }`
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Navigation Sheet */}
            <SheetContent className="bg-transparent backdrop-blur-xl">
              <div className="overflow-hidden px-4 pb-4 outline-none lg:hidden">
                <ul className="mt-10 flex flex-col p-5 font-medium text-white">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:text-primary block py-2 transition"
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
      </ContainerLayout>
    </div>
  );
}

export default NavbarSection;