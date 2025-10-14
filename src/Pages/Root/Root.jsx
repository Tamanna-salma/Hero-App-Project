import React from 'react'
import { Outlet } from 'react-router'
import Navber from '../../components/header/Navber'
import Footer from '../../components/Footer/Footer'


const Root = () => {
  return (
    <div className='flex flex-col '>
      <Navber></Navber>
      <div className='flex-1'>
         <Outlet></Outlet>
      </div>
       <Footer></Footer>
    
    </div>
  )
}

export default Root