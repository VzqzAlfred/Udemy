import React, { useState } from "react";
import Chairs from "../../assets/chairs.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleCleanClick = () => {
    setSearch("");
  };

  const handleSearchClick = () => {
    if (search === "") return;

    navigate(`/results/${search.trim()}`);
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-2/5">
        <img className="w-full h-full object-cover" src={Chairs} alt="Chairs" />
      </div>

      <div className="w-3/5 flex flex-col justify-center items-center px-10">
        <h2 className="text-lato xl font-bold font-lato">
          Search your movie...
        </h2>
        <input
          className="bg-special-gray w-full my-3 h-9 p-1 border focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
          value={search}
          onChange={handleInputChange}
        />
        <div className="flex w-full justify-between">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-lato w-full shadow-lg h-9"
            style={{ width: "48%", backgroundColor: "#ef4444", color: "white" }}
            onClick={handleSearchClick}
          >
            Search
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-lato w-full shadow-lg h-9"
            style={{ width: "48%", backgroundColor: "#ef4444", color: "white" }}
            onClick={handleCleanClick}
          >
            Clean
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
