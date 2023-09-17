import axios from 'axios'
import React, { useState } from 'react'

const Reset = (props) => {
    const [pass, setPass] = useState({
        oldPassword: "",
        newPassword: ""
      })
      const changeHandler = (e) => {
        setPass((prev) => ({ ...prev, [e.target.name]: e.target.value }))
      }
    const resethandler = async (e) => {
        e.preventDefault();
        await axios.put("http://localhost:8090/api/authRoutes/resetPass/", pass, {
          withCredentials: true, credentials: 'include'}).then(
          props.setmodal(!props.modal)
        ).catch((err) => console.log(err.response.data))
      }
  return (
    <div className='fixed top-0 z-50 w-full h-screen grid place-items-center place-content-center translate-x-1/2  right-1/2  backdrop-blur-sm'>
              <div className={`w-[400px] h-[200px] self-center bg-white rounded-md grid place-items-center  p-2`}>
                <div className="text-3xl text-gray-800 font-bold ">
                  <input
                    type="text"
                    placeholder="Old Password"
                    id="oP"
                    name="oldPassword"
                    value={pass.oldPassword}
                    onChange={changeHandler}
                    className="leading-loose border-b-2 border-b-white mb-2 bg-transparent text-gray-800 h-11 "
                    required
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    id="nP"
                    name="newPassword"
                    value={pass.newPassword}
                    onChange={changeHandler}
                    className="leading-loose border-b-2 border-b-white mb-2 bg-transparent text-gray-800 h-11 "
                    required
                  />
                </div>
                <div className="flex w-full items-center justify-around">
                  <button
                    onClick={resethandler}
                    className="bg-slate-500 text-white p-2 m-1 w-1/4 rounded-md"
                  >
                    Reset 
                  </button>
                  <button
                    onClick={() => props.setmodal(!props.modal)}
                    className="bg-slate-500 text-white p-2 m-1 w-1/4 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
  )
}

export default Reset