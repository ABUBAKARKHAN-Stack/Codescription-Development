"use client";

import { IBlog, PortableTextBlock } from "@/types/main.types";
import { Calendar, User } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Image from "next/image";
import { FC } from "react";
import { urlFor } from "@/sanity/lib/image";
import Badge from "@/components/ui/badge";
import Link from "next/link";

type Props = {
  post: IBlog;
};

const BlogCard: FC<Props> = ({ post }) => {
  const { author, body, mainImage, publishedAt, slug, title } = post;

  const formatDate = (dateString: Date) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getTextPreview = (
    portableTextContent: PortableTextBlock[] = [],
  ): string => {
    if (!portableTextContent || portableTextContent.length === 0) return "";

    return (
      portableTextContent
        .filter((block) => block._type === "block")
        .map(
          (block) => block.children?.map((child) => child.text).join("") || "",
        )
        .join(" ")
        .substring(0, 100) + "..."
    );
  };

  return (
    <div
      className="relative flex h-full flex-col overflow-hidden bg-transparent backdrop-blur-sm"
      style={{
        boxShadow:
          "0 8px 25px rgba(168,85,247,0.15), 0 3px 10px rgba(0,0,0,0.3)",
        willChange: "transform, opacity",
      }}
    >
      {/* Enhanced image section with perfect aspect ratio */}
      <div className="relative h-48 overflow-hidden">
        {mainImage?.source && (
          <Image
            src={urlFor(mainImage.source).url()}
            alt={mainImage.alt || title}
            fill
            className="object-cover transition-transform duration-700 ease-out hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            quality={100}
            loading="lazy"
          />
        )}

        {/* Perfectly positioned floating date badge */}
        <div className="absolute top-3 left-3">
          {publishedAt && (
            <Badge
              icon={Calendar}
              badgeText={formatDate(publishedAt)}
              variant="muted"
            />
          )}
        </div>
      </div>

      {/* Enhanced content section with improved spacing hierarchy */}
      <div className="relative flex h-[calc(100%-12rem)] flex-col justify-between p-6">
        {/* Content top section */}
        <div className="flex flex-col space-y-4">
          {/* Title with perfect typography scaling */}
          <h2 className="line-clamp-2 text-xl leading-[1.3] font-bold tracking-tight text-white sm:text-2xl">
            {title}
          </h2>

          {/* Body preview with optimal line height */}
          <p className="text-accent-foreground line-clamp-2 text-xs leading-[1.6] transition-colors duration-300 sm:text-base sm:leading-[1.7]">
            {body ? getTextPreview(body) : "Click to read the full article..."}
          </p>
        </div>

        {/* Enhanced footer with perfect alignment and spacing */}
        <div className="mt-6 flex flex-col items-start gap-y-4 border-t border-white/[0.08] pt-5">
          {/* Author section with refined spacing */}
          <div className="flex items-center space-x-3">
            {author?.source && (
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full shadow-xs ring-2 shadow-white/10 ring-white/10">
                <Image
                  src={urlFor(author.source).url()}
                  alt={`${author.name} profile`}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
            )}
            <div className="flex min-w-0 flex-col justify-center">
              <span className="truncate text-sm font-semibold text-white/90">
                {author?.name}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/70">
                <User className="h-3 w-3 flex-shrink-0" />
                <span>Author</span>
              </span>
            </div>
          </div>

          {/* Perfectly aligned button */}
          <Link href={`/blog/${slug}`} className="ml-auto">
            <InteractiveHoverButton className="font-orbitron border-none bg-transparent px-5 !py-2.25 text-sm font-bold tracking-wider shadow-[0px_0px_5px_rgba(0,0,0,0.25)] sm:px-6 sm:py-3 sm:text-base">
              Read Article
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
