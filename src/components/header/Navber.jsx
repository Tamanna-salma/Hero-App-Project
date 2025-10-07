import React from 'react'
import { Link } from 'react-router'
import { FaGithub } from "react-icons/fa"
import Logo from '../../../../Hero-App-Project/src/assets/logo.png'

const Navber = () => {
   const links =<>
<Link to='./'><li className='m-2 font-bold text-xl text-[#8046ea]'>Home</li></Link>
<Link to='./about'><li className='m-2 font-bold text-xl'>Apps</li></Link>
<Link to='./readlist'><li className='m-2 font-bold text-xl'>Installation</li></Link>
  </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
    <div className='flex m-1 lg:m-3'>
      <img className='w-5 lg:w-7' src={Logo} alt="" />
       <a className="text-sm lg:text-xl font-bold text-[#8046ea]">HERO.IO</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-gradient-to-r from-[#8046ea] to-[#9c5ff1] text-white"><FaGithub /> Contribute</a>
  </div>
</div>
  )
}

export default Navber