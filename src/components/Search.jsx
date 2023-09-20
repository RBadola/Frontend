import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Search = () => {
  const [keyword, setKeyword] = useState("")
  const [results, setResults] = useState([])
  
  const inputRef = useRef(null);
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Function to handle clicks outside the input field
  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      // Clicked outside the input field, so clear the input value
      setResults([]);
      setKeyword("");
    }
  };
  const fetchSearchResults = async (value) => {
    await axios.post('https://codsoft-backend.onrender.com/api/blogRoutes/search/', { keyword: value }).then((res) => {
      const blogs = res.data.filter((doc) => {
        const title = doc.title.toLowerCase()
        return title.includes(value)
      })
      setResults(blogs)
    })
  }
  const handleChange = (e) => {
    console.log(e);
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
        ref={inputRef}
        id='search'
        className="input md:w-80"
        placeholder="Search Here"
        onChange={handleChange}
      />
      <div className='absolute z-50 bg-black text-white  rounded-sm top-14 w-full md:w-80 '>
        {
        results.map((res) =><p  key={res._id} className='p-1 m-1 z-50 text-sm  hover:bg-white hover:text-gray-700 cursor-pointer' onClick={()=>redirect(res._id)} > {res.title}</p>)
        }
      </div>
    </div>
  )
}

export default Search