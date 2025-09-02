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
      <ContainerLayout className="lg:px-10">
        <Sheet open={open} onOpenChange={setOpen}>
          <nav className="xsm:px-6 h-18 rounded-full bg-transparent px-3 shadow-lg backdrop-blur-[15px]">
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
