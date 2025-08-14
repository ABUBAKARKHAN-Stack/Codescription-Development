"use client";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
const Globe = dynamic(() => import("../ui/globe").then(m => m.World), {
  ssr: false,
});


// TetraCode Hero Section Component
const Hero = () => {

   const globeConfig = {
    pointSize: 4,
    globeColor: "#7d4edb",
    showAtmosphere: true,
    atmosphereColor: "blue",
    atmosphereAltitude: 0.1,
    emissive: "#7d4edb",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  // const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(158,104,254,0.1),transparent_50%)]"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
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
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-8 md:px-16 lg:px-14">
        <div className="max-w-3xl text-center lg:text-left mx-auto w-fit lg:mx-0">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-[90px] xl:text-[110px] 2xl:text-[120px] font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-6">
            TetraCode
          </h1>
          
          {/* Subtext */}
          <p className="text-[12px] md:text-xl lg:text-[18px] xl:text-[20px] 2xl:text-[22px] lg:w-[500px] xl:w-[550px] 2xl:w-[600px] text-gray-300 leading-relaxed mb-12 ">
            Crafting innovative digital solutions that transform ideas into powerful, scalable applications. 
            Where creativity meets cutting-edge technology.
          </p>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('#what-we-do')}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:from-purple-500 hover:to-purple-600 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Explore Our Work
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>

         <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[300px] h-[400px] md:-bottom-60 md:w-[800px] md:h-[500px] lg:w-[800px] lg:h-[1000px] xl:-right-[120rem] 2xl:w-[1000px] 2xl:h-[1200px] 2xl:-right-[90rem] 2xl:-bottom-[25rem] lg:-translate-0 lg:-right-[30rem] lg:-bottom-52  z-10">
          <Globe data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>

   
     {/* <div className="absolute w-fit bottom-0 right-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" /> */}
       
      

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('#what-we-do')}
        className="absolute cursor-pointer bottom-8 left-1/2 transform -translate-x-1/2 z-20 group"
      >
        <div className="flex flex-col items-center text-purple-300 hover:text-white transition-colors duration-300">
          <span className="text-sm mb-2 opacity-75 group-hover:opacity-100">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </button>
    </div>
  );
};

export default Hero;