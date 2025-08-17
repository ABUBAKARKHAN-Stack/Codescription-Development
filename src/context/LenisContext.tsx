"use client";

import { createContext, useEffect, useRef } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { frame, cancelFrame } from "motion/react";

const LenisContext = createContext<null>(null);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = (data: { timestamp: number }) => {
      lenisRef.current?.lenis?.raf(data.timestamp);
    };

    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <LenisContext.Provider value={null}>
      <ReactLenis root ref={lenisRef}>
        {children}
      </ReactLenis>
    </LenisContext.Provider>
  );
};
