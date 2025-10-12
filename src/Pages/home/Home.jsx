import React from 'react';
import Banner from '../../components/Banner/Banner';
import useApps from '../../hooks/useApps';
import { Link } from 'react-router';
import AppCard from '../card/AppCard';
import Logo from '../../../src/assets/logo.png';

const Home = () => {
  const { allapps, setAllApps, loading } = useApps();

  if (loading) {
    return (
      <div className="text-lg md:text-5xl font-bold text-fuchsia-600 text-center container mx-auto px-9 py-7">
        <p>Loading.....</p>
        <div className="text-center container mx-auto px-3 md:px-9">
          <img
            className="w-12 text-center animate-spin mt-6 mx-auto"
            src={Logo}
            alt="loading-logo"
          />
        </div>
      </div>
    );
  }

  const featuredApps = allapps.slice(0, 8);

  return (
    <div>
      <Banner />

      <div className="bg-[#f5f5f5] ">
        <div className="text-center">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-7">
            Trending Apps
          </h2>
          <p className="text-sm text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto px-9 space-x-5 space-y-5 py-7">
          {featuredApps.map((singleApp) => (
            <AppCard key={singleApp.id} singleApp={singleApp} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="./App"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gradient-to-r from-[#8046ea] to-[#9c5ff1] mb-5 p-4"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
