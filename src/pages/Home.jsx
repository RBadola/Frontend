import React, { useEffect, useState } from "react";
import axios from "axios";
import Allblogs from "../components/Allblogs";

const Home = () => {
  const [err, seterr] = useState(null);
  const [BLOGS, setBlogs] = useState([])

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('https://codsoft-backend.onrender.com/api/blogRoutes/blog/',{withCredentials:true,credentials: 'same-origin'})
      setBlogs(res.data)
    } catch (errr) {
      seterr(errr)
    }
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  return (
    <div className="w-full md:relative grid justify-center items-center px-5 py-3 ">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center  md:p-3  max-w-6xl">
        <Allblogs BLOGS={BLOGS} />

      </div>

    </div >
  )
};

export default Home;
