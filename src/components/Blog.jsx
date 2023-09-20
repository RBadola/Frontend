import React, { useEffect, useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { Link, useLocation, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Markdown from "./Mark";
import axios from "axios";
import Comments from "./Comments";

const Blog = () => {
  const [err,seterr]=useState(null)
  const {id} = useParams()
  const [blog, setBlog] = useState({})
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`https://codsoft-backend.onrender.com/api/blogRoutes/blog/${id}`)
      setBlog(res.data)
    } catch (errr) {
      seterr(errr)
    }
  }
   
  useEffect(() => {
    fetchBlogs();
  }, [id])

  return (
    <div className="blog ">

      <div className="mt-1 grid place-items-center lg:w-3/4 ">

        <div className="user-detail">

          <div>
            <h1 className="font-bold underline">by {blog.author?.name}</h1>
            <span>{blog.createdAt?.split("T")[0]}</span>
          </div>
        </div>
        <div className="w-full ">
          <p className="font-extrabold text-2xl md:text-4xl mb-1 md:leading-loose">
            {blog.title}
          </p>
          <div className="bg-white text-black p-2" >
            <Markdown markdown={blog.body} />
          </div>
          <Comments blogid={id} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
