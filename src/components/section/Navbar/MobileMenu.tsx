import { Logo } from "@/components/reusabe/server";
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
      className="border-none bg-transparent px-3 pb-5 backdrop-blur-xl"
    >
      <SheetHeader>
        <SheetTitle className="mt-5 flex items-center">
          <Logo className="h-20 w-auto" />
        </SheetTitle>
        <SheetDescription />
      </SheetHeader>
      <ul className="mt-10 flex flex-col space-y-3 px-3 py-5 font-medium text-white">
        {navLinks.map(({ href, name, icon: Icon }) => {
          return (
            <li key={name}>
              <Link
                href={href}
                className={cn(
                  "hover:text-primary flex items-center gap-3 transition",
                  pathname === href && "text-primary font-medium",
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
