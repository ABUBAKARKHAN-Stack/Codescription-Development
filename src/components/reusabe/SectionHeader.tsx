import React, { FC } from "react";
import { Highlighter } from "../magicui/highlighter";

type Props = {
  mainHeading: string;
  animateOnce?: boolean;
};

const SectionHeader: FC<Props> = ({ mainHeading, animateOnce = false }) => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-y-4 lg:items-baseline">
      <Highlighter
        delay={0.25}
        action="highlight"
        animationDuration={1000}
        once
        className="tracking font-montserrat text-center text-4xl font-bold text-wrap md:text-5xl lg:text-6xl"
      >
        <span className="inline-block p-2">{mainHeading}</span>
      </Highlighter>
    </div>
  );
};

export default SectionHeader;
