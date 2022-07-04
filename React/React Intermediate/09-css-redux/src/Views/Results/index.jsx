import React from "react";
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

  const renderContent = () => {
    if (error) {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-xl">{error.error}</p>
        </div>
      );
    } else if (isLoading || isFetching) {
      return <Loading />;
    } else if (isSuccess && movies?.results) {
      return <List data={movies?.results} />;
    }
  };

  return (
    <div className="flex flex-row w-full">
      <div className="w-3/5 h-screen overflow-y-auto pax-10">
        {renderContent()}
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
