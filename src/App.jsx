import { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import NewBlog from './components/NewBlog'
import Blog from './components/Blog'
import Account from './components/Account'
import {
  RouterProvider, createBrowserRouter, Outlet
} from 'react-router-dom'
import { Authcontext } from './context/Authcontext'
import UserPosts from './components/UserPosts'

function App() {
  const { user } = useContext(Authcontext);
  const Layout = () => {
    return (<div className='relative' >
      <Navbar  />
      <Outlet />
    </div>)
  }
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/', // working
          element:  <Landing/>
        },
        {
          path: '/home',// working
          element:  <Home />
        },
        {
          path: '/blog/:id',// working
          element: <Blog />
        },
        {
          path: '/write',// write
          element:user? <NewBlog />:<Login/>
        },
        {
          path: '/my-account',// working
          element:user? <Account />:<Login/>
        },
        {
          path: '/my-posts', //working
          element:user?  <UserPosts />:<Login/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    }, {
      path: 'register',
      element: <Register />
    }

  ])

  return (
    <div className="app text-white">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
