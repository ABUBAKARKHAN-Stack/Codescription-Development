"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import ContainerLayout from "@/components/layout/ContainerLayout";
import { aboutUsSectionHeader, ourStats } from "@/data/about.data";
import { SectionHeader } from "@/components/reusable";
import planet from "public/assets/imgs/planet.webp";
import { Button } from "@/components/ui/button";
import { PiRocket } from "react-icons/pi";
import { brandName } from "@/constants/brandname.constants";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function AboutUsSection() {
  const aboutRef = useRef(null);
  const router = useRouter()

  const inView = useInView(aboutRef, {
    margin: "-100px",
    once: true,
  });

  return (
    <section
      ref={aboutRef}
      id="about-us-section"
      className="h-full w-full overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-purple-900 py-16 md:py-24"
    >
      <ContainerLayout>
        <div className="mx-auto flex items-center gap-12 lg:grid lg:grid-cols-2">
          {/* Left Content */}

          <motion.div
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9 }}
            className="space-y-6 text-center lg:text-left"
          >
            <SectionHeader mainHeading={aboutUsSectionHeader.mainHeading} />

            <motion.div
              animate={inView ? {} : { opacity: 0, x: 100 }}
              transition={{ duration: 0.75 }}
              className="mx-auto w-fit lg:hidden"
            >
              <Image
                src={planet}
                className="drop-shadow-[0_0_20px_rgba(168,85,247,1)]"
                alt="software development illustration"
                priority
              />
            </motion.div>

            <p className="text-base leading-relaxed md:text-lg">
              At <span className="font-semibold">{brandName}</span>, we don’t
              just build products, we ignite galaxies of ideas. Every line of
              code, every design detail, and every interaction is crafted to
              feel like charting a new constellation.
            </p>

            <p className="text-base leading-relaxed md:text-lg">
              We see the digital universe as ever-expanding, filled with
              opportunities waiting to be explored. That’s why we blend
              creativity, technology, and vision to launch brands into orbits
              they’ve never reached before. For us, innovation isn’t just a
              destination, it’s the journey through the stars.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {ourStats.map(({ count, label }) => (
                  <div
                    key={label}
                    className="rounded-lg bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <div className="bg-gradient-to-br from-purple-200 via-purple-600 to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
                      {count}
                    </div>
                    <div className="text-secondary-foreground text-sm">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              size={"lg"}
              onClick={() => router.push('/about')}
              className="group overflow-hidden rounded-full !p-7 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-purple-500/25 md:text-lg"
            >
              Learn More About Us
              <div className="relative">
                <PiRocket className="size-5 -translate-y-0 opacity-100 transition-all duration-300 ease-in-out group-hover:-translate-y-20 group-hover:scale-0 group-hover:opacity-0" />
                <PiRocket className="absolute inset-0 size-5 translate-y-20 scale-0 opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-0 group-hover:scale-105 group-hover:opacity-100" />
              </div>
            </Button>
          </motion.div>

          <motion.div
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
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
