import { ContainerLayout } from "@/components/layout";
import { SectionHeader } from "@/components/reusable";
import { values } from "@/data/about.data";
import React from "react";

const OurPrinciplesSection = () => {
  return (
    <section className="h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <ContainerLayout>
        <SectionHeader mainHeading="Our Guiding Principles" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="group rounded-xl bg-white/5 p-6 text-center shadow-md backdrop-blur-sm transition duration-300 hover:shadow-purple-500/20"
            >
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-lg font-semibold text-purple-200 transition group-hover:text-white">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default OurPrinciplesSection;
