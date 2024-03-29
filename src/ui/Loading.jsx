import React from 'react'
import { twMerge } from 'tailwind-merge'

const Loading = ({bgc}) => {
    return (
        <div className='absolute z-49 w-full  grid place-items-center place-content-center translate-x-1/2 translate-y-1/2 right-1/2 top-1/2'>
        <div className={twMerge('w-20 h-20 rounded-full bg-white animate-ping self-center',bgc)} ></div>
        </div>
    )
}

export default Loading