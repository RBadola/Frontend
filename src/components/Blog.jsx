import React, { useEffect, useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { Link, useLocation, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Markdown from "./Mark";
import axios from "axios";
import Comments from "./Comments";
import Loading from "../ui/Loading";
import { twMerge } from "tailwind-merge";

const Blog = () => {
  const [err,seterr]=useState(null)
  const {id} = useParams()
  const [loading, setloading] = useState(false)
  const [blog, setBlog] = useState({})
  const fetchBlogs = async () => {
    try {
      setloading(true)
      const res = await axios.get(`https://codsoft-backend.onrender.com/api/blogRoutes/blog/${id}`,{},{withCredentials: true, credentials: 'include'})
      setBlog(res.data)
      setloading(false)
    } catch (errr) {
      seterr(errr)
      setloading(true)
    }
  }
   
  useEffect(() => {
    fetchBlogs();
  }, [id])

  return (
    <div className="blog ">
      <div className={twMerge("mt-1 grid place-items-center lg:w-3/4 ")}>

        <div className="user-detail">

          <div>
            <h1 className="font-bold underline">By {blog.author?.name}</h1>
            <span>{blog.createdAt?.split("T")[0]}</span>
          </div>
        </div>
        <div className="w-full ">
      {!!loading && <Loading bgc="bg-teal-800"/>}
          <p className="font-extrabold text-2xl md:text-4xl mb-1 md:leading-loose">
            {blog.title}
          </p>
          <div className={twMerge("bg-white text-black p-2",loading && "h-96")} >
            <Markdown markdown={blog.body} />
          </div>
          {!loading &&
            <Comments blogid={id} />}
        </div>
      </div>
    </div>
  );
};

export default Blog;
