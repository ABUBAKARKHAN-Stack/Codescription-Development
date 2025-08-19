"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContainerLayout from "../layout/ContainerLayout";
import { AboutUsSectionHeader } from "@/data/about.data";
import { SectionHeader } from "../reusabe";
import planet from "../../../public/assets/imgs/planet.png";

export default function AboutUsSection() {
  return (
    <main className="h-full w-full overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-purple-900 py-16">
      <ContainerLayout>
        <div className="mx-auto flex items-center gap-12 lg:grid lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left"
          >
            <SectionHeader
              mainHeading={AboutUsSectionHeader.mainHeading}
              animateOnce={true}
            />

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              className="mx-auto w-fit lg:hidden"
            >
              <Image
                src={planet}
                className="drop-shadow-[0_0_20px_rgba(168,85,247,1)]"
                alt="planet image"
                priority
              />
            </motion.div>

            <p className="mt-6 text-lg leading-relaxed md:text-xl">
              At [Your Startup Name], we don’t just build products — we ignite
              galaxies of ideas. Every line of code, every design detail, and
              every interaction is crafted to feel like charting a new
              constellation.
            </p>

            <p className="mt-4 text-lg leading-relaxed md:text-xl">
              We see the digital universe as ever-expanding, filled with
              opportunities waiting to be explored. That’s why we blend
              creativity, technology, and vision to launch brands into orbits
              they’ve never reached before. For us, innovation isn’t just a
              destination — it’s the journey through the stars.
            </p>

            <button
              //   onClick={() => useScrollToSection("#what-we-do")}
              className="group relative mx-auto mt-10 flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-purple-600 hover:shadow-purple-500/25 md:text-lg lg:mx-0"
            >
              Getting Started
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="hidden lg:block"
          >
            <Image
              src={planet}
              className="drop-shadow-[0_0_20px_rgba(168,85,247,1)]"
              alt="planet image"
            />
          </motion.div>
        </div>
      </ContainerLayout>
    </main>
  );
}
