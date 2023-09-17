
import {  Link } from 'react-router-dom'
const Allblogs = ({ BLOGS }) => {
    return (

        BLOGS.map((blog) => {
            return (
                <div className='px-2 py-3  rounded-lg bg-cyan-500 text-white shadow-md shadow-orange-500 grid place-items-center' key={blog._id} >

                    <div className='self-center'>
                        <p className='font-extrabold'>{blog.title}</p>
                        <p>{blog.createdAt?.split("T")[0]}</p>
                    </div>

                    <p className='p-3'>
                        {blog.body.slice(0,50)+ "..."}
                    </p>
                    <p>by {blog.author.name}</p>
                    <Link to={`/blog/${blog._id}`}>
                        <button
                            className="bg-red-400 p-1 rounded tracking-wider "
                        >
                            Read More..
                        </button>
                    </Link>
                </div>)
        })

    )
}
export default Allblogs