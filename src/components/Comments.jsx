import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ImArrowRight } from "react-icons/im"

const Comments = ({ blogid, }) => {
  const [value, setvalue] = useState({
    comment: "",
  })
  const [comments, setcomments] = useState([])
  const changeHandler = (e) => {
    setvalue({ [e.target.name]: e.target.value })
  }
  const commentHandler = async (e) => {
    e.preventDefault()
    const comment = {
      comment: value.comment,
      blogid: blogid
    }
    await axios.post('http://localhost:8090/api/loggedUser/addComment/', comment, { withCredentials: true, credentials: 'same-origin' })
    .then(() => {
      fetchComments();
      setvalue({comment:""}) 
  })
  }
  const fetchComments = async () => {
    try {
      const res = await axios.get(`http://localhost:8090/api/blogRoutes/getComments/${blogid}`)
      setcomments(res.data)
    } catch (errr) {
      console.log(errr)
    }
  }
  useEffect(() => {
    fetchComments();
  }, [])
  return (
    <div className='w-full bg-yellow-50 mt-2 rounded-sm text-black p-2'>
      <p>Comments </p>
      <div className='border border-orange-400  border-spacing-2 p-1  rounded-md '>
        
          {
            comments.map((com) => {
              return (
                <div key={com._id}>
                  <p className='text-sm'> <span >{com?.author?.name}  </span> <span className='text-gray-500 '> {com?.createdAt?.split("T")[0]}</span> </p>
                  <p>{com.comment}</p>
                  <hr className='bg-orange-400' />
                </div>
              )
            })
          }
        
      
      <div className='flex justify-center  items-center mt-1 '>
        <input
          type="text"
          placeholder=" Add your comment"
          name="comment"
          value={value.comment}
          onChange={changeHandler}
          className="leading-loose  w-full 2 p-1 mr-1  text-gray-800  border border-orange-400  rounded-md "
          required
        />
        <button onClick={commentHandler} className='text-orange-400  border border-orange-400  rounded-md p-1 text-3xl hover:text-orange-600'><ImArrowRight /></button>
      </div>
      </div>
    </div>
  )
}

export default Comments