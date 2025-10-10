import React from 'react'
import { useParams } from 'react-router'
import useApps from '../../hooks/useApps'
import download from '../../../src/assets/icon-downloads.png'
import rating from '../../../src/assets/icon-ratings.png'
import view from '../../assets/icon-review.png'
const AppDetails = () => {
   
    const {id}=useParams()
 const{allapps,loading,error}= useApps()
const detail =allapps.find(ap=> String(ap.id) ===id)
if(loading) return <p className='text-3xl font-bold text-fuchsia-600 text-center'>loading.....</p>
 const{image,downloads,description,title,ratings,reviews}=detail ;
  return (
   <div className='bg-[#f5f5f5] '>  
 
<div className="card-body container mx-auto px-9 space-x-5 space-y-5 py-7  border-2">
    <div className='flex flex-col md:flex-row lg:flex-row  gap-20'>
        <div>
             <img className='w-56 rounded-xl' src={image} alt="" />
        </div>
        <div>
             <h2 className="card-title">
     { title}</h2>
     <p>Developed by productive.io</p>
      
         <hr className="border-t-2 border-gray-300 w-full md:w-2xl   my-6 rounded-full" />

         <div className='grid grid-cols-1 md:grid-cols-3'>
    <div className='mb-4'>
        <p className='text-sm lg:text-xl  text-gray-500 px-2 space-y-5 md:space-y-3 lg:space-y-3'>Downloads</p>
    <div className='flex gap-6 mt-2'>
        <h2 className='text-xl md:text-3xl lg:text-4xl font-bold'>{downloads}</h2>
        <img src={download} alt="" />
    </div>
    </div>

    <div className='mb-4'>
        <p className=' text-sm lg:text-xl text-gray-500 px-2 space-y-5 md:space-y-3 lg:space-y-3'>Average Ratings</p>
    <div className='flex gap-6 mt-2'>
        <h2 className='text-xl md:text-3xl lg:text-4xl font-bold'>23</h2>
        <img src={rating} alt="" />
    </div>
    </div>

<div>
    <p className='text-sm lg:text-xl text-gray-500 px-2 space-y-5 md:space-y-3 lg:space-y-3'>Total Reviews</p>
    <div className='flex gap-6 mt-2'>
        <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold'>{reviews}</h2>
        <img src={view} alt="" />
    </div> 
</div>

   </div>
        </div>
     
   
    </div>
        
</div>

    </div>
  )
}

export default AppDetails