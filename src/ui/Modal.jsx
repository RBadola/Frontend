import React from 'react'
import { useState } from 'react'

const Modal = (props) => {
const [bg, setbg] = useState("white")

  return (
    <div className='fixed top-0 z-50 w-full h-screen grid place-items-center place-content-center translate-x-1/2  right-1/2  backdrop-blur-sm'>
        <div className={`w-[400px] h-[200px] self-center bg-${props.bg}-400 rounded-md grid place-items-center`}>
          <p className="text-3xl text-gray-800 font-bold ">{props.err}</p>
          <button
            onClick={() => props.seterr(null)}
            className="bg-slate-500 text-white
                    p-2 m-1 w-1/4 rounded-md"
          >
            {props.btn}
          </button>
        </div>
      
    </div>
  )
}

export default Modal