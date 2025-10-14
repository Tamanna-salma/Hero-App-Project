import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import found from '../../../src/assets/App-Error.png'
import useApps from "../../hooks/useApps";
import Logo from '../../../src/assets/logo.png';
import { TiStar } from "react-icons/ti";
import { HiDownload } from "react-icons/hi";
const Installition = () => {
  const [instalList, setInstalList] = useState([]);
  const [sortorder, setSortorder] = useState("none");
  const { loading } = useApps();

  useEffect(() => {

    const saveItem = JSON.parse(localStorage.getItem("instalList"));
    if (saveItem) setInstalList(saveItem);
  }, []);

  const sortedList = (() => {
    if (sortorder === "app-asc") {
      return [...instalList].sort((a, b) => a.downloads - b.downloads);
    } else if (sortorder === "app-desc") {
      return [...instalList].sort((a, b) => b.downloads - a.downloads);
    } else {
      return instalList;
    }
  })();

  const handleRemove = (id) => {
    const updatedList = instalList.filter((app) => app.id !== id);
    setInstalList(updatedList);
    localStorage.setItem("instalList", JSON.stringify(updatedList));

    toast.success("App uninstalled successfully!");
  };

  if (loading)
    return <div className=' text-lg md:text-5xl font-bold text-fuchsia-600 text-center container mx-auto px-9 py-7'>
      <div>
        <p> loading.....</p>
      </div>
      <div className='text-center container mx-auto px-3 md:px-9'>
        <img className='w-12 text-center animate-spin mt-6' src={Logo} alt="" />
      </div>
    </div>

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="text-center">
        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold py-8">
          Your Installed Apps
        </h2>
        <p className="text-sm text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between gap-1 md:gap-5 items-center py-4 container mx-auto px-9">
        <h3 className="text-sm md:text-xl">
          <span>({sortedList.length}) Apps Found</span>
        </h3>

        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            onChange={(e) => setSortorder(e.target.value)}>

            <option value="none">Sort by downloads</option>
            <option value="app-asc">Low → High</option>
            <option value="app-desc">High → Low</option>
          </select>
        </label>
      </div>




      

      <div className=" flex flex-col md:flex-col lg:flex-col  items-center space-y-4 px-2 mt-2 ">
        {sortedList.length > 0 ? (
          sortedList.map((a) => (
            <div key={a.id} className="flex flex-col md:flex-row justify-between items-center w-full md:w-7xl lg:7xl mx-auto container mr-4 bg-white shadow-md rounded-xl p-4 mb-4 border border-gray-100">
      {/* Left part: image */}
      <div className="flex items-center gap-2  md:gap-7">
        <img
          src={a.image}
          alt=""
          className="w-16 h-16 rounded-md object-cover border border-gray-200"/>

       
        <div className="w-full md:w-xl">
        <div>
            <h3 className="text-sm md:text-lg font-semibold text-gray-800  md:mt-2">{a.title}</h3>
        </div>

          <div className="flex items-center gap-4 ml:gap-6 text-sm text-gray-500 mt-1">
            <p className="flex items-center gap-1 text-sm text-green-500">
               <HiDownload className='text-green-500 '/>{a.downloads}
            </p>
            <p className="flex items-center text-sm gap-1 text-orange-500">
               <TiStar className='text-red-500' />{a.ratingAvg}
            </p>
            <p className="text-gray-400 text-sm">{a.size} MB</p>
          </div>
        </div>
      </div>

      {/*uninstall button */}
      <button  onClick={() => handleRemove(a.id)} className="bg-emerald-500 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-1 md:py-2 mt-2 rounded-md ">
        Uninstall
      </button>
    </div>
            

          ))
        ) : (
          <div>
            <div className=' mt-7 flex items-center justify-center container mx-auto  w-full md:w-5xl lg:w-5xl' >
              <img className='w-full md:w-80' src={found} alt="" />
            </div>
            <p className="flex items-center justify-center container mx-auto font-bold text-xl md:text-3xl mt-4 w-full md:w-5xl lg:w-5xl ">
              No installed apps found 😕
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Installition
  // "flex justify-between items-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition duration-300 border border-gray-100">
  //     {/* Left part: image */}
  //     <div className="flex items-center gap-4">
  //       <img
  //         src={a.image}
  //         alt=""
  //         className="w-12 h-12 rounded-md object-cover border border-gray-200"
  //       />

  //       {/* App info */}
  //       <div>
  //         <h3 className="text-lg font-semibold text-gray-800">{a.title}</h3>

  //         <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
  //           <p className="flex items-center gap-1 text-green-500 font-medium">
  //             {a.downloads}
  //           </p>
  //           <p className="flex items-center gap-1 text-orange-500 font-medium">
  //              {a.ratingAvg}
  //           </p>
  //           <p className="text-gray-400 font-medium">{a.size} MB</p>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Right part: button */}
  //     <button onClick={handleRemove} className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-1 rounded-md transition">
  //       Uninstall
  //     </button>
  //   </div>