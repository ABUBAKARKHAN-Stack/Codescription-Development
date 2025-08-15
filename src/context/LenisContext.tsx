"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      duration: 1.05,
    });
   

    setLenisInstance(lenis);

    return () => lenis.destroy();
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);
