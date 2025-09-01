"use client"

import { IBlog } from "@/types/main.types";
import { Calendar, User } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { motion } from "motion/react";
import Image from "next/image";
import { FC } from "react";
import { urlFor } from "@/sanity/lib/image";
type Props = {
  post: IBlog;
  index: number;
};

const BlogCard: FC<Props> = ({ post, index }) => {
  const { author, body, mainImage, publishedAt, slug, title } = post;

  const formatDate = (dateString: Date) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getTextPreview = (portableTextContent) => {
    if (!portableTextContent) return "";

    return (
      portableTextContent
        .filter((block) => block._type === "block")
        .map((block) => block.children?.map((child) => child.text).join(""))
        .join(" ")
        .substring(0, 120) + "..."
    );
  };

  return (
    <motion.div className="relative h-full rounded-xl flex flex-col overflow-hidden bg-transparent   backdrop-blur-sm "
      whileHover={{
        y: -12,
        scale: 1.03,
        rotateX: -2,
        boxShadow: [
          "0 10px 30px rgba(168,85,247,0.3), 0 0 20px rgba(139,92,246,0.2)",
          "0 20px 60px rgba(168,85,247,0.4), 0 0 40px rgba(139,92,246,0.3), 0 0 0 1px rgba(196,181,253,0.1)",
        ],
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.9,
        delay: index * 0.15,
      }}
      style={{
        boxShadow:
          "0 8px 25px rgba(168,85,247,0.15), 0 3px 10px rgba(0,0,0,0.3)",
        willChange: "transform, opacity",
      }}
    >

      {/* Enhanced image section */}
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        {mainImage?.source && (
          <>
            <Image
              src={urlFor(mainImage.source).url()}
              alt={mainImage.alt || title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </>
        )}

        {/* Floating date badge with glass effect */}
        <div className="absolute top-4 right-4">
          {publishedAt && (
            <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(publishedAt)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced content section */}
      <div className="relative flex h-[calc(100%-12rem)] flex-col p-7">
        {/* Title with improved typography */}
        <h2 className="mb-4 line-clamp-2 text-muted text-xl leading-tight font-bold">
          {title}
        </h2>

        {/* Enhanced body preview */}
        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-300/90 transition-colors duration-300 group-hover:text-gray-200/90">
          {body
            ? getTextPreview(body)
            : "Click to read the full article..."}
        </p>

        {/* Enhanced footer with better layout */}
        <div className="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-6">
          {/* Author section with glass effect */}
          <div className="flex items-center space-x-3">
            {author?.source && (
              <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-white/20 transition-all duration-300 group-hover:ring-purple-400/40 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100">
                <Image
                  src={urlFor(author.source).url()}
                  alt={`${author.name} profile`}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white/90 transition-colors duration-300 group-hover:text-white">
                {author?.name}
              </span>
              <span className="flex items-center gap-1 text-xs text-purple-300/80">
                <User className="h-3 w-3" />
                Author
              </span>
            </div>
          </div>

          <InteractiveHoverButton className="font-orbitron w-fit border-none bg-transparent px-6 py-3 font-bold tracking-wider shadow-[0px_0px_5px_rgba(0,0,0,0.25)]">
            Read Article
          </InteractiveHoverButton>

        </div>

      </div>
    </motion.div>
  );
};

export default BlogCard