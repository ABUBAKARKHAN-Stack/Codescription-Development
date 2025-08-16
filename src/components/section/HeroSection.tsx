"use client";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Position } from "@/types/main.types";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import ContainerLayout from "../layout/ContainerLayout";
const Globe = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

const Hero = () => {
 const globeConfig = {
  pointSize: 4,
  globeColor: "#c28ef4", // Dark purple
  showAtmosphere: false,
  atmosphereColor: "rgba(0,0,0,0)",
  atmosphereAltitude: 0.1,
  emissive: "#c28ef4", // Same as globeColor for consistent color
  emissiveIntensity: 0.2, // Add some self-illumination
  shininess: 0.3, // Reduce shininess to make reflections less intense
  polygonColor: "rgba(255,255,255,1)", // More subtle polygon highlights
  ambientLight: "#c28ef4", // Match ambient light color
  directionalLeftLight: "#ffffff", // Purple tinted lights
  directionalTopLight: "#ffffff", // Purple tinted lights
  pointLight: "#ffffff", // Purple tinted point light
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};


  const sampleArcs: Position[] = [];

  const { scrollToSection } = useScrollToSection();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* <ContainerLayout> */}


      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(158,104,254,0.1),transparent_50%)]"></div>
        {[...Array(50)].map((_, i) => (
          <div
          key={i}
          className="absolute h-1 w-1 animate-pulse rounded-full bg-purple-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
            />
          ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-start justify-center px-8 md:px-16 lg:px-14 xl:px-20">
        <div className="mx-auto w-fit max-w-3xl text-center lg:mx-0 lg:text-left">
          {/* Main heading */}
          <h1 className="mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl lg:text-[90px] xl:text-[110px] 2xl:text-[120px]">
            TetraCode
          </h1>

          {/* Subtext */}
          <p className="mb-12 text-[12px] leading-relaxed text-gray-300 md:text-xl lg:w-[500px] lg:text-[18px] xl:w-[550px] xl:text-[20px] 2xl:w-[600px] 2xl:text-[22px]">
            Crafting innovative digital solutions that transform ideas into
            powerful, scalable applications. Where creativity meets cutting-edge
            technology.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("#what-we-do")}
            className="group relative rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-purple-600 hover:shadow-purple-500/25"
          >
            Explore Our Work
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
          </button>
        </div>

        <div id="globe-container" className="absolute -bottom-40 left-1/2 z-10 h-[400px] w-full -translate-x-1/2 md:-bottom-60 md:h-[500px] md:w-[800px] lg:-right-[30rem] lg:-bottom-52 lg:h-[1000px] lg:w-[800px] lg:-translate-0 xl:-right-[120rem] 2xl:-right-[90rem] 2xl:-bottom-[25rem] 2xl:h-[1200px] 2xl:w-[1000px]">
          <Globe data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("#what-we-do")}
        className="group absolute bottom-8 left-1/2 z-20 -translate-x-1/2 transform cursor-pointer"
      >
        <div className="flex flex-col items-center text-purple-300 transition-colors duration-300 hover:text-white">
          <span className="mb-2 text-sm opacity-75 group-hover:opacity-100">
            Scroll to explore
          </span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </button>
        {/* </ContainerLayout> */}
    </div>
  );
};

export default Hero;
