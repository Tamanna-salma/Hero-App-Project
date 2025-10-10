import React from 'react'
 import Banner from '../../components/Banner/Banner'

import useApps from '../../hooks/useApps'

import { Link } from 'react-router'
import AppCard from '../card/AppCard'

const Home = () => {
const{ allapps,setAllApps} = useApps()

    const featuredApps=allapps.slice(0,8);
 
  return (
    <div>
      <Banner></Banner> 
  
       <div className='bg-[#f5f5f5] '>
            <div className='text-center'>
                <h2 className=' text-xl md:text-4xl lg:text-5xl font-bold mb-7 '>Trending Apps</h2>
                <p className='text-sm text-gray-500 '>Explore All Trending Apps on the Market developed by us</p>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto px-9 space-x-5 space-y-5 py-7'>
            {
           featuredApps.map((singleApp)=><AppCard key={singleApp.id} singleApp={singleApp}></AppCard>)
           }
           </div>

            <div className=' text-center'>
                <Link to='./App' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gradient-to-r from-[#8046ea] to-[#9c5ff1] p-4" >Show All</Link>
            </div>
        </div>
    </div>
  )
}

export default Home