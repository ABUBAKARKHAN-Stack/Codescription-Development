"use client";
import { PageHeader } from "@/components/reusable";
import { Button } from "@/components/ui/button";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Sparkles } from "lucide-react";

const ServicesHero = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <PageHeader
      pageHeading={`Codescription Services`}
      subText="Where ideas find their shape."
    >
      <Button
        size={"lg"}
        onClick={() => scrollToSection("#what-we-do-section")}
        className="font-orbitron bg-primary/10 rounded-full !p-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-purple-500/25"
      >
        Explore Our Services <Sparkles className="size-5" />
      </Button>
    </PageHeader>
  );
};

export default ServicesHero;
