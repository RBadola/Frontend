import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Search = () => {
  const [keyword, setKeyword] = useState("")
  const [results, setResults] = useState([])
  // const [BLOGS, setBlogs] = useState([{ "_id": "6507e320aa2ebcca62783e15", "title": "Interviewer: Can (a==1 && a==2 && a==3) Ever Evaluate to ‘true’ in JavaScript?", "body": "But when I saw his “smile”, a feeling of **“you must not know the answer”** crossed through my mind. It was definitely not an easy problem to solve.\n\nThe article will give 6 professional answers. Let’s start right away.\n# Solution 1: valueOf && toString\n\nThe first solution is very simple, and I’m sure you’ll have an idea once you’ve read this code.", "like": 0, "dislike": 0, "comments": ["6507e32baa2ebcca62783e20", "6509c814ba2c01bf7d8d11b4"], "createdAt": "2023-09-18T05:41:52.295Z", "updatedAt": "2023-09-19T16:11:00.859Z", "__v": 2, "author": { "_id": "650052a3ded253c50913f0ce", "name": "raghuvender" } }, { "_id": "6504d9d70cab17c24329d1a5", "title": "15 Killer Websites for Web Developers", "body": "As a front-end development engineer, you must have used many tools to increase your productivity. They can be websites, documentation, or a JavaScript library.\n\nToday I want to share with you 15 interesting websites and I am sure you will like them.\n\n# **1. JavaScript Regular Expression Visualizer**\n\nAre you the kind of person who doesn’t want to learn regex expressions because it looks complicated? Don’t worry, I used to be the same but not anymore. A visualization tool makes regular expressions easier to understand.\n\n# **2. DevDocs**\n\nThis website has documentation for various projects and also supports offline use.[I'm an inline-style link](https://www.google.com)", "like": 0, "dislike": 0, "comments": ["6506ddd4548751aae021eb7d", "6506ddfd548751aae021eb9e", "6506de2f548751aae021ebb4", "65075f95330248d1fa82845b"], "createdAt": "2023-09-15T22:25:27.009Z", "updatedAt": "2023-09-17T20:20:37.643Z", "__v": 4, "author": { "_id": "650052a3ded253c50913f0ce", "name": "raghuvender" } }, { "_id": "6504d76d0cab17c24329d184", "title": "Interview: Can You Stop “forEach” in JavaScript?", "body": "Interviewer: **Can you stop a forEach loop in JavaScript?** This is a question I was once asked during an interview, and my initial response was,**“No, I can’t do that.”**\nFrustrated with the outcome, I asked the interviewer, “Why? Is it actually possible to stop a forEach loop in JavaScript?”\n\nBefore the interviewer could answer, I took a moment to explain my understanding of why we couldn’t directly stop a forEach loop in JavaScript.\n# Is my answer correct?\n\nMy friends, what numbers will be output by the following code?\n\nWill it output just one number or more?\n\nYes, it will output ‘0’, ‘1’, ‘2’, ‘3.        `const array = [ -3, -2, -1, 0, 1, 2, 3 ]\narray.forEach((it) => {\n  if (it >= 0) {\n    console.log(it)\n    return // or break\n  }\n})`", "like": 0, "dislike": 0, "comments": ["6504da7e0cab17c24329d1e9", "6507e3f8aa2ebcca62783e32"], "createdAt": "2023-09-15T22:15:09.820Z", "updatedAt": "2023-09-18T05:45:28.621Z", "__v": 2, "author": { "_id": "650052a3ded253c50913f0ce", "name": "raghuvender" } }, { "_id": "65043b74b4d0c9f7e8835ac4", "title": "Bye-bye useState & useEffect: Revolutionizing React Development!", "body": "Many developers continue to use the useState and useEffect hooks to update states, but I have not been fond of this approach. The issue is that it causes the component to mount, remount, and unmount simultaneously, leading to unexpected behavior. As a result, when logging something into the console, you may see the result repeated three times.", "like": 0, "dislike": 0, "createdAt": "2023-09-15T11:09:40.786Z", "updatedAt": "2023-09-15T18:18:52.315Z", "__v": 8, "author": { "_id": "64ece06908aafae9e56a3bd5", "name": "Raghav@" }, "comments": ["650474575d8a4539f749024e", "65049b7b0cab17c24329d04f", "65049e5f0cab17c24329d0ba", "65049ece0cab17c24329d0db", "65049ed80cab17c24329d0eb", "65049fd70cab17c24329d129", "65049ffa0cab17c24329d13d", "6504a00c0cab17c24329d147"] }])

  const nav = useNavigate()
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