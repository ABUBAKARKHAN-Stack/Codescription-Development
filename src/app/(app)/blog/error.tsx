"use client"
import React, { FC } from 'react'

type ErrorProps = {
    error: Error & { digest: string };
    reset: () => void

}

const Error: FC<ErrorProps> = ({
    error,
    reset
}) => {

    return (
        <div>Error</div>
    )
}

export default Error