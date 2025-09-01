"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContainerLayout from "@/components/layout/ContainerLayout";
import { AboutUsSectionHeader } from "@/data/about.data";
import { SectionHeader } from "@/components/reusabe/server";
import planet from "public/assets/imgs/planet.webp";
import { Button } from "@/components/ui/button";
import { brandName, browserSupportStyles } from "@/constants/style.constants";
import { PiRocket } from "react-icons/pi";

// from-slate-950 via-purple-950 to-slate-900
export default function AboutUsSection() {
  return (
    <section
      className="h-full w-full overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-purple-900 py-16 md:py-24"
      // style={{ backgroundImage: browserSupportStyles.backgroundkit }}
    >
      <ContainerLayout>
        <div className="mx-auto flex items-center gap-12 lg:grid lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6 text-center lg:text-left"
          >
            <SectionHeader mainHeading={AboutUsSectionHeader.mainHeading} />

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

            <p className="text-base leading-relaxed md:text-lg">
              At <span className="font-semibold">{brandName}</span>, we don’t
              just build products — we ignite galaxies of ideas. Every line of
              code, every design detail, and every interaction is crafted to
              feel like charting a new constellation.
            </p>

            <p className="text-base leading-relaxed md:text-lg">
              We see the digital universe as ever-expanding, filled with
              opportunities waiting to be explored. That’s why we blend
              creativity, technology, and vision to launch brands into orbits
              they’ve never reached before. For us, innovation isn’t just a
              destination — it’s the journey through the stars.
            </p>

            <Button
              size={"lg"}
              className="rounded-full !p-7 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-purple-500/25 md:text-lg"
            >
              Getting Started <PiRocket className="size-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative hidden lg:block"
          >
            <Image
              src={planet}
              className="mx-auto drop-shadow-[0_0_20px_rgba(168,85,247,1)]"
              width={500}
              height={500}
              alt="planet image"
            />
          </motion.div>
        </div>
      </ContainerLayout>
    </section>
  );
}
