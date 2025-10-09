import React from 'react'
import { Link } from 'react-router';

const AppCard = ({singleApp}) => {
      // console.log(singleApp);
  const{image,downloads,description,title,ratings,id}=singleApp ||{};
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
    <p>{description}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{downloads}</div>
      {/* {
        ratings.map(rating=><div className="badge badge-outline">{rating}</div>)
      } */}
    </div>
  </div>
</div>
 
    </div>
  )
}

export default AppCard