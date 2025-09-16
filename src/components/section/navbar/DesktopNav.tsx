"use client";
import { Logo } from "@/components/reusable";
import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/data/navItems";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { TbMenu4 } from "react-icons/tb";

type Props = {
  pathname: string;
};

const DesktopNav: FC<Props> = ({ pathname }) => {
  const { scrollToSection } = useScrollToSection();
  const router = useRouter();

  const handleCTA = () => {
    // if (pathname === "/") {
    //   scrollToSection("#get-in-touch-section")
    //   return;
    // }
    router.push("/contact")
  }
  return (
    <div className="flex h-full items-center justify-between">
      {/* Logo Section */}
      <Logo className="xsm:h-10 h-9 w-auto lg:h-12.5" clickable />

      {/* Mobile Menu Toggle */}

      <SheetTrigger className='className="text-white focus:outline-none" flex h-full cursor-pointer items-center justify-center lg:hidden'>
        <TbMenu4 className="size-7 drop-shadow-[0px_0px_3px_black]" />
      </SheetTrigger>

      {/* Desktop Navigation */}
      <ul className="hidden h-full items-center space-x-3 font-normal text-neutral-50 lg:flex xl:space-x-6">
        {navLinks.map(({ href, icon, name }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");

          return (
            <li
              key={name}
              className="relative flex h-full items-center justify-center"
            >
              <Link
                href={href}
                className={cn(
                  "hover:text-primary text-neutral-50 transition text-shadow-2xs",
                  isActive && "text-neutral-100",
                )}
              >
                {name}
                {isActive && (
                  <span className="bg-primary absolute -top-[3.5px] left-1/2 block h-2 w-[125%] -translate-x-1/2 rounded-full" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button
        className="group hidden cursor-pointer text-base shadow-[0px_0px_10px_rgba(0,0,0,0.2)] duration-300 hover:scale-110 lg:inline-flex"
        size={"lg"}
        onClick={handleCTA}
      >
        Get in Touch
        <ChevronRight className="size-5 scale-90 stroke-[2.5px] transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:rotate-180" />
      </Button>
    </div>
  );
};

export default DesktopNav;
