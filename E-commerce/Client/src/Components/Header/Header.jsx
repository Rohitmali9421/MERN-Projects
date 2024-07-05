import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='w-full  h-16 flex items-center justify-between border '>
      <nav className='px-8 flex items-center justify-between w-full ' >
        <div className="">
          <Link to="/">
            Rohit
          </Link>
        </div>
        <div >
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-700" : "text-gray-700"} mx-4 font-bold `
            }>
            HOME
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-700" : "text-gray-700"} mx-4 font-bold `
            }>
            ABOUT
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-700" : "text-gray-700"} mx-4 font-bold `
            }>
            PRODUCTS
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-700" : "text-gray-700"} mx-4 font-bold `
            }>
            SUPPORTS
          </NavLink>
        </div>
        <div>

        </div>
      </nav>
    </header>
  )
}

export default Header
