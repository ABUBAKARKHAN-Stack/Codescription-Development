"use client";

import { useLenis } from "@/context/LenisContext";
import { useAnimationFrame } from "motion/react";
import { useEffect, useState } from "react";

const LenisMotionRAFSync = () => {
  const lenis = useLenis();
  const [isActive, setIsActive] = useState(true);

  //* Detect when the tab is hidden or visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsActive(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  //* Only run RAF updates when tab is active
  useAnimationFrame((time) => {
    if (isActive) {
      lenis?.raf(time);
    }
  });

  return null;
};

export default LenisMotionRAFSync;
