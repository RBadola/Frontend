import React, { useContext} from "react";
import { Link} from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { Authcontext } from "../context/Authcontext";
import Search from "./Search";
const Navbar = () => {

  const { user } = useContext(Authcontext);

  return (
    <div className="flex justify-around items-center gap-x-1 md:gap-x-4 h-18 md:h-24  md:sticky mt-1 md:top-0 z-50 w-full px-2 md:px-4 backdrop-blur-md">
      <p className="md:w-full text-lg md:text-3xl font-extrabold text-white hover:no-underline">
        <Link to="/home" className="hover:no-underline" >WriteON</Link>
      </p>
      <Search/>
      {user ? (
        <Link
          to="/my-account"
          className="grid place-items-center hover:bg-purple-700 p-1 md:p-2 rounded-md text-white hover:no-underline"
        >
          <FaUserCircle className="text-2xl md:text-base" /> <p className="hidden md:block">Account</p>
        </Link>
      ) : (
        <Link to="/login" className="p-2 text-lg font-bold bg-gray-600 rounded-md text-white hover:no-underline">
          Login
        </Link>
      )}
      

      
    </div>
  );
};

export default Navbar;
