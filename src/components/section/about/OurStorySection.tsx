"use client";
import { ContainerLayout } from "@/components/layout";
import { SectionHeader } from "@/components/reusable";
import Particles from "@/components/ui/particles";
import { storyItems } from "@/data/about.data";
import { cn } from "@/lib/utils";
import {
  motion
} from 'motion/react'

const OurStorySection = () => {

  return (
    <section
      id="about-our-story-section"
      className="h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16"
    >
      <ContainerLayout>
        <SectionHeader mainHeading="Our Cosmic Story" />
        <section className="mt-10 w-full space-y-10">
          {storyItems.map(
            ({ title, content, icon: Icon, illustration }, idx) => {

              const isEven = idx % 2 == 0 ? true : false;
              const { key, svg: SVG } = illustration;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: idx * 0.08,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                  }}
                  className="group relative space-y-8"
                >
                  {/* Header */}
                  <div className="relative z-10 mb-12">
                    <div className="mb-4 flex items-center justify-center gap-4 md:justify-start">
                      <div className="relative">

                        {/* Icon */}
                        <span className="flex items-center justify-center rounded-xl bg-white/10 p-2 xsm:p-3 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                          <Icon className="size-5.5 xsm:size-7 text-white/90" />
                        </span>

                        {/* Animated ring */}
                        <div className="absolute inset-0 animate-pulse rounded-xl border border-white/20" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl xsm:text-3xl font-bold tracking-tight text-white md:text-4xl xl:text-5xl">
                          {title}
                        </h3>
                        <div className="h-0.5 xsm:h-1 w-14 xsm:w-20 origin-left transform rounded-full bg-gradient-to-r from-white via-neutral-400 to-white transition-transform duration-500 group-hover:scale-x-125" />
                      </div>
                    </div>
                  </div>

                  {/* Content + Illustration */}
                  <div
                    className={cn(
                      "relative z-10 mx-auto max-w-7xl px-4",
                      "flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16",
                      isEven ? "lg:flex-row-reverse" : "lg:flex-row",
                    )}
                  >
                    <div className="flex-1 space-y-6">
                      <p className="text-sm xsm:text-lg leading-relaxed font-light tracking-wide text-white/90 md:text-xl xl:text-2xl">
                        {content}
                      </p>
                    </div>

                    <div
                      className={cn(
                        "relative flex-shrink-0 rounded-full",
                        key === "DeepThinkerIllustration"
                          ? "bg-white/5"
                          : "bg-transparent",
                      )}
                    >
                      <div className="relative size-full min-[300px]:size-72 xsm:size-80 md:size-96 lg:size-[400px]">
                        <div className="relative z-10 transform transition-all duration-500 group-hover:scale-105">
                          <SVG className="size-full drop-shadow-2xl" />
                        </div>
                        <Particles
                          particlesCount={20}
                          particlesStyles="size-[6px] opacity-5"
                          className="absolute inset-0 z-10 overflow-hidden rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {idx < storyItems.length - 1 && (
                    <div className="mt-16 flex justify-center">
                      <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    </div>
                  )}
                </motion.div>
              );
            },
          )}
        </section>
      </ContainerLayout>
    </section>
  );
};

export default OurStorySection;
