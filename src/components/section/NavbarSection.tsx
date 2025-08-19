"use client";
import { ArrowRightCircle, ChevronRight, Menu, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "../reusabe";
import { navLinks } from "@/data/navItems";
import { usePathname } from "next/navigation";
import ContainerLayout from "../layout/ContainerLayout";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

function NavbarSection() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed top-0 right-0 left-0 z-50 mt-2 w-full">
      <ContainerLayout className="lg:px-10">
        <Sheet open={open} onOpenChange={setOpen}>
          <nav className="xsm:px-6 h-18 rounded-full bg-transparent px-3 shadow-lg backdrop-blur-[15px]">
            <div className="flex h-full items-center justify-between">
              {/* Logo Section */}
              <div className="flex h-20 w-auto items-center md:h-24">
                <Logo className="size-full" />
              </div>

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden">
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
              <ul className="hidden items-center space-x-3 font-normal text-white lg:flex xl:space-x-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "hover:text-primary transition",
                        pathname === link.href && "text-primary font-medium",
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button
                className="group hidden cursor-pointer text-base duration-300 hover:scale-110 lg:inline-flex"
                size={"lg"}
              >
                Get in Touch
                <ChevronRight className="size-5 scale-90 stroke-[2.5px] transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:rotate-180" />
              </Button>
            </div>

            {/* Mobile Navigation Sheet */}
            <SheetContent className="border-none bg-transparent backdrop-blur-xl">
              <div className="overflow-hidden px-4 pb-4 outline-none lg:hidden">
                <SheetTitle className="mt-5 flex items-center">
                  <Logo className="h-20 w-auto" />
                </SheetTitle>
                <ul className="mt-10 flex flex-col p-5 font-medium text-white">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={cn(
                          "hover:text-primary transition",
                          pathname === link.href && "text-primary font-medium",
                        )}
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
