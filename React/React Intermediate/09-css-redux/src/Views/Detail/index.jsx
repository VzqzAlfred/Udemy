import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorFetchMovieDetail,
  fetchMovieDetail,
  fetchMovieRatings,
} from "../../Redux/Actions/Movies";
import { useParams } from "react-router-dom";
import LeftContainer from "./Components/LeftContainer";
import RightContainer from "./Components/RightContainer";
import Loading from "../../Components/Loading";

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

  const renderContent = () => {
    return (
      <>
        <LeftContainer movieDetail={movieDetail} />
        <RightContainer movieDetail={movieDetail} ratings={ratings} />
      </>
    );
  };

  if (isLoading || isFetchingMovieDetail || isFetchingMovieRatings) {
    return <Loading message={"Loading..."} />;
  } else if (erroFetchingMovieDetail || erroFetchingMovieRatings) {
    return <p>It's happen a error to get detail of the movie</p>;
  }

  return (
    <div className="flex  flex-row px-16 h-screen items-center justify-center">
      {renderContent()}
    </div>
  );
};

export default Detail;
