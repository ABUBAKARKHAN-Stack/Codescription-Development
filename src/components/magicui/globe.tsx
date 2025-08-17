"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;
const AUTO_ROTATION_SPEED = 0.003; // Reduced from 0.005
const PERFORMANCE_CHECK_INTERVAL = 2000; // Check FPS every 2 seconds

type PerformanceLevel = "low";

interface PerformanceConfig {
  mapSamples: number;
  devicePixelRatio: number;
  width: number;
  height: number;
  markers: Array<{ location: [number, number]; size: number }>;
  autoRotationSpeed: number;
}

// Detect device performance capabilities
const getDevicePerformance = (): PerformanceLevel => {
  return "low";
};

// Performance-based configurations with custom width support
const getPerformanceConfig = (
  performanceLevel: PerformanceLevel,
  customWidth?: number,
): PerformanceConfig => {
  const baseConfigs: Record<PerformanceLevel, PerformanceConfig> = {
    low: {
      mapSamples: 16000,
      devicePixelRatio: 1,
      width: customWidth || 400,
      height: customWidth || 400,
      markers: [],
      autoRotationSpeed: 0.002,
    },
  };

  return baseConfigs[performanceLevel];
};

const BASE_GLOBE_CONFIG: Omit<
  COBEOptions,
  | "width"
  | "height"
  | "onRender"
  | "mapSamples"
  | "devicePixelRatio"
  | "markers"
> = {
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapBrightness: 0.4,
  baseColor: [70 / 255, 14 / 255, 116 / 255],
  markerColor: [0.8, 0.8, 0.8],
  glowColor: [70 / 255, 14 / 255, 116 / 255],
};

interface GlobeProps {
  className?: string;
  config?: Partial<COBEOptions>;
  width?: number;
}

export function Globe({
  className,
  config = {},
  width: customWidth,
}: GlobeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [performanceLevel, setPerformanceLevel] =
    useState<PerformanceLevel>("low");

  // Use refs for mutable values that don't trigger re-renders
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const frameCountRef = useRef(0);
  const lastFPSCheckRef = useRef(performance.now());

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  // Initialize performance level
  useEffect(() => {
    setPerformanceLevel(getDevicePerformance());
  }, []);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // Pause globe when not visible
        setIsActive(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "50px", // Start loading slightly before visible
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Performance monitoring
  const checkPerformance = useCallback(() => {
    frameCountRef.current++;
    const currentTime = performance.now();

    if (currentTime - lastFPSCheckRef.current >= PERFORMANCE_CHECK_INTERVAL) {
      const fps =
        (frameCountRef.current / (currentTime - lastFPSCheckRef.current)) *
        1000;
      frameCountRef.current = 0;
      lastFPSCheckRef.current = currentTime;

      setPerformanceLevel("low");
    }
  }, [performanceLevel]);

  const updatePointerInteraction = useCallback((value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  }, []);

  const updateMovement = useCallback(
    (clientX: number) => {
      if (pointerInteracting.current !== null) {
        const delta = clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;
        r.set(r.get() + delta / MOVEMENT_DAMPING);
      }
    },
    [r],
  );

  // Throttled resize handler
  const handleResize = useCallback(() => {
    if (canvasRef.current && isVisible) {
      widthRef.current = canvasRef.current.offsetWidth;
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const onResize = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(handleResize);
    };

    window.addEventListener("resize", onResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", onResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, handleResize]);

  // Globe initialization
  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const perfConfig = getPerformanceConfig(performanceLevel, customWidth);
    const globeConfig: COBEOptions = {
      ...BASE_GLOBE_CONFIG,
      ...config,
      ...perfConfig,
      width: perfConfig.width,
      height: perfConfig.height,
      onRender: (state) => {
        // Performance monitoring
        checkPerformance();

        // Only update if active
        if (!isActive) return;

        // Auto rotation only when not interacting
        if (!pointerInteracting.current) {
          phiRef.current += perfConfig.autoRotationSpeed;
        }

        state.phi = phiRef.current + rs.get();
        state.width = perfConfig.width;
        state.height = perfConfig.height;
      },
    };

    const globe = createGlobe(canvasRef.current, globeConfig);
    globeRef.current = globe;

    // Fade in effect
    const fadeTimeout = setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 100);

    return () => {
      globe.destroy();
      clearTimeout(fadeTimeout);
      globeRef.current = null;
    };
  }, [
    isVisible,
    performanceLevel,
    rs,
    config,
    isActive,
    checkPerformance,
    customWidth,
  ]);

  // Pause/resume based on page visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsActive(!document.hidden && isVisible);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isVisible]);

  // Render placeholder when not visible
  if (!isVisible) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "relative mx-auto aspect-[1/1] rounded-full bg-gradient-to-br from-purple-900/20 to-blue-900/20",
          className,
        )}
        style={{
          width:
            customWidth ||
            getPerformanceConfig(performanceLevel, customWidth).width,
          height:
            customWidth ||
            getPerformanceConfig(performanceLevel, customWidth).height,
          background:
            "radial-gradient(circle, rgba(70,14,116,0.1) 0%, rgba(70,14,116,0.05) 100%)",
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative mx-auto aspect-[1/1]", className)}
      style={{
        width:
          customWidth ||
          getPerformanceConfig(performanceLevel, customWidth).width,
        height:
          customWidth ||
          getPerformanceConfig(performanceLevel, customWidth).height,
      }}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
          !isActive && "pointer-events-none",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          if (!isActive) return;
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => isActive && updateMovement(e.clientX)}
        onTouchMove={(e) =>
          isActive && e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />

      {/* Performance indicator for development */}
      {process.env.NODE_ENV === "development" && (
        <div className="absolute top-2 right-2 rounded bg-black/50 px-2 py-1 text-xs text-white">
          {performanceLevel}
        </div>
      )}
    </div>
  );
}
