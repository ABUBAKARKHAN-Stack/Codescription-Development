import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const ContainerLayout: FC<Props> = ({ children, className }) => {
  return (
    <main
      className={`xsm:max-w-xl mx-auto h-full w-full max-w-full p-4 sm:max-w-2xl md:max-w-3xl lg:max-w-[1100px] ${className}`}
    >
      {children}
    </main>
  );
};

export default ContainerLayout;
