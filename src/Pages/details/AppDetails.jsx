import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../../hooks/useApps';
import download from '../../../src/assets/icon-downloads.png';
import rating from '../../../src/assets/icon-ratings.png';
import view from '../../assets/icon-review.png';
import toast, { Toaster } from "react-hot-toast";

const AppDetails = () => {
    const { id } = useParams();
    const { allapps, loading } = useApps();
    const detail = allapps.find((ap) => String(ap.id) === id);
    const { image, downloads, description, title, reviews, size,ratingAvg } = detail || {};

    const [isInstalled, setIsInstalled] = useState(false);


    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('instalList')) || [];
        const alreadyInstalled = installedApps.some((app) => app.id === detail?.id);
        setIsInstalled(alreadyInstalled);
    }, [detail]);

    // Install button click handler
    const handleInstallNow = () => {
        if (!detail) return;

        const existList = JSON.parse(localStorage.getItem('instalList')) || [];
        const isDuplicate = existList.some((p) => p.id === detail.id);

        if (isDuplicate) {
            setIsInstalled(true);
            alert('Already installed!');
            return;
        }

        const updatedList = [...existList, detail];
        localStorage.setItem('instalList', JSON.stringify(updatedList));
        setIsInstalled(true);
        alert('App installed successfully!');
    };

    if (loading)
        return (
            <p className='text-3xl font-bold text-fuchsia-600 text-center'>
                loading.....
            </p>
        );

    if (!detail)
        return (
            <p className='text-center text-2xl font-bold text-red-500 py-10'>
                App not found!
            </p>
        );

    return (
        <div className='bg-[#f5f5f5]'>
            <div className='card-body container mx-auto px-9 py-7'>
                <div className='flex flex-col md:flex-row items-center gap-20'>
                    <div>
                        <img className='w-56 rounded-xl' src={image} alt="" />
                    </div>

                    <div>
                        <p className='text-center text-2xl font-bold p-4'>
                            APP Details Page
                        </p>
                        <h2 className='card-title text-2xl font-semibold'>{title}</h2>
                        <p className='text-gray-500 mb-4'>Developed by productive.io</p>

                        <hr className='border-t-2 border-gray-300 w-full my-6 rounded-full' />

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <div>
                                <p className='text-sm lg:text-xl text-gray-500'>
                                    Downloads
                                </p>
                                <div className='flex gap-4 mt-2'>
                                    <h2 className='text-3xl font-bold'>{downloads}</h2>
                                    <img src={download} alt='downloads' />
                                </div>
                            </div>

                            <div>
                                <p className='text-sm lg:text-xl text-gray-500'>
                                    Average Ratings
                                </p>
                                <div className='flex gap-4 mt-2'>
                                    <h2 className='text-3xl font-bold'>{ratingAvg}</h2>
                                    <img src={rating} alt='ratings' />
                                </div>
                            </div>

                            <div>
                                <p className='text-sm lg:text-xl text-gray-500'>
                                    Total Reviews
                                </p>
                                <div className='flex gap-4 mt-2'>
                                    <h2 className='text-3xl font-bold'>{reviews}</h2>
                                    <img src={view} alt='reviews' />
                                </div>
                            </div>
                        </div>

                        {/*  Install Button */}
                        <div>
                            <button
                                onClick={handleInstallNow}
                                disabled={isInstalled}
                                className={`btn mt-5 px-5 py-3 rounded text-white text-lg ${isInstalled
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-green-500 hover:bg-green-600'
                                    }`}
                            >
                                {isInstalled ? '✅ Installed' : 'Install Now'}{' '}
                                {!isInstalled && <span className='text-sm'>({size})</span>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-9 py-7'>
                <h1 className='text-xl font-bold'>Description</h1>
                <p className='text-gray-600 mt-2'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
