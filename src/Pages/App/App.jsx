import React, { useState } from 'react'

import useApps from '../../hooks/useApps';
import AppCard from '../card/AppCard';



const App = () => {
    const { allapps } = useApps();
const [search ,setSearch]=useState('')

  const term = search.trim().toLocaleLowerCase()

  const searchApp =term ? allapps.filter(allapp=>allapp.name.toLocaleLowerCase().includes(term)
)
  :allapps

  return (
    <div className='bg-[#f5f5f5] '>
      <div className='text-center'>
        <h2 className=' text-xl md:text-4xl lg:text-5xl font-bold py-8'>Our All Applications</h2>
        <p className='text-sm text-gray-500 '>Explore All Apps on the Market developed by us. We code for Millions</p>
       
      </div>
 <div className='flex  justify-between items-center container mx-auto px-13'>
          <p className='w-full'><span className='text-sm'>({searchApp.length})App Found</span></p>
          <label className="input">
            <input value={search} onChange={(e=>setSearch(e.target.value))} type="search" placeholder="Search App" />
          </label>
        </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto px-9 space-x-5 space-y-5 py-7'>
        {
          searchApp.map((singleApp) => <AppCard key={singleApp.id} singleApp={singleApp}></AppCard>)
        }
      </div>

      <div className=' text-center'>
        <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Show All</a>
      </div>
    </div>

  )
}

export default App