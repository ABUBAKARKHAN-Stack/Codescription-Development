"use client";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { ChevronDown } from "lucide-react";
import ContainerLayout from "../../layout/ContainerLayout";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import { PiPlanet } from "react-icons/pi";
import dynamic from "next/dynamic";
import { Button } from "../../ui/button";
import Particles from "../../ui/particles";

const Globe = dynamic(() => import("@/components/magicui/globe"), {
  ssr: false,
  loading: () => <h1>Loading Globe...</h1>,
});

const Hero = () => {
  const { scrollToSection } = useScrollToSection();
  const isMobile = useMediaQuery("(max-width:640px)");
  const isLg = useMediaQuery("((min-width:1024px) and (max-width:1280px))");

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900">
      <ContainerLayout>
        {/* Animated background particles */}
        <Particles />

        {/* Main content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left side - Text content */}
            <div className="flex flex-col items-center justify-center space-y-8 lg:items-baseline">
              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-audiowide relative text-center text-3xl font-bold tracking-wide uppercase min-[320px]:text-4xl min-[450px]:text-5xl md:text-6xl lg:text-left xl:text-[65px]"
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
                  className="text-white"
                >
                  Exploring Infinite Possibilities
                </motion.span>
              </motion.h1>

              {/* Subtext */}
              <p className="max-w-lg text-center text-sm leading-relaxed text-white min-[350px]:text-base md:text-lg lg:text-left xl:text-xl">
                From the smallest atom to the vast universe, <br /> we craft
                limitless solutions.
              </p>

              {/* CTA Button */}
              <Button
                size={"lg"}
                onClick={() => scrollToSection("#about-us-section")}
                className="rounded-full !p-7 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-purple-500/25 md:text-lg"
              >
                Explore Our Universe <PiPlanet className="size-5" />
              </Button>
            </div>

            {/* Right side - Globe */}
            <div className="absolute -bottom-52 left-1/2 flex -translate-x-1/2 items-center justify-center md:-bottom-64 lg:relative lg:bottom-0 lg:left-0 lg:-translate-0 lg:justify-end">
              <div className="h-[400px] w-[400px] md:h-[500px] md:w-[500px] lg:h-[700px] lg:w-[700px]">
                {/* Globe container with explicit positioning */}
                <div className="flex items-center justify-center bg-transparent lg:absolute lg:inset-0 lg:ml-20">
                  <Globe
                    width={isMobile ? 400 : isLg ? 450 : 550}
                    config={{
                      dark: -1,
                      diffuse: 0.1,
                      mapBrightness: 1.0,
                      baseColor: [70 / 255, 14 / 255, 116 / 255],
                      markerColor: [0.8, 0.8, 0.8],
                      glowColor: [0.8, 0.8, 0.8],
                      markers: [
                        { location: [14.5995, 120.9842], size: 0.015 },
                        { location: [19.076, 72.8777], size: 0.015 },
                        { location: [23.8103, 90.4125], size: 0.015 },
                        { location: [30.0444, 31.2357], size: 0.015 },
                        { location: [39.9042, 116.4074], size: 0.015 },
                        { location: [-23.5505, -46.6333], size: 0.015 },
                        { location: [19.4326, -99.1332], size: 0.015 },
                        { location: [40.7128, -74.006], size: 0.015 },
                        { location: [34.6937, 135.5022], size: 0.015 },
                        { location: [41.0082, 28.9784], size: 0.015 },
                      ],
                    }}
                    className="h-full w-full bg-transparent"
                  />
                </div>

                {/* Glow effect behind globe */}
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-500/20 via-purple-600/30 to-purple-500/20 blur-3xl lg:ml-20"></div>
              </div>
            </div>
          </div>
        </div>

      </ContainerLayout>
    </section>
  );
};

export default Hero;
