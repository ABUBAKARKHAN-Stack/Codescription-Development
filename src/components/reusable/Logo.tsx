import { brandName } from "@/constants/brandname.constants";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  clickable?: boolean;
};

const Logo: FC<Props> = ({
  width = 250,
  height = 250,
  className,
  clickable = false,
}) => {
  return (
    <>
      {!clickable && (
        <Image
          src={"/assets/cs-logo.png"}
          width={width}
          height={height}
          alt={`${brandName} - Logo`}
          className={`${className} drop-shadow-md drop-shadow-black/25`}
        />
      )}
      {clickable && (
        <Link href={"/"}>
          <Image
            src={"/assets/cs-logo.png"}
            width={width}
            height={height}
            alt={`${brandName} - Logo`}
            className={`${className} drop-shadow-md drop-shadow-black`}
          />
        </Link>
      )}
    </>
  );
};

export default Logo;
