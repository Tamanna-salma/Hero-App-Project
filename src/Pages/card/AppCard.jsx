import React from 'react'
import { Link } from 'react-router';
import { TiStar } from "react-icons/ti";
import { HiDownload } from "react-icons/hi";
import Logo from '../../../src/assets/logo.png';

const AppCard = ({singleApp}) => {
  const{image,downloads, ratingAvg ,companyName,title,id}=singleApp ||{};

{/* <div className='text-5xl font-bold text-fuchsia-600 text-center container mx-auto px-9 py-7'>
               <p> loading.....</p>
                <div>
                    <img className='w-12 text-center mt-6' src={Logo}alt="" />
                </div>
            </div> */}
  return (
    <div>
   <div  className="card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out  p-4">
  <figure className='bg-gray-200 w-2/3  mx-auto p-4'>
   <Link to={`/App/${id}`}><img className='' src={image} alt="Shoes" /></Link> 
  </figure >
  <div className="card-body">
    <h2 className="card-title">
     { title}
     
    </h2>
      <p>{companyName}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline border-gray-500 flex text-green-500 "> <HiDownload className='text-green-500 '/>{downloads}</div>
     <div className="badge badge-outline"><TiStar className='text-red-500' />{ratingAvg}</div>
    </div>
  </div>
</div>

    </div>
  )
}

export default AppCard