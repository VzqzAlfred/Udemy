import React from "react";
import Chairs from "../../assets/chairs.png";

const Home = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-2/5">
        <img className="w-full h-full object-cover" src={Chairs} alt="Chairs" />
      </div>

      <div className="w-3/5 flex flex-col justify-center items-center px-10">
        <h2 className="text-lato xl font-bold font-lato">
          Search your movie...
        </h2>
        <input className="bg-special-gray w-full my-3 h-9 p-1 border focus:outline-none focus:ring-2 focus:ring-gray-500 rounded" />
        <div className="flex w-full justify-between">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-lato w-full shadow-lg h-9"
            style={{ width: "48%" }}
          >
            Search
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-lato w-full shadow-lg h-9"
            style={{ width: "48%" }}
          >
            Clean
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
