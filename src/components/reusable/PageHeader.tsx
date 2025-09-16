"use client";
import { Highlighter } from "@/components/magicui/highlighter";
import React, { FC, JSX, ReactNode, use, useEffect, useState } from "react";
import { ContainerLayout } from "../layout";
import { cn } from "@/lib/utils";
import Particles from "../ui/particles";

type Props = {
  pageHeading: string;
  subText?: string;
  iconElement?: JSX.Element;
  children?: ReactNode;
  className?:string
};

const PageHeader: FC<Props> = ({
  pageHeading,
  subText,
  iconElement,
  children,
  className
}) => {
  const [headerHeight, setHeaderHeight] = useState("");

  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight;
      if (vh < 1024) {
        setHeaderHeight(`calc(75vh + 4.5rem)`);
      } else {
        setHeaderHeight(`calc(50vh + 4.5rem)`);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <header
      style={{ height: headerHeight }}
      className={cn(
        "z-10 bg-gradient-to-b from-[#2a0347] via-purple-900 to-[#2a0347]",
        "pt-20",
        "relative w-full",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-20 opacity-25"
        style={{ backgroundImage: "url('/assets/bg-pattern.svg')" }}
      />
      <Particles
        particlesCount={40}
        particlesStyles="opacity-0"
        className="-z-10"
      />

      <ContainerLayout className="h-full">
        <section className="flex size-full flex-col items-center justify-center gap-y-8">
          <Highlighter
            action="underline"
            animationDuration={500}
            once
            color="white"
            padding={5}
            className="font-audiowide w-fit text-center text-4xl text-wrap md:text-5xl lg:text-6xl"
          >
            <div className="flex flex-col items-center gap-y-2">
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
              className="font-audiowide w-fit max-w-[500px] p-2 text-center text-base font-light tracking-wider text-wrap text-white/85"
            >
              <span className="w-fit">{subText}</span>
            </Highlighter>
          )}
          {children && children}
        </section>
      </ContainerLayout>
    </header>
  );
};

export default PageHeader;
