import React, { FC } from "react";
import { BlurFade } from "../magicui/blur-fade";
import { Highlighter } from "../magicui/highlighter";

type Props = {
  mainHeading: string;
  animateOnce?: boolean;
};

const SectionHeader: FC<Props> = ({
  mainHeading,
  // subText,
  animateOnce = false,
}) => {
  return (
    <div className="relative flex w-full flex-col items-center lg:items-baseline justify-center gap-y-4">
      <Highlighter
        delay={0.25}
        action="highlight"
        animationDuration={1000}
        once
        className="tracking font-montserrat text-center text-4xl font-bold text-wrap md:text-5xl lg:text-6xl  "
      >
        <span className="inline-block p-2">{mainHeading}</span>
      </Highlighter>
      {/* <BlurFade
        direction="down"
        once={animateOnce}
        delay={0.25 * 2}
        inView
        blur="10px"
      > */}
        {/* <p className="font-poppins text-primary mx-auto mb-6 max-w-[80%] text-center text-sm leading-relaxed font-normal text-wrap md:text-base xl:text-xl">
          {subText}
        </p> */}
      {/* </BlurFade> */}
    </div>
  );
};

export default SectionHeader;
