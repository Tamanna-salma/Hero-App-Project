import React from 'react'
import { Link, NavLink } from 'react-router'
import { FaGithub } from "react-icons/fa"
import Logo from '../../../src/assets/logo.png'

const Navber = () => {
  const links = <>
    
    <div className='flex flex-col md:flex-row items-center gap-1 lg:gap-3'>
      <li>
      <NavLink to='./' className={({ isActive }) =>
        isActive ? 'text-purple-600 border-b-2  border-purple-600  text-xl font-bold' : 'text-gray-600 text-xl font-bold hover:text-purple-600'
      }
      >Home</NavLink>
    </li>
    <li>
      <NavLink to='./app' className={({ isActive }) =>
        isActive ? 'text-purple-600 border-b-2  border-purple-600  text-xl font-bold' : 'text-gray-600 text-xl font-bold hover:text-purple-600'
      }
      >Apps</NavLink>
    </li>
    <li>
      <NavLink to='./Installition' className={({ isActive }) =>
        isActive ? 'text-purple-600 border-b-2 border-purple-600  text-xl font-bold' : 'text-gray-600 text-xl font-bold hover:text-purple-600'
      }
      >Installation</NavLink>
    </li>
    </div>

  </>
  
  return (
    <div className="navbar bg-base-100 shadow-sm px-1 lg:px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

            {links}
          </ul>
        </div>
        <div className='flex gap-3 m-3 lg:m-3'>
          <Link to='./'>  <img className='w-7 lg:w-7' src={Logo} alt="" /></Link>
          <h2 className="text-sm lg:text-xl font-bold hidden md:flex text-[#8046ea]">HERO.IO</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='https://github.com/dashboard' className="btn bg-gradient-to-r from-[#8046ea] to-[#9c5ff1]  text-white"><FaGithub /> Contribute</Link>
      </div>
    </div>
  )
}

export default Navber