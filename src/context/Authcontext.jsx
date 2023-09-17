import axios from 'axios'
import React, { createContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
export const Authcontext = createContext()
const authStates = ({ children }) => {
    const [user, setuser] = useState(JSON.parse( localStorage.getItem("user") )|| null)
    const [err, seterr] = useState(null )
    const login = async (inputs) => {
        try {
            const res = await axios.post('http://localhost:8090/api/authRoutes/login/', inputs,{withCredentials: true, credentials: 'include'})
            setuser(res.data.user);
            seterr("")
            return true
        } catch (errr) {
            const arr = errr.response.data.message;
            seterr("")
            if (Array.isArray(arr)) {
                arr.map((mssg) => {
                seterr((prev) => [...prev, mssg.msg]);
              })
              }
            else {
              seterr(arr);
            }
            return false
          }
    }
    const logout = async () => {
        try {
            await axios.post('http://localhost:8090/api/authRoutes/logout/',{ },{withCredentials: true, credentials: 'include'})
            setuser(null)
            localStorage.removeItem("user")
            return true
        } catch (err) {
            console.log(err)
            return false
        }
    }
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(user));
       
    },[user])
    
    return <Authcontext.Provider value={{ login, user,  logout ,err}} >{children}</Authcontext.Provider>
}
export default authStates