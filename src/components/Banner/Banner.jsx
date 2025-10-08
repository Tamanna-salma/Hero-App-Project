import React from 'react'
import bannerImg from '../../../src/assets/hero.png'
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className='bg-[#f5f5f5] py-10'>
        <div className='text-center'>
            <h2 className='font-bold text-xl md:text-4xl lg:text-4xl'>We Build </h2>
            <span className='text-[#8046ea] text-xl md:text-4xl lg:text-4xl font-bold'>Productive <span className='text-black text-xl md:text-4xl lg:text-4xl font-bold'>Apps</span></span>
            <p className='w-full mt-5 md:w-2xl lg:w-2xl mx-auto'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='space-x-4 md:space-x-7 lg:space-x-7 mt-6'>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gray-200 hover:bg-gray-100 "><FaGooglePlay />Google Play</button>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gray-200 hover:bg-gray-100"><FaAppStoreIos />App Store</button>

            </div>
        </div>
        <div className='mt-7'>
            <img className=' mx-auto' src={bannerImg } alt="" />
            
        </div>
        <div className='bg-gradient-to-r from-[#8046ea] to-[#9c5ff1] text-center py-9'>
                <p className='font-bold text-sm md:text-4xl lg:text-4xl text-white'>Trusted by Millions, Built for You</p>
                <div className=' m-6 lg:m-8 py-6 flex flex-col md:flex-row lg:flex-row items-center justify-evenly '>
                    <div className=''>
                        <p className='text-purple-300 mb-3'>Total Downloads</p>
                        <h2 className='text-4xl font-bold text-white mb-3'>29.6M</h2>
                        <p className='text-purple-300 mb-3'>21% more than last month</p>
                    </div>

                    <div className=''>
                        <p className='text-purple-300 mb-3'>Total Reviews</p>
                        <h2 className='text-4xl font-bold text-white mb-3'>906K</h2>
                        <p className='text-purple-300 mb-3'>46% more than last month</p>
                    </div>

                    <div className=''>
                        <p className='text-purple-300 mb-3'>Active Apps</p>
                        <h2 className='text-4xl font-bold text-white mb-3'>132+</h2>
                        <p className='text-purple-300 mb-3'>31 more will Launch</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Banner