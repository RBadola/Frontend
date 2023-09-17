import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Allblogs from "../components/Allblogs";

const Home = () => {
  const [err, seterr] = useState(null);
  const nav = useNavigate();
  const [BLOGS, setBlogs] = useState([])

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:8090/api/blogRoutes/blog/')
      setBlogs(res.data)
    } catch (errr) {
      console.log(errr)
    }
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  return (
    <div className="w-full   relative grid justify-center items-center   pb-7 ">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center  p-3 max-w-6xl">
        <Allblogs BLOGS={BLOGS} />

      </div>


    </div >
  )
};

export default Home;
