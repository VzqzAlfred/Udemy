import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieImages from "../../assets/movie-theater.png";
import { useFetchMoviesQuery } from "../../Redux/API/Movies";

const Results = () => {
  const { title } = useParams();
  const [skip, setSkip] = useState(true);
  const {
    data: movies,
    isLoading,
    isSuccess,
    isFetching,
    error,
  } = useFetchMoviesQuery(title);
  useEffect(() => {
    setTimeout(() => {
      setSkip(false);
    }, 3000);
  }, [skip]);

  return (
    <div className="flex flex-row w-full">
      <div className="w-3/5"></div>

      <div className="w-3/4">
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
