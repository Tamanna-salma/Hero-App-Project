import React from 'react'
import { Outlet } from 'react-router'
import Navber from '../../components/header/Navber'
import Footer from '../../components/Footer/Footer'


const Root = () => {
  return (
    <div>
      <Navber></Navber>
       <Outlet></Outlet>
       <Footer></Footer>
    
    </div>
  )
}

export default Root