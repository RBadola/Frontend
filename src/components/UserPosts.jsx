import React, { useContext, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MdDelete, MdOutlineCreate } from 'react-icons/md'
const UserPosts = (props) => {
    const [BLOGS, setBlogs] = useState([])
    const [err, seterr] = useState(null)
    const nav = useNavigate()
    const fetchBlogs = async () => {
        try {
            const res = await axios.post('https://codsoft-backend.onrender.com/api/loggedUser/myposts/', {}, { withCredentials: true, credentials: 'same-origin' })
            setBlogs(res.data.posts)
            props.blogL(res.data.posts)
        } catch (err2) {
            seterr(err2.response.data)
        }
    }
    useEffect(
        () => {
            fetchBlogs()
        }, []
    )

    const deleteBlog = async (id) => {

        try {
            const res = await axios.post(`https://codsoft-backend.onrender.com/api/loggedUser/deletePost/${id}`, {}, { withCredentials: true, credentials: 'same-origin' })
            fetchBlogs()
            seterr(res.data)
        } catch (err2) {
            seterr(err2.data)
        }
    }

    return (
        <div className='flex flex-col gap-y-4 m-1 max-w-6xl p-6 md:p-0' >
            {
                BLOGS === undefined || BLOGS.length === 0 ? <></> : <button className="bg-red-400 p-1 rounded tracking-wider ml-1 self-end flex justify-center items-center" onClick={() => nav('/write')} >New <MdOutlineCreate /> </button>
            }
            {
                BLOGS === undefined || BLOGS.length === 0 ? <div className='md:self-start'> <span>Write your first blog</span> <button className="bg-red-400 p-1 rounded tracking-wider ml-1 " onClick={() => nav('/write')} >New</button> </div> :

                    BLOGS?.map((blog) => {

                        return (
                            <div className='px-3 py-2 md:p-6  rounded-lg   bg-cyan-700 text-white shadow-md  shadow-white flex flex-col' key={blog?._id}>

                                <div className='flex w-full'>
                                    <p className='font-bold md:font-extrabold w max-w-2xl leading-6 text-xl md:text-2xl mb-1'>{blog?.title}</p>
                                    <button className='bg-red-400 p-1 m-1 rounded self-center ' onClick={() => deleteBlog(blog?._id)} ><MdDelete /></button>
                                    <button>View</button>
                                    <button>Edit</button>
                                </div>
                                <div className='max-h-80'>
                                    <span>{blog?.createdAt?.split("T")[0]}</span>
                                    <div className='max-h-64 overflow-auto bg-slate-200 rounded-sm max-w-2xl text-gray-700 p-2 mr-2 text-clip break-words'>
                                        <ReactMarkdown className='w-full'>
                                            {blog?.body}
                                        </ReactMarkdown>
                                    </div>

                                    {/* <div className='flex md:flex-col text-2xl my-1'> */}

                                    {/* <button className='bg-purple-400 p-1 m-1 rounded self-start md:mt-2 ' ><FiEdit /></button> */}

                                    {/* </div> */}
                                </div>
                            </div>)
                    })


            }
        </div >
    )
}
export default UserPosts