"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import { ArrowLeftCircle, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ContainerLayout } from "@/components/layout";

const ComingSoonSection = () => {
  const router = useRouter();

  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 py-16 md:py-24">
      <ContainerLayout>
        <div className="relative z-20 flex flex-col items-center justify-center space-y-8 pt-20 lg:space-y-12">
          {/* Title Section */}
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-audiowide relative text-3xl font-bold tracking-wide uppercase min-[320px]:text-4xl min-[450px]:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #9333ea",
                    "0 0 20px #9333ea, 0 0 40px #a855f7, 0 0 60px #7e22ce",
                    "0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #9333ea",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="leading-tight text-white"
              >
                Portfolio
              </motion.span>
            </motion.h1>

            {/* Coming Soon Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 md:mt-8"
            >
              <h2 className="text-xl font-semibold tracking-wider text-purple-200 uppercase md:text-2xl lg:text-3xl">
                Coming Soon
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-300 md:text-base lg:text-lg">
                Our Innovative Projects Are Coming Soon! Stay Tuned for
                Cutting-Edge Software Solutions & Achievements.
              </p>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size={"lg"}
              onClick={() => router.push("/")}
              className="group overflow-hidden rounded-full !p-7 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-purple-500/25 md:text-lg"
            >
              Return Home
              <div className="relative">
                <Home className="size-5 -translate-y-0 opacity-100 transition-all duration-300 ease-in-out group-hover:-translate-y-20 group-hover:scale-0 group-hover:opacity-0" />
                <Home className="absolute inset-0 size-5 translate-y-20 scale-0 opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-0 group-hover:scale-105 group-hover:opacity-100" />
              </div>
            </Button>
            <Button
              variant={"outline"}
              onClick={() => router.back()}
              className="hover:shadow-input/85 rounded-full !p-7 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer md:text-lg"
            >
              <ArrowLeftCircle className="size-5 scale-105" /> Go Back
            </Button>
          </motion.div>
        </div>

        <Particles className="z-10" />
      </ContainerLayout>
    </main>
  );
};

export default ComingSoonSection;
