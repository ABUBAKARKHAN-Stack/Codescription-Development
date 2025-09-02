"use client";
import { Highlighter } from "@/components/magicui/highlighter";
import { LucideProps } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

type Props = {
  pageHeading: string;
  subText?: string;
  children?: React.ReactNode
};

const PageHeader: FC<Props> = ({ pageHeading, subText, children }) => {
  return (
    <header className="w-full flex flex-col gap-y-8  justify-center items-center py-24">
      <Highlighter
        action="underline"
        animationDuration={500}
        once
        padding={5}
        className="font-audiowide w-fit text-center text-4xl text-wrap md:text-5xl lg:text-6xl"
      >
        <div className="flex flex-col  items-center">{children}

        <span className="w-fit">{pageHeading}</span>
        </div>
      </Highlighter>
      {
        subText && <Highlighter
          action="highlight"
          delay={.75}
          animationDuration={500}
          once
          className="font-audiowide w-fit max-w-[400px] text-center text-wrap text-base tracking-wider font-light "
        >
          <span className="w-fit">{subText}</span>
        </Highlighter>
      }

    </header>
  );
};

export default PageHeader;
