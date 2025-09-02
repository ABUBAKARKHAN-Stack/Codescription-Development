"use client";
import { Highlighter } from "@/components/magicui/highlighter";
import React, { FC } from "react";

type Props = {
  pageHeading: string;
};

const PageHeader: FC<Props> = ({ pageHeading }) => {
  return (
    <header className="mx-auto w-fit py-24">
      <Highlighter
        action="underline"
        animationDuration={500}
        strokeWidth={2}
        once
        padding={10}
        className="font-audiowide w-fit text-center text-4xl text-wrap md:text-5xl lg:text-6xl"
      >
        <span className="w-fit">{pageHeading}</span>
      </Highlighter>
    </header>
  );
};

export default PageHeader;
