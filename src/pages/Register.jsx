import React, { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [err, seterr] = useState("");
  const [inputs, setinput] = useState({
    name: "",
    useremail: "",
    userpassword: "",
    username: "",
  });


  //  handle submission of data
  const nav = useNavigate();
  const submithandler = async (e) => {
    e.preventDefault();
    const user = {
      name: inputs.name,
      email: inputs.useremail,
      username: inputs.username,
      password: inputs.userpassword
    }
    try {
      // console.log(user)
      const res = await axios.post("http://localhost:8090/api/authRoutes/register/", user);
      // console.log(res.data.message);
      nav('/login')
    } catch (errr) {
      const arr = errr.response.data.message;
      if (Array.isArray(arr)) {
        seterr("")
        arr.map((mssg) => {
          seterr((prev) => [...prev, mssg.msg]);
        })
      }
      else {
        seterr(arr);
      }
      // console.log(err);
    }
  };

  // update input value
  const changeHandler = (e) => {
    setinput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  return (
    <div className="flex flex-col items-center justify-center w-full md:h-full">

      <div className="   mt-1  min-w-4/5 md:w-1/4 flex flex-col border p-3 relative shadow-[5px_10px_0_0px] shadow-slate-600">
        <p className="absolute top-0 -translate-y-6 p-1 bg-[#252525] text-2xl leading-7 ">
          Register
        </p>


        <div className="flex flex-col p-3 justify-center  ">
          <input
            type="text"
            placeholder="Email"
            id="email"
            name="useremail"
            value={inputs.useremail}
            onChange={changeHandler}
            className="leading-loose border-b-2 border-b-white mb-2 bg-transparent text-white h-11 "
            required
          />

          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={inputs.name}
            onChange={changeHandler}
            className="leading-loose border-b-2 border-b-white mb-2 bg-transparent text-white h-11 "
            required
          />

          <input
            type="text"
            placeholder="User name"
            id="uname"
            name="username"
            value={inputs.username}
            onChange={changeHandler}
            className="leading-loose border-b-2 border-b-white mb-2 bg-transparent text-white h-11 "
            required
          />

          <input
            type="password"
            placeholder="Password"
            minLength="8"
            maxLength="12"
            id="pass"
            name="userpassword"
            value={inputs.userpassword}
            onChange={changeHandler}
            className="leading-loose border-b-2 border-b-white mb-2 bg-transparent text-white h-11"
            required
          />
        </div>



          {
        <div className="text-red-400 text-sm p-2 ml-1 " id="error">
            {
            Array.isArray(err)?
            err.map((m,i) => <p key={i} >{m}</p>):
            <p>{err}</p>
            }
        </div>
          }


        <button
          className="p-2 bg-red-400"
          type="submit"
          id="register"
          onClick={submithandler}
        >
          Register
        </button>

        <div className="self-center">
          <p>Already have a account

            <Link to="/login" className="underline ml-2">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>

  );
};
export default Register;
