"use client";
import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import { useInView, motion } from "motion/react";
import type React from "react";
import { cn } from "@/lib/utils";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#9D67FC",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  className = "",
  delay = 0,
  duration = 0.4,
  once = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, {
    once,
    margin: "-50px",
  });

  useEffect(() => {
    if (!isInView) return;

    const element = elementRef.current;
    if (element) {
      const annotation = annotate(element, {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      });

      const timer = setTimeout(
        () => {
          annotation.show();
        },
        delay * 1000 + duration * 1000,
      );

      return () => {
        clearTimeout(timer);
        annotation.remove();
      };
    }
  }, [
    isInView,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
    delay,
    duration,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
    >
      <span
        ref={elementRef}
        className={cn("relative inline-block lg:block bg-transparent", className)}
      >
        {children}
      </span>
    </motion.div>
  );
}
