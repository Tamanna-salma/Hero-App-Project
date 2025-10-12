import React from 'react'
import errorimg from '../../../src/assets/error-404.png'
const ErrorPage = () => {
  return (
    <div>
       
        <div  className=' mt-10 flex items-center justify-center container mx-auto text-center px-9 w-full md:w-3xl lg:w-3xl' >
          <img className='w-full md:w-80' src={errorimg} alt="" />
        </div>
    </div>
  )
}

export default ErrorPage