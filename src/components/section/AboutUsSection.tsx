"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContainerLayout from "../layout/ContainerLayout";
import { AboutUsSectionHeader } from "@/data/about.data";
import { SectionHeader } from "../reusabe";
import planet from "../../../public/assets/imgs/planet.png";
import { Button } from "../ui/button";

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

            <Button
             size={'lg'}
             className="mt-10 rounded-full text-lg py-6.5"
            >
              Getting Started
          
            </Button>
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
