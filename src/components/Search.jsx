import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Search = () => {
  const [keyword, setKeyword] = useState("")
  const [results, setResults] = useState([])
  const nav = useNavigate()
  const fetchSearchResults = async (value) => {
    await axios.post('http://localhost:8090/api/blogRoutes/search/', { keyword: value }).then((res) => {
      const blogs = res.data.filter((doc) => {
        const title = doc.title.toLowerCase()
        return title.includes(value)
      })
      setResults(blogs)
    })
  }
  const handleChange = (e) => {
    setKeyword(e.target.value)
    fetchSearchResults(e.target.value)
  }
  const redirect = (id)=>{
    nav(`/blog/${id}`);
    setResults([])
    setKeyword("")
  }
  return (
    <div className='flex relative flex-col'>
      <input
        type="text"
        value={keyword}
        className="input w-80"
        placeholder="Search Here"
        onChange={handleChange}
      />
      <div className='absolute bg-teal-200 text-black  rounded-sm top-14 w-80 '>
        {
        results.map((res) =><p  key={res._id} className='p-1 m-1 text-sm border-l-4 border-black hover:bg-teal-400 cursor-pointer' onClick={()=>redirect(res._id)} > {res.title}</p>)
        }
      </div>
    </div>
  )
}

export default Search