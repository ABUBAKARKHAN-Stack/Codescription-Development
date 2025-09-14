import { ContainerLayout } from "@/components/layout";
import { SectionHeader } from "@/components/reusable";
import { storyItems } from "@/data/about.data";
import React from "react";

const OurStorySection = () => {
  return (
    <section className="h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <ContainerLayout>
        <SectionHeader mainHeading="Our Story" />

        <div className="mt-10 max-w-4xl space-y-10 text-center md:text-left">
          {storyItems.map(({ title, content }, idx) => (
            <div key={idx} className="relative space-y-4">
              <div className="space-y-2">
                <h3 className="via-primary bg-gradient-to-br from-purple-300 to-purple-300 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                  {title}
                </h3>
                <div className="mx-auto h-0.5 w-16 rounded-full bg-purple-400/60 md:mx-0" />
              </div>
              <p className="text-base leading-relaxed md:text-lg">{content}</p>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default OurStorySection;
