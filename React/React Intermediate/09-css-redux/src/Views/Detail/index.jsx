import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetail,
  fetchMovieRatings,
} from "../../Redux/Actions/Movies";
import { useParams } from "react-router-dom";
import yellowStart from "../../assets/yellow-star.png";

const Detail = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const {
    isFetchingMovieRatings,
    isFetchingMovieDetail,
    isLoading,
    erroFetchingMovieRatings,
    erroFetchingMovieDetail,
    succesFetchingMovieRatings,
    succesFetchingMovieDetail,
    ratings,
    movieDetail,
  } = useSelector((state) => state.MoviesReducers);

  useEffect(() => {
    dispatch(fetchMovieRatings(movieId));
  }, [dispatch, movieId]);

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
  }, [dispatch, movieId]);

  console.log(movieDetail?.overview);

  const movieCast = movieDetail?.fullCredits?.cast?.slice(0, 20) ?? [];

  return (
    <div className="flex  flex-row px-16 h-screen items-center justify-center">
      <div className="w-1/3 flex justify-center">
        <img
          src={movieDetail?.details?.image?.url}
          className="w-80"
          alt="movie-detail"
        />
      </div>
      <div className="flex flex-col w-2/3 items-start overflow-y-auto my-16 justify-center">
        <h2 className="text-4xl font-bold my-1">
          {movieDetail?.details?.title} ({movieDetail?.details?.year})
        </h2>
        <div className="flex flex-row my-1 items-center">
          <span className="text-xl font-bold w-full">{ratings?.rating}</span>
          <img className="ml-1 w-6 h-6" src={yellowStart} alt="rating-start" />
        </div>
        <p className="text-left">{movieDetail?.overview?.plotSummary?.text}</p>
        <div className="flex flex-row my-1">
          <span className="font-bold mr-1">Genero: </span>
          {movieDetail?.overview?.genres?.map((el, index) => (
            <span id={index} className="mr-1">{`${el}${
              index !== movieDetail?.overview?.genres.length - 1 ? "," : "."
            }`}</span>
          ))}
        </div>
        <div className="flex flex-row my-1 flex-wrap">
          <span className="font-bold mr-1">Cast: </span>
          {movieCast.map(({ name }, index) => (
            <span id={index} className="mr-1">{`${name}${
              index !== movieCast.length - 1 ? "," : "."
            }`}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
