import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { LiaCreativeCommonsSampling } from "react-icons/lia";
function Header() {
  return (
    <header className='w-full  h-16 flex items-center border justify-center'>
      <nav className='px-4 flex items-center justify-between w-full max-w-[1300px]' >

        <div className="flex items-center ">
          <FaBars className='mr-4 text-3xl md:hidden' />
          <Link to="/" className=' text-blue-700 text-2xl font-bold flex items-center'>
            <LiaCreativeCommonsSampling className=' mr-1' />
            PeakMart .
          </Link>
        </div>

        <div className='hidden md:flex font-serif' >
          <NavLink
            to="/login"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-700" : "text-gray-700"} mx-4 font-medium `
            }>
            HOME
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-700" : "text-gray-700"} mx-4  `
            }>
            ABOUT
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-700" : "text-gray-700"} mx-4  `
            }>
            PRODUCTS
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-700" : "text-gray-700"} mx-4  `
            }>
            SUPPORTS
          </NavLink>
        </div>

        <div className='flex text-xl'>
          <div className='flex bg-blue-100  rounded-lg '>
            <input type="text" className='bg-transparent' />
            <IoMdSearch className='mx-2 text-xl w-full h-full' />
          </div>

          <Link className='mx-4 '>
            <FaCartPlus className='text-xl w-full h-full' />
          </Link>
          <div className='py-2'>
            <FaRegUser />
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Header
