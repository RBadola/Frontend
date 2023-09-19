
import {  Link } from 'react-router-dom'
const Allblogs = ({ BLOGS }) => {
    return (

        BLOGS.map((blog) => {
            return (
                <div className='group px-2 py-3  rounded-lg bg-cyan-700 text-white shadow-md hover:shadow-[0_0_0_2px_white]  grid place-items-center w-full' key={blog._id} >

                    <div className='place-self-center'>
                        <p className='font-extrabold md:text-xl'>{blog.title}</p>
                        <p className='font-thin text-sm'>{blog.createdAt?.split("T")[0]}</p>
                    </div>

                    <p className=' place-self-start'>
                        {blog.body.slice(0,50)+ "..."}
                    </p>
                    <p className='m-1'>by <span className='font-semibold capitalize self-start'>{blog.author.name}</span> </p>
                    <Link to={`/blog/${blog._id}`}>
                        <button
                            className="bg-red-400 p-1 rounded tracking-wider group-hover:bg-red-600 hover:bg-red-600"
                        >
                            Read More..
                        </button>
                    </Link>
                </div>)
        })

    )
}
export default Allblogs