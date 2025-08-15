"use client";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const Logo: FC<Props> = ({ width = 250, height = 250, className }) => {
  return (
    <Image
      src={"/assets/logo.png"}
      width={width}
      height={height}
      alt={"Tetracode Logo"}
      className={`${className}`}
    />
  );
};

export default Logo;
