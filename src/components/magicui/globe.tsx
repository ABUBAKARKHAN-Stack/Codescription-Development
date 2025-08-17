"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;
const AUTO_ROTATION_SPEED = 0.003; // Reduced from 0.005
const PERFORMANCE_CHECK_INTERVAL = 2000; // Check FPS every 2 seconds

// Detect device performance capabilities
const getDevicePerformance = (): 'low' | 'medium' | 'high' => {
  // Check device memory
  const deviceMemory = (navigator as any).deviceMemory;
  if (deviceMemory && deviceMemory < 4) return 'low';
  
  // Check hardware concurrency (CPU cores)
  if (navigator.hardwareConcurrency <= 4) return 'low';
  
  // Check if mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) return 'medium';
  
  return 'high';
};

// Performance-based configurations with custom width support
const getPerformanceConfig = (performanceLevel: 'low' | 'medium' | 'high', customWidth?: number) => {
  const baseConfigs = {
    low: {
      mapSamples: 16000,
      devicePixelRatio: 1,
      width: customWidth || 400,
      height: customWidth || 400,
      markers: [], // Remove markers on low-end devices
      autoRotationSpeed: 0.002,
    },
    medium: {
      mapSamples: 50000,
      devicePixelRatio: Math.min(window.devicePixelRatio, 1.2),
      width: customWidth || 600,
      height: customWidth || 600,
      markers: [
        { location: [14.5995, 120.9842], size: 0.01 },
        { location: [19.076, 72.8777], size: 0.01 },
        { location: [23.8103, 90.4125], size: 0.01 },
      ],
      autoRotationSpeed: 0.003,
    },
    high: {
      mapSamples: 100000,
      devicePixelRatio: Math.min(window.devicePixelRatio, 1.5),
      width: customWidth || 800,
      height: customWidth || 800,
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
      autoRotationSpeed: 0.005,
    },
  };

  return baseConfigs[performanceLevel];
};

const BASE_GLOBE_CONFIG: Omit<COBEOptions, 'width' | 'height' | 'onRender' | 'mapSamples' | 'devicePixelRatio' | 'markers'> = {
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapBrightness: 0.4,
  baseColor: [70 / 255, 14 / 255, 116 / 255],
  markerColor: [0.8, 0.8, 0.8],
  glowColor: [70 / 255, 14 / 255, 116 / 255],
};

export function Globe({
  className,
  config = {},
  width: customWidth,
}: {
  className?: string;
  config?: Partial<COBEOptions>;
  width?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [performanceLevel, setPerformanceLevel] = useState<'low' | 'medium' | 'high'>('high');
  
  let phi = 0;
  let width = 0;
  let frameCount = 0;
  let lastFPSCheck = performance.now();
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const globeRef = useRef<any>(null);
  const animationFrameRef = useRef<number>();

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
        rootMargin: '50px' // Start loading slightly before visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Performance monitoring
  const checkPerformance = useCallback(() => {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastFPSCheck >= PERFORMANCE_CHECK_INTERVAL) {
      const fps = (frameCount / (currentTime - lastFPSCheck)) * 1000;
      frameCount = 0;
      lastFPSCheck = currentTime;
      
      // Adjust performance level based on FPS
      if (fps < 20 && performanceLevel !== 'low') {
        setPerformanceLevel('low');
      } else if (fps < 35 && performanceLevel === 'high') {
        setPerformanceLevel('medium');
      }
    }
  }, [performanceLevel]);

  const updatePointerInteraction = useCallback((value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  }, []);

  const updateMovement = useCallback((clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  }, [r]);

  // Throttled resize handler
  const handleResize = useCallback(() => {
    if (canvasRef.current && isVisible) {
      width = canvasRef.current.offsetWidth;
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const onResize = () => {
      clearTimeout(animationFrameRef.current);
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
          phi += perfConfig.autoRotationSpeed;
        }
        
        state.phi = phi + rs.get();
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
  }, [isVisible, performanceLevel, rs, config, isActive, checkPerformance, customWidth]);

  // Pause/resume based on page visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsActive(!document.hidden && isVisible);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isVisible]);

  // Render placeholder when not visible
  if (!isVisible) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "relative mx-auto aspect-[1/1] bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-full",
          className,
        )}
        style={{ 
          width: customWidth || getPerformanceConfig(performanceLevel, customWidth).width,
          height: customWidth || getPerformanceConfig(performanceLevel, customWidth).height,
          background: 'radial-gradient(circle, rgba(70,14,116,0.1) 0%, rgba(70,14,116,0.05) 100%)'
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative mx-auto aspect-[1/1]",
        className,
      )}
      style={{
        width: customWidth || getPerformanceConfig(performanceLevel, customWidth).width,
        height: customWidth || getPerformanceConfig(performanceLevel, customWidth).height,
      }}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
          !isActive && "pointer-events-none"
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
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-2 right-2 text-xs bg-black/50 text-white px-2 py-1 rounded">
          {performanceLevel}
        </div>
      )}
    </div>
  );
}