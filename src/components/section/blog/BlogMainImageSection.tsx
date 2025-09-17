"use client";
import Particles from "@/components/ui/particles";
import { baseUrl } from "@/constants/constants";
import { errorToast, infoToast, successToast } from "@/helpers/toasts.helper";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { IMainImage } from "@/types/main.types";
import Image from "next/image";
import React, { FC } from "react";
import { FaCopy, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { toast } from "sonner";

type Props = {
  mainImage: IMainImage;
  title: string;
  slug: string;
};

const BlogMainImageSection: FC<Props> = ({ mainImage, title, slug }) => {
  const baseShareUrl = `${baseUrl}blog/${slug}`;

  const shareBlogItems = [
    {
      icon: FaSquareXTwitter,
      shareUrl: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        baseShareUrl,
      )}&text=${encodeURIComponent(title)}`,
    },
    {
      icon: FaLinkedin,
      shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        baseShareUrl,
      )}`,
    },
    {
      icon: FaCopy,
      shareUrl: baseShareUrl,
    },
  ];

  const handleCopyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      successToast("Link copied to clipboard!");
    } catch (err) {
      errorToast("Failed to copy link.");
    }
  };

  const handleShareUrl = async (copyToClipBoard: boolean, shareUrl: string) => {
    if (copyToClipBoard) return await handleCopyUrl(shareUrl);
    window.open(shareUrl, "_blank");
  };

  return (
    <>
      {mainImage && (
        <div className="group relative mb-12">
          {/* Responsive Aspect Ratio Wrapper */}
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
            <Image
              src={urlFor(mainImage.source)
                .width(1920)
                .quality(85)
                .format("webp")
                .url()}
              alt={mainImage.alt || title}
              fill
              sizes="
                             (max-width: 640px) 100vw,   
                             (max-width: 1024px) 90vw,  
                             1200px  
                           "
              className="object-cover"
              priority
            />
          </div>

          {/* Blackish Overlay */}
          <div
            className={cn(
              "absolute inset-0 z-10",
              "bg-black/10",
              "transition-all duration-200 ease-linear",
            )}
          />

          {/* Hover Purplish Overlay */}
          <div
            className={cn(
              "absolute inset-0 z-10",
              "group-hover:bg-purple-500/25 group-hover:backdrop-blur-lg",
              "transition-all duration-200 ease-linear",
            )}
          />

          {/* Particles  */}
          <Particles
            className={cn(
              "absolute inset-0 z-10",
              "opacity-0 group-hover:opacity-100",
              "transition-all duration-200 ease-linear",
            )}
            particlesStyles="group-hover:animate-pulse group-hover:opacity-0 size-1.25"
          />

          {/* Share Options */}
          <div
            className={cn(
              "absolute inset-0 z-10",
              "flex flex-col items-center justify-center gap-y-6",
              "opacity-0 group-hover:opacity-100",
              "transition-all duration-300 ease-in-out",
            )}
          >
            <h2 className="text-3xl font-semibold tracking-wide text-white text-shadow-lg">
              Share this article
            </h2>

            <div className="flex gap-x-4">
              {shareBlogItems.map(({ icon: Icon, shareUrl }, idx) => {
                const copyToClipBoard = Icon === FaCopy;
                return (
                  <button
                    onClick={() => handleShareUrl(copyToClipBoard, shareUrl)}
                    key={idx}
                    className={cn(
                      "rounded-full border p-2.5 hover:border-purple-500 hover:text-purple-500",
                      "border-white text-white hover:-translate-y-1.5 hover:scale-100 hover:cursor-pointer",
                      "translate-y-4 scale-75 transform group-hover:translate-y-0 group-hover:scale-95",
                      "transition-[transform_colors] duration-300 ease-out",
                    )}
                  >
                    <Icon className="size-6.5 drop-shadow-xs drop-shadow-black" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogMainImageSection;
