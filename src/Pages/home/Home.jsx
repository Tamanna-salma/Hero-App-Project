import React from 'react'
import Banner from '../../components/Banner/Banner'
import TrendingApp from '../../components/trending/TrendingApp'
import { useLoaderData } from 'react-router'

const Home = () => {
    const data =useLoaderData();
    const apps=data.slice(0,8);
   
  return (
    <div>
       <Banner></Banner>
       <TrendingApp apps={apps}></TrendingApp>
    </div>
  )
}

export default Home