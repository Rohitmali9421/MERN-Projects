import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaCartPlus, FaRegUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { LiaCreativeCommonsSampling } from "react-icons/lia";
import { useAuth } from '../../Contexts/UserContext';

function Header() {
  const [menu, setMenu] = useState(false);
  const { auth, logout } = useAuth()
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <header className='w-full h-16 flex items-center border border-t-0 border-x-0 justify-center sticky top-0 backdrop-blur-xl z-50'>
      <nav className='px-4 flex items-center justify-between w-full max-w-[1300px]'>
        <div className="flex items-center sm:text-2xl text-lg">
          <FaBars className='mr-2 md:hidden cursor-pointer' onClick={toggleMenu} />
          <Link to="/" className='text-blue-500 font-bold flex items-center'>
            <LiaCreativeCommonsSampling className='mr-1' />
            PeakMart
          </Link>
        </div>
        <ul className={`md:flex font-serif items-center text-xs ${menu ? "flex flex-col absolute top-16 left-0 w-full bg-white h-screen" : "hidden"} md:static md:flex-row md:h-auto md:w-auto md:bg-transparent`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` ${isActive ? "text-orange-500 hover:text-orange-500" : "text-gray-500"} lg:mx-4 mx-2 font-semibold hover:text-gray-700`
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                ` ${isActive ? "text-orange-500 hover:text-orange-500" : "text-gray-500"} lg:mx-4 mx-2 font-semibold hover:text-gray-700`
              }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                ` ${isActive ? "text-orange-500 hover:text-orange-500" : "text-gray-500"} lg:mx-4 mx-2 font-semibold hover:text-gray-700`
              }>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                ` ${isActive ? "text-orange-500 hover:text-orange-500" : "text-gray-500"} lg:mx-4 mx-2 font-semibold hover:text-gray-700`
              }>
              Support
            </NavLink>
          </li>
          {
            auth?.user?.role === 1 && (
              <li>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-500 hover:text-orange-500" : "text-gray-500"} lg:mx-4 mx-2 font-semibold hover:text-gray-700`
                  }
                >
                  DASHBOARD
                </NavLink>
              </li>
            )
          }
        </ul>
        <div className='flex text-base sm:text-xl items-center'>
          <div className='flex bg-blue-50 justify-between rounded-lg focus-within:border-blue-700 border border-transparent sm:h-9 h-8 sm:w-40 w-32'>
            <input type="text" className='bg-transparent outline-none text-xs sm:text-sm font-semibold pl-3 w-24 sm:w-32' />
            <IoMdSearch className='h-full mr-1' />
          </div>
          <Link to="/cart" className='ml-2 sm:ml-3'>
            <FaCartPlus className='w-full h-full' />
          </Link>

          {/* {
            auth.user ?
              (<img id='1' className="ml-2 sm:ml-3  w-5  rounded-full"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
                src={auth.user.profilePhoto.url}
                alt="" />)
              :
              (<div
                className='ml-2 sm:ml-3 py-2'
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <FaRegUser />
              </div>)
          } */}
          <div
            className='ml-2 sm:ml-3 py-2'
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <FaRegUser />
          </div>
          {dropdown && (
            auth.user ? (<div
              className="absolute ml-16 sm:ml-28 top-5 mt-2 w-28 h-20 bg-transparent rounded-md "
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <button
                onClick={logout}
                className=" mt-10 block text-center font-bold text-white w-full  px-4 py-2 text-sm border  backdrop-blur-xl  bg-blue-500"
              >
                Logout
              </button>
            </div>) : (<div
              className="absolute ml-16 sm:ml-28 top-5 mt-2 w-28 h-20 bg-transparent rounded-md "
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              
              <Link to="/login"
                className=" mt-10 block text-center font-bold text-white w-full bg-blue-500  px-4 py-2 text-sm border   backdrop-blur-xl"
              >
                Login
              </Link>
            </div>)
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
