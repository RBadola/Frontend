import React from 'react'
import logo from '../assets/Screen.png'
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
const Landing = () => {
    return (
        <div className='flex flex-col justify-start items-center p-2 '>
            <img src={logo} className='rounded-md' />
            <div className="flex text-2xl">
                <p>
                    Write&nbsp;
                </p>

                <Typed strings={['the Truth.', ' what is Real.', 'but write it short.']} backSpeed={100} typeSpeed={60} loop backDelay={30} className='font-bold' />
            </div>
            <p> <Link to='/login' className='underline'>Login</Link> now to share your content</p>
        </div>
    )
}

export default Landing