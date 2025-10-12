import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import found from '../../../src/assets/App-Error.png'
import useApps from "../../hooks/useApps";
import Logo from '../../../src/assets/logo.png';
const Installition = () => {
  const [instalList, setInstalList] = useState([]);
  const [sortorder, setSortorder] = useState("none");
    const {loading } = useApps();
  // localStorage
  useEffect(() => {
   
    const saveItem = JSON.parse(localStorage.getItem("instalList"));
    if (saveItem) setInstalList(saveItem);
  }, []);

  const sortedList = (() => {
    if (sortorder === "app-asc") {
      return [...instalList].sort((a, b) => a.downloads - b.downloads);
    } else if (sortorder === "app-desc") {
      return [...instalList].sort(( a,b) => b.downloads - a.downloads);
    } else {
      return instalList;
    }
  })();

  //  Uninstall handler
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
      {/* Toast container */}
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
            // value={sortorder}
            onChange={(e) => setSortorder(e.target.value)}>

            <option value="none">Sort by downloads</option>
            <option value="app-asc">Low → High</option>
            <option value="app-desc">High → Low</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto px-9 pb-10">
        {sortedList.length > 0 ? (
          sortedList.map((a) => (
            <div key={a.id} className="card bg-base-100 shadow p-4">
              <figure className="bg-gray-200 w-2/3 mx-auto p-4 rounded-lg">
                <img
                  className="object-cover h-32 w-full rounded-md"
                  src={a.image}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg font-semibold">{a.title}</h2>

                <div className="card-actions justify-between mt-2">
                  <div className="badge badge-outline">{a.downloads}</div>
                  <div className="badge badge-outline">
                    <button
                      onClick={() => handleRemove(a.id)}
                      className=""
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
         <div  >
          <div  className=' mt-7 flex items-center justify-center container mx-auto  w-full md:w-5xl lg:w-5xl' >
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
