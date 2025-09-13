import { Logo } from "@/components/reusable";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/navItems";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { Dispatch, FC, SetStateAction } from "react";

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  pathname: string;
};

const MobileMenu: FC<Props> = ({ pathname, setOpen }) => {
  return (
    <SheetContent
      side="left"
      className="border border-white/10 bg-gradient-to-r from-white/15 via-white/8 to-white/5 px-3 pb-5 backdrop-blur-xl"
    >
      <SheetHeader>
        <SheetTitle className="mt-5 flex items-center">
          <Logo className="xsm:h-10 h-9 w-auto lg:h-12.5" />
        </SheetTitle>
        <SheetDescription />
      </SheetHeader>
      <ul className="mt-10 flex flex-col space-y-3 px-3 py-5 text-white">
        {navLinks.map(({ href, name, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");
          return (
            <li key={name}>
              <Link
                href={href}
                className={cn(
                  "hover:text-primary flex items-center gap-3 transition-colors",
                  isActive && "text-primary font-medium",
                )}
                onClick={() => setOpen(false)}
              >
                <Icon size={20} />
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </SheetContent>
  );
};

export default MobileMenu;
