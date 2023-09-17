import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../context/Authcontext";
import UserPosts from "./UserPosts";
import axios from "axios";
import Reset from "./Reset";

const Account = () => {
  const { logout, user } = useContext(Authcontext);
  const [modal, setmodal] = useState(false)

  const nav = useNavigate();
  const [l, setl] = useState(0)
  const submithandler = async (e) => {
    e.preventDefault();
    const logOut = await logout();
    if (logOut) {
      nav("/home");
    }
  };

  
  
  const blogL = (n)=>{
    setl(n.length)
  }
  return (
    <div className="h-full md:mt-20">
      {user && (
        <div className="flex flex-col md:flex-row justify-evenly  relative py-2 h-full">
          <div className="flex flex-col space-y-3 justify-center items-center md:justify-start md:items-start text-lg m-1 h-full   md:left-10">

            <div className="flex justify-start">
              <p className="font-bold ">Username :</p>
              <p className="px-1">{user.username}</p>
            </div>
            <div className="flex justify-start">
              <p className="font-bold ">Name :</p>
              <p className="px-1">{user.name}</p>
            </div>

            <div className="flex">
              <p className="font-bold ">Email :</p>
              <p className="px-1">{user.email}</p>
            </div>
            <div className="flex justify-start">
              <p className="font-bold ">blogs :</p>
              <p className="px-1">
              {
                l
              }
              </p>
            </div>
            <div>
              <Link to="/">
                <button
                  className="bg-slate-700 text-white p-1 m-1 rounded-sm hover:bg-slate-500"
                  onClick={submithandler}
                >
                  Logout
                </button>
              </Link>

              <button
                className="bg-slate-700 text-white p-1 m-1 rounded-sm hover:bg-slate-500"
                onClick={() => setmodal(!modal)}
              >
                Reset Password
              </button>

            </div>
          </div>
          <UserPosts blogL={blogL} />
          {
            modal && <Reset setmodal={setmodal} modal={modal}  />
           
          }
        </div>
      )}
      {user === null && (
        <div className="flex flex-col justify-start  items-center space-y-3  text-lg ">
          <p>Opps! You are not logged in.</p>
          <Link to="/login">
            <button className="bg-slate-700 text-white p-1 m-1 rounded-sm hover:bg-slate-500">
              Login
            </button>
          </Link>

        </div>
      )}
    </div>
  );
};

export default Account;
