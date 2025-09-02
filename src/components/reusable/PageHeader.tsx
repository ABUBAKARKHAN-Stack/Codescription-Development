"use client";
import { Highlighter } from "@/components/magicui/highlighter";
import { LucideProps } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

type Props = {
  pageHeading: string;
  subText?: string;
  children?: React.ReactNode;
};

const PageHeader: FC<Props> = ({ pageHeading, subText, children }) => {
  return (
    <header className="flex w-full flex-col items-center justify-center gap-y-8 py-24">
      <Highlighter
        action="underline"
        animationDuration={500}
        once
        padding={5}
        className="font-audiowide w-fit text-center text-4xl text-wrap md:text-5xl lg:text-6xl"
      >
        <div className="flex flex-col items-center">
          {children}

          <span className="w-fit">{pageHeading}</span>
        </div>
      </Highlighter>
      {subText && (
        <Highlighter
          action="highlight"
          delay={0.75}
          animationDuration={500}
          once
          className="font-audiowide w-fit max-w-[400px] text-center text-base font-light tracking-wider text-wrap"
        >
          <span className="w-fit">{subText}</span>
        </Highlighter>
      )}
    </header>
  );
};

export default PageHeader;
