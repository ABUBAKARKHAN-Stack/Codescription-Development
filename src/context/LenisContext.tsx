"use client";

import { createContext, useEffect, useRef } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { frame, cancelFrame } from "motion/react";

const LenisContext = createContext<null>(null);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<LenisRef>(null);

  // useEffect(() => {
  //   const update = (data: { timestamp: number }) => {
  //     lenisRef.current?.lenis?.raf(data.timestamp);
  //   };

  //   frame.update(update, true);
  //   return () => cancelFrame(update);
  // }, []);
  
// options={{ autoRaf: false }}
  return (
    <LenisContext.Provider value={null}>
<<<<<<< HEAD
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
=======
      <ReactLenis root  ref={lenisRef} >
>>>>>>> 55e96e73b90899bb83d469ec3b2b8aa3d2c050ce
        {children}
      </ReactLenis>
    </LenisContext.Provider>
  );
};
