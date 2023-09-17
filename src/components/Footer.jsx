import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa'
import react from '../assets/react.svg'
const Footer = () => {
    return (
        <div className='  h-32 px-3 bg-[#ce234d] text-white w-full flex justify-between   items-center   bottom-0'>
            <div>
                <img src={react} className='animate-bounce duration-1000' />
                <span>
                    Made with REACT
                </span>
            </div>
            <div className='flex items-center justify-around max-w-[800px] text-2xl flex-1'>
                <FaFacebookF className='hover:text-3xl' /><FaGoogle className='hover:text-3xl' /><FaInstagram className='hover:text-3xl' /><FaTwitter className='hover:text-3xl' />
            </div>
        </div>
    )
}

export default Footer