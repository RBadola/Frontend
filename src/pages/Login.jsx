import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Authcontext } from '../context/Authcontext'

const Login = () => {
    const {  login,err } = useContext(Authcontext)
    const nav = useNavigate()
    const [inputs, setinputs] = useState({
        email: '',
        password: ''
    })
    const changeHandler = (e) => {
        setinputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    
  
    const submithandler = async(e) => {
        e.preventDefault();
        const loginSuccess = await login(inputs)
        if(loginSuccess){
            nav("/home")
        } 
    }
    return (
        <div className='fixed top-0  flex  items-center justify-center  md:h-screen w-full'>
            <form className='flex flex-col border p-3 w-4/5 md:w-1/4   justify-center  relative shadow-[5px_10px_0_0px] shadow-slate-600'>

                <p className=' bg-[#252525] text-white text-2xl -top-[14px] absolute '>LOGIN</p>
                <input
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              value={inputs.email}
              onChange={changeHandler}
              className="leading-loose border-b-2 border-b-white mt-3 mb-2 bg-transparent text-white h-11 "
              required
            />
                   <input
              type="password"
              placeholder="Password"
              id="pass"
              name="password"
              value={inputs.password}
              onChange={changeHandler}
              className="leading-loose border-b-2 border-b-white mb-2 bg-transparent text-white h-11 "
              required
            />
                
          <div className="text-red-400 text-sm p-2 ml-1" id="error">
           {
            Array.isArray(err)?
            err.map((m,i) => <p key={i} >{m}</p>):
            <p>{err}</p>
            }
          </div>
        
                <button className='p-2 bg-red-400' onClick={submithandler} onTouchStart={submithandler}>Login</button>

                <p>Don't have a account</p>
                <Link to='/register' className='underline'>Register</Link>
            </form>
        </div>
    )
}

export default Login