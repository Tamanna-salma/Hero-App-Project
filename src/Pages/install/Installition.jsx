import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Installition = () => {
  const [instalList, setInstalList] = useState([]);
  const [sortorder, setSortorder] = useState("none");

  // localStorage
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

  //  Uninstall handler
  const handleRemove = (id) => {
    const updatedList = instalList.filter((app) => app.id !== id);
    setInstalList(updatedList);
    localStorage.setItem("instalList", JSON.stringify(updatedList));

    toast.success("App uninstalled successfully!");
  };

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

      <div className="flex justify-between items-center py-4 container mx-auto px-9">
        <h3 className="text-xl">
          <span>({instalList.length}) Apps Found</span>
        </h3>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortorder}
            onChange={(e) => setSortorder(e.target.value)}
          >
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
                  alt={a.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg font-semibold">{a.title}</h2>

                <div className="card-actions justify-between mt-2">
                  <div className="badge badge-outline">{a.ratingAvg}</div>
                  <div className="badge badge-outline">
                    <button
                      onClick={() => handleRemove(a.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full py-10">
            No installed apps found 😕
          </p>
        )}
      </div>
    </div>
  );
};

export default Installition;
