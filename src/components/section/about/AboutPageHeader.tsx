"use client";
import { PageHeader } from "@/components/reusable";
import { Button } from "@/components/ui/button";
import { brandName } from "@/constants/brandname.constants";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Sparkles } from "lucide-react";

const AboutPageHeader = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <PageHeader
      pageHeading={`About ${brandName}`}
      subText="Our journey is just one small step, into a bigger universe of possibilities."
    >
      <Button
        size={"lg"}
        onClick={() => scrollToSection("#what-we-do")}
        className="font-orbitron rounded-full bg-white/5 !p-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-purple-500/25"
      >
        Explore Who We Are <Sparkles className="size-5" />
      </Button>
    </PageHeader>
  );
};

export default AboutPageHeader;
