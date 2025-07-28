import React, { FC } from 'react'

type props = {
    iamworkingwith: string
}

const DisplayName: FC<props> = ({ iamworkingwith }) => {
    return (
        <div>Hello I am working with {iamworkingwith} </div>
    )
}

export default DisplayName