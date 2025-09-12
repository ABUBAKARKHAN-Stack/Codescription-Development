"use client";
import React, { useState } from "react";
import { Sheet } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import ContainerLayout from "../layout/ContainerLayout";
import { DesktopNav, MobileMenu } from "@/components/section/navbar";

function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed top-0 right-0 left-0 z-50 mt-2 w-full">
      <ContainerLayout>
        <Sheet open={open} onOpenChange={setOpen}>
          <nav className="xsm:px-10 relative h-18 overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-white/15 via-white/8 to-white/5 px-4 shadow-[0px_0px_12px_rgba(0,0,0,0.1)] backdrop-blur-xl">
            {/* ================ Desktop Nav ===================== */}
            <DesktopNav pathname={pathname} />

            {/* ===================== Mobile Menu ===================== */}
            <MobileMenu setOpen={setOpen} pathname={pathname} />
          </nav>
        </Sheet>
      </ContainerLayout>
    </div>
  );
}

export default Navbar;
