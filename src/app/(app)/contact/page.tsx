import {
  ContactHeroSection,
  ContactSection,
  FAQSection,
  SecondaryCtaSection,
  SupportHighlightSection,
} from "@/components/section/contact";
import { brandName } from "@/constants/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Connect with ${brandName} to discuss your project or get support. Reach our team, explore FAQs, and let’s build innovative software solutions together.`,
};

function page() {
  return (
    <div>
      <ContactHeroSection />
      <ContactSection />
      <SupportHighlightSection />
      <SecondaryCtaSection />
      <FAQSection />
    </div>
  );
}

export default page;
