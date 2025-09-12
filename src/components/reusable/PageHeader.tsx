"use client";
import { Highlighter } from "@/components/magicui/highlighter";
import React, { FC, JSX, ReactNode } from "react";

type Props = {
  pageHeading: string;
  subText?: string;
  iconElement?: JSX.Element;
  children?:ReactNode

};

const PageHeader: FC<Props> = ({ pageHeading, subText, iconElement, children }) => {
  return (
    <header className="flex  w-full min-h-[calc(75vh+4.5rem)] bg-gradient-to-b from-[#2a0347] via-purple-900 to-[#2a0347] h-full flex-col items-center justify-center gap-y-8">
      <Highlighter
        action="underline"
        animationDuration={500}
        once
        color="white"
        padding={5}
        className="font-audiowide w-fit text-center text-4xl text-wrap md:text-5xl lg:text-6xl"
      >
        <div className="flex flex-col items-center">
          {iconElement && iconElement}
          <h1 className="w-fit">{pageHeading}</h1>
        </div>
      </Highlighter>
      {subText && (
        <Highlighter
          action="highlight"
          delay={0.75}
          animationDuration={500}
          once
          color="rgba(255,255,255,0.05)"
          className="font-audiowide w-fit p-2 max-w-[500px] text-white/85 text-center text-base font-light tracking-wider text-wrap"
        >
          <span className="w-fit">{subText}</span>
        </Highlighter>
      )}
      {children && children}
    </header>
  );
};

export default PageHeader;
