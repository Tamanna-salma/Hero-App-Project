import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../../hooks/useApps';
import download from '../../../src/assets/icon-downloads.png';
import rating from '../../../src/assets/icon-ratings.png';
import Logo from '../../../src/assets/logo.png';
import view from '../../assets/icon-review.png';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const MySwal = withReactContent(Swal)


const AppDetails = () => {
    const [isInstalled, setIsInstalled] = useState(false);
    const { id } = useParams();
    const { allapps, loading } = useApps();
    const detail = allapps.find((ap) => String(ap.id) === id);

    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('instalList')) || [];
        const alreadyInstalled = installedApps.some((app) => app.id === detail?.id);
        setIsInstalled(alreadyInstalled);
    }, [detail]);

    if (loading)
        return <div className=' text-lg md:text-5xl font-bold text-fuchsia-600 text-center container mx-auto px-9 py-7'>
            <div>
                <p> loading.....</p>
            </div>
            <div className='text-center container mx-auto px-3 md:px-9'>
                <img className='w-12 text-center animate-spin mt-6' src={Logo} alt="" />
            </div>
        </div>

    const { image, downloads, description, title, reviews,ratings, size, ratingAvg,companyName } = detail || {};

    const handleInstallNow = () => {
        if (!detail) return;

        const existList = JSON.parse(localStorage.getItem('instalList')) || [];
        const isDuplicate = existList.some((p) => p.id === detail.id);

        if (isDuplicate) {
            setIsInstalled(true);

            return;
        }

        const updatedList = [...existList, detail];
        localStorage.setItem('instalList', JSON.stringify(updatedList));
        setIsInstalled(true);

        MySwal.fire({
            title: "Install successfully!",
            text: "You clicked the button!",
            icon: "success"
        });
    };

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
                        <p className='text-gray-500 mb-4'>Developed by {companyName}</p>

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
                                className={`btn mt-5 px-5 py-3 rounded text-white text-sm md:text-lg ${isInstalled
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-green-500 hover:bg-green-400'
                                    }`} >
                                {isInstalled ? '✅ Installed' : 'Install Now'}{' '}
                                {!isInstalled && <span className='text-sm'>({size} MB)</span>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* chart */}
            <div className='mt-5 container mx-auto text-center px-10 w-full md:w-7xl lg:w-7xl py-7'>
                <h3 className='text-xl text-center mb-6 font-bold'>Ratings </h3>
                <div className='bg-base-100 border rounded-xl p-5 h-80 md:h-96 lg:h-96'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart

                            data={[...ratings].reverse()}  layout="vertical">
                               

                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number"  />
                            <YAxis type="category" dataKey="name" />
                            <Tooltip />
                            <Legend />

                            <Bar dataKey="count" fill="#ff8811" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>


            <div className='container mx-auto text-center px-9 w-full md:w-3xl lg:w-3xl py-7'>
                <h1 className='text-xl font-bold'>Description</h1>
                <p className='text-gray-600 mt-2'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
