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
    <footer className="relative border-t-2 border-dotted bg-transparent pt-12 pb-4">
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/100 to-black/50"></div>
      <div className="animate-custom-pulse absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05),transparent),linear-gradient(to_left,rgba(255,255,255,0.05),transparent),radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_50%)] [--duration:5s]"></div>

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
