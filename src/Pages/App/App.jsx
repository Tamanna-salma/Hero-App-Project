import React, { useEffect, useState } from 'react'
import Logo from '../../../src/assets/logo.png';
import useApps from '../../hooks/useApps';
import AppCard from '../card/AppCard';
import { Link } from 'react-router';

const App = () => {
 
    const { allapps,loading } = useApps();
const [search ,setSearch]=useState('')
    
const [searchedApp, setSearchedApp] = useState([]);


useEffect(()=>{

const term = search.trim().toLowerCase();

  let filteredData;
  if (term) {
    filteredData = allapps.filter((singleApp) => singleApp.title.toLowerCase().includes(term));
    setSearchedApp(filteredData)
  } else {
      setSearchedApp(allapps)
  }
  
},[search,allapps,loading]);
 
 if (loading)
    return (
      <div className='text-5xl font-bold text-fuchsia-600 text-center container mx-auto px-9 py-7'>
               <p> loading.....</p>
                <div>
                    <img className='w-12 flex items-center justify-center text-center mt-6' src={Logo}alt="" />
                 </div>
             </div> 
    );


  return (
    <div className='bg-[#f5f5f5] mt-5 '>
      <div className='text-center'>
        <h2 className=' text-xl md:text-4xl lg:text-5xl font-bold py-8'>Our All Applications</h2>
        <p className='text-sm text-gray-500 '>Explore All Apps on the Market developed by us. We code for Millions</p>
       
      </div>
      

 <div className='flex gap-2 md:gap-4 justify-between items-center container mx-auto mt-3 md:mt-6 px-13'>
          <p className='w-full'><span className='text-sm'>({searchedApp.length})App Found</span></p>
          <label className="input">
            <input value={search} onChange={(e=>setSearch(e.target.value))} type="search" placeholder="Search App" />
          </label>
        </div>


      {searchedApp.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto px-9 space-x-5 space-y-5 py-7">
          {searchedApp.map((singleApp) => (
            <AppCard key={singleApp.id} singleApp={singleApp} />
          ))}
        </div>
      ) : (
    
        <div className="text-center py-16">
          <h3 className=" text-xl md:text-3xl lg:text-3xl font-bold  mb-4">
            No Match App 😕
          </h3>
        </div>
      )}

      <div className=' text-center p-8'>
        <Link to="/" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gradient-to-r from-[#8046ea] to-[#9c5ff1]">Go Back</Link>
      </div>
    </div>

  )
}

export default App