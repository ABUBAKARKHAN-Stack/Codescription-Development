import { ContainerLayout } from "@/components/layout";
import { PageHeader } from "@/components/reusable";
import { formatDate } from "@/lib/formatDate";
import { urlFor } from "@/sanity/lib/image";
import { IAuthor } from "@/types/main.types";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { Highlighter } from "@/components/magicui/highlighter";

type Props = {
  title: string;
  author: IAuthor;
  role: string;
  publishedAt: Date;
};

const BlogHeroSection: FC<Props> = ({ author, role, publishedAt, title }) => {
  return (
    <PageHeader pageHeading={title || "Blog Unavailable"}>
      <ContainerLayout className={cn("h-fit space-y-4 p-0")}>
        {/* Author & Date Row */}
        <div
          className={cn(
            "mx-auto mt-6 flex w-full max-w-xl flex-col items-center justify-center",
            "gap-6",
            "xsm:flex-row",
          )}
        >
          {/* Author */}
          <div
            className={cn(
              "flex w-[90%] items-center justify-between",
              "gap-4 p-2",
              "rounded-md",
              "shadow-[0px_0px_5px_black]",
              "xsm:w-fit xsm:rounded-none xsm:p-0 xsm:shadow-none",
            )}
          >
            {author && (
              <div
                className={cn(
                  "flex w-full items-center justify-center",
                  "gap-4",
                )}
              >
                {author.source && (
                  <div className={cn("relative")}>
                    <Image
                      src={urlFor(author.source)
                        .format("webp")
                        .width(60)
                        .height(60)
                        .url()}
                      alt={author.name}
                      width={60}
                      height={60}
                      priority
                      className={cn(
                        "relative shrink-0",
                        "rounded-full border-2 border-white/20",
                      )}
                    />
                  </div>
                )}
                <div>
                  <p className={cn("text-lg font-bold text-white/90")}>
                    {author.name}
                  </p>
                  <p className={cn("text-sm font-medium text-white/70")}>
                    Author
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Published Date */}
          {publishedAt && (
            <div className={cn("w-[90%]", "xsm:w-fit min-[340px]:w-[75%]")}>
              <div
                className={cn(
                  "flex items-center justify-center",
                  "gap-x-2 px-4 py-2",
                  "rounded-full border border-white/20",
                  "bg-white/10 backdrop-blur-sm",
                )}
              >
                <Calendar className={cn("size-4.5")} />
                <p className={cn("text-sm font-medium text-white")}>
                  {formatDate(publishedAt, {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Highlighted Role */}
        {role && (
          <div className={cn("mx-auto w-fit")}>
            <Highlighter
              once
              className={cn(
                "font-audiowide font-bold text-white text-shadow-black text-shadow-sm",
                "text-lg",
                "min-[400px]:text-xl min-[500px]:text-2xl",
              )}
              action="highlight"
              color="rgba(255,255,255,0.1)"
            >
              <span className={cn("inline-block px-2 py-1")}>{role}</span>
            </Highlighter>
          </div>
        )}
      </ContainerLayout>
    </PageHeader>
  );
};

export default BlogHeroSection;
