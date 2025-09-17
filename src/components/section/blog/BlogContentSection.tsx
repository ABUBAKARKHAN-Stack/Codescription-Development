"use client";

import { portableTextComponents } from "@/components/portableText/portableTextComponents";
import { cn } from "@/lib/utils";
import { PortableTextBlock } from "@/types/main.types";
import { useScroll, motion } from "motion/react";
import { PortableText } from "next-sanity";
import React, { useRef } from "react";

const BlogContentSection = ({ body }: { body: PortableTextBlock[] }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <article className="relative" ref={sectionRef}>
      <motion.div
        className={cn(
          "fixed inset-x-0 top-0 z-50",
          "h-0.5 w-full origin-left",
          "via-primary bg-gradient-to-r from-purple-500 to-purple-500",
        )}
        style={{ scaleX: scrollYProgress }}
      />

      {body && body.length > 0 && (
        <div className="prose prose-invert prose-lg max-w-none">
          <PortableText value={body} components={portableTextComponents} />
        </div>
      )}
    </article>
  );
};

export default BlogContentSection;
