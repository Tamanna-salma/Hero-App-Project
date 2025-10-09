import React from 'react'
import App from '../../Pages/App'
import { Link } from 'react-router'


const TrendingApp = ({ apps }) => {
    return (
        <div className='bg-[#f5f5f5] '>
            <div className='text-center'>
                <h2 className=' text-xl md:text-4xl lg:text-5xl font-bold mb-7 '>Trending Apps</h2>
                <p className='text-sm text-gray-500 '>Explore All Trending Apps on the Market developed by us</p>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto px-9 space-x-5 space-y-5 py-7'>
            {
           apps.map((singleApp)=><App key={singleApp.id} singleApp={singleApp}></App>)
           }
           </div>

            <div className=' text-center'>
                <Link to='./App' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Show All</Link>
            </div>
        </div>
    )
}

export default TrendingApp