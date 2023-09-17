import React, { useRef, useContext, useState, useMemo } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../context/Authcontext";
import Markdown from "./Mark";
const NewBlog = () => {
  const { user } = useContext(Authcontext);
  const [preview, setpreview] = useState(false)

  const [inputs, setinputs] = useState({
    title: "",
    body: "",
  }     
  );
  const [err, seterr] = useState(null);

  const changeHandler = (e) => {
    setinputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const nav = useNavigate();


  const blogHandler = async (e) => {
    e.preventDefault();
    const formData = {
      "title": inputs.title,
      "body": inputs.body,
      }
    await axios.post(
      "http://localhost:8090/api/loggedUser/createBlog",
      formData,{
        withCredentials: true, credentials: 'same-origin'}
    )
      .then(() => nav('/home'))
      .catch((err) => {
        const arr = err.response.data.message;
        seterr("")
        if (Array.isArray(arr)) {
          arr.map((mssg) => {
            seterr((prev) => [...prev, mssg.msg]);
          })
        }
        else {
          seterr(arr);
        }
      })

  };

  return (
    <div className="flex flex-col md:flex-row  w-full  justify-center items-center md:items-start pb-7 py-2 md:px-4 ">
      {user && <>
        <div className="flex flex-col w-11/12 md:w-2/3 mx-1 ">
          {err
            &&
            <div className='absolute z-50 w-full  grid place-items-center place-content-center translate-x-1/2  right-1/2 '>
              <div className={`w-[400px] h-[200px] self-center bg-red-400 rounded-md grid place-items-center`}>
                
                  {
                  Array.isArray(err) ?
                    err.map((m, i) => <p className="text-3xl text-gray-800 font-bold " key={i} >{m}</p>) :
                    <p className="text-3xl text-gray-800 font-bold " >{err}</p>
                }
                <button
                onClick={()=>seterr(null)}
                  className="bg-slate-500 text-white p-2 m-1 w-1/4 rounded-md"
                >
                  OK
                </button>
              </div>
            </div>

          }

          <div className="w-full flex flex-col bg-gray-600 p-1">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Blog Title Here.."
              value={inputs.title}
              onChange={changeHandler}
              className="text-black text-4xl font-extrabold  leading-loose p-1 mb-2 mt-1"
            />

            <div className="bg-white font-Bold  mb-1 justify-around p-1 text-black flex  items-center cursor-pointer">

              <div>
                <button className="p-1 text-xl  rounded-l-md hover:bg-slate-500 hover:text-white bg-blue-300 border font-bold"
                  onClick={() => setpreview(false)} >RAW</button>
                <button className="p-1 text-xl rounded-sm rounded-r-md hover:bg-slate-500 hover:text-white bg-amber-300 border font-bold"
                  onClick={() => setpreview(true)}>PREVIEW</button>
              </div>
            </div>
            {
              preview ?
                <div className="text-white text-2xl  leading-loose p-1 mb-2 mt-1">
                  <Markdown markdown={inputs.desc} />
                </div> :
                <textarea
                  type="text"
                  name="body"
                  id="desc"
                  rows='7'
                  placeholder="Markdown Format Is Used to Write blog. So Please Refer To Its Docs To Write Better Blog."
                  value={inputs.body}
                  onChange={changeHandler}
                  className="text-black text-2xl  leading-loose p-1 mb-2 mt-1"

                />
            }

            <button
              className="bg-gradient-to-tr from-red-500 to-yellow-600 px-2 py-1 mx-1 text-white rounded-sm self-center"
              onClick={blogHandler}
            >
              Post
            </button>
          </div>
        </div>

      </>}{
        user === null &&
        <div className="flex flex-col justify-start  items-center space-y-3  text-lg ">
          <p>Opps! You are not logged in.</p>
          <Link to="/login">
            <button className="bg-slate-700 text-white p-1 m-1 rounded-sm hover:bg-slate-500">
              Login
            </button>
          </Link>
        </div>

      }
    </div>
  );
};

export default NewBlog;
