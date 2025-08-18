import ContainerLayout from "./ContainerLayout";
import {
  FooterCopyRight,
  FooterSocial,
  FooterTop,
} from "@/components/section/footer";

import React from "react";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="relative bg-transparent pt-12 pb-4">
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/100 to-black/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]"></div>

      <ContainerLayout className="relative h-full w-full space-y-10">
        {/* === Main Footer Section === */}
        <FooterTop />

        {/* === Separator === */}
        <Separator />

        {/* === Social Media Section === */}
        <FooterSocial />

        {/* === Separator === */}
        <Separator />

        {/* === Copyright Section === */}
        <FooterCopyRight />
      </ContainerLayout>
    </footer>
  );
};

export default Footer;
