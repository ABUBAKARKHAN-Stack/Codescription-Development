import { ContainerLayout } from "@/components/layout";
import { PageHeader } from "@/components/reusabe/server";
import ShootingStars from "@/components/ui/shootingStars";
import { brandName, browserSupportStyles } from "@/constants/style.constants";
import React, { FC } from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-full min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 py-24"
      style={{ backgroundImage: browserSupportStyles.bg }}
    >
      <ContainerLayout>
        <PageHeader pageHeading={`About ${brandName}`} />
        About PAGE
      </ContainerLayout>
    </section>
  );
};

export default HeroSection;
