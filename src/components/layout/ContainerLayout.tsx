import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode;
  className?: string
}

const ContainerLayout: FC<Props> = ({ children, className }) => {
  return (
    <main className={`max-w-full xsm:max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-[1100px] p-4 h-full w-full mx-auto ${className}`}>
      {children}
    </main>
  )
}

export default ContainerLayout