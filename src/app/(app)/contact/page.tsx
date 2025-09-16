
import { ContactHeroSection, ContactSection, FAQSection, SecondaryCtaSection, SupportHighlightSection } from "@/components/section/contact";
// import { ContactSection } from "@/components/section/landing";
import React from "react";

function page() {
  return <div>
    <ContactHeroSection />
    <ContactSection />
    <SupportHighlightSection />
    <SecondaryCtaSection />
    <FAQSection />
  </div>;
}

export default page;
