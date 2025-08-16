import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const ContainerLayout: FC<Props> = ({ children, className }) => {
  return (
    <main
      className={`p-4 container mx-auto ${className}`}
    >
      {children}
    </main>
  );
};

export default ContainerLayout;
