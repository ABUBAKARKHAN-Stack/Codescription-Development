import { Logo } from "@/components/reusable";
import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/data/navItems";
import { cn } from "@/lib/utils";
import { ChevronRight, X } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
import { TbMenu4 } from "react-icons/tb";

type Props = {
  pathname: string;
};

const DesktopNav: FC<Props> = ({ pathname }) => {
  return (
    <div className="flex h-full items-center justify-between">
      {/* Logo Section */}
      <div className="flex h-20 w-auto items-center md:h-24">
        <Logo className="size-full" />
      </div>

      {/* Mobile Menu Toggle */}

      <SheetTrigger className='className="text-white focus:outline-none" flex h-full cursor-pointer items-center justify-center lg:hidden'>
        <TbMenu4 className="size-7" />
      </SheetTrigger>

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
  );
};

export default DesktopNav;
