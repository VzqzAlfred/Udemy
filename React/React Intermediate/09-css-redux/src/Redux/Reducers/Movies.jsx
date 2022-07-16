import React from "react";
import {
  startFetchMoviesRatings,
  successFetchMovieRatings,
  errorFetchMovieRatings,
  startFetchMovieDetail,
  succesFetchMovieDetail,
  errorFetchMovieDetail,
} from "../Actions/Movies";

const initialState = {
  isFetchingMovieRatings: false,
  isFetchingMovieDetail: false,
  isLoading: true,
  erroFetchingMovieRatings: null,
  erroFetchingMovieDetail: null,
  succesFetchingMovieRatings: null,
  succesFetchingMovieDetail: null,
  ratings: {},
  movieDetail: {},
};
const MoviesReducers = (state = initialState, action) => {
  switch (action.type) {
    case startFetchMoviesRatings.toString():
      return {
        ...state,
        isLoading: false,
        isFetchingMovieRatings: true,
      };

    case successFetchMovieRatings.toString():
      return {
        ...state,
        isLoading: false,
        isFetchingMovieRatings: false,
        ratings: action.payload.data,
        succesFetchingMovieRatings: true,
        erroFetchingMovieRatings: null,
      };

    case errorFetchMovieRatings.toString():
      return {
        ...state,
        isLoading: false,
        isFetchingMovieRatings: false,
        ratings: {},
        succesFetchingMovieRatings: false,
        erroFetchingMovieRatings: action.payload.error,
      };

    case startFetchMovieDetail.toString():
      return {
        ...state,
        isFetchingMovieDetail: true,
      };
    case succesFetchMovieDetail.toString():
      return {
        ...state,
        succesFetchMovieDetail: true,
        errorFetchMovieDetail: null,
        movieDetail: action.payload,
        isFetchingMovieDetail: false,
      };
    case errorFetchMovieDetail.toString():
      return {
        ...state,
        isFetchingMovieDetail: false,
        succesFetchMovieDetail: false,
        errorFetchMovieDetail: action.payload.error,
        movieDetail: {},
      };

    default:
      break;
  }

  return state;
};

export default MoviesReducers;
