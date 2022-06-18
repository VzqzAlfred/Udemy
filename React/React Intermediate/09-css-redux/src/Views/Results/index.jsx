import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieImages from "../../assets/movie-theater.png";
import { useFetchMoviesQuery } from "../../Redux/API/Movies";
import List from "./Components/List";
import Loading from "./Components/Loading";

const Results = () => {
  const { title } = useParams();
  const {
    data: movies,
    isLoading,
    isSuccess,
    isFetching,
    error,
  } = useFetchMoviesQuery(title);

  return (
    <div className="flex flex-row w-full">
      <div className="w-3/5 h-screen overflow-y-auto pax-10">
        {isLoading && isFetching ? (
          <Loading />
        ) : (
          <List data={movies?.results} />
        )}
      </div>
      <div className="w-2/5">
        <img
          src={movieImages}
          alt="Movies"
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Results;
