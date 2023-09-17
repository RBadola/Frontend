import React, { useContext } from 'react'
import logo from '../assets/Screen.png'
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { Authcontext } from '../context/Authcontext';
const Landing = () => {
  const { user } = useContext(Authcontext);

    return (
        <div className='flex flex-col justify-start items-center p-2 '>
            <img src={logo} className='rounded-md' />
            <div className="flex text-2xl">
                <Typed strings={['Elevate Your Thoughts, Blog with Us!', ' Where Words Find Their Perfect Home.','Unlock Your Writing Potential.', 'Your Story, Your Blog, Our Platform..']} backSpeed={100} typeSpeed={60} loop backDelay={30} className='font-bold' />
            </div>
            
                <p> <Link to={user?'/home':"/login"} >Click here and start blogging Now !!</Link>  </p>
            
        </div>
    )
}

export default Landing