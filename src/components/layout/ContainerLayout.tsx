import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode;
  className?: string
}

const ContainerLayout: FC<Props> = ({ children, className }) => {
  return (
    <main className={`xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-2xl max-w-full p-4 h-full w-full mx-auto ${className}`}>
      {children}
    </main>
  )
}

export default ContainerLayout