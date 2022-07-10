import React from "react";
import {
  startFetchMoviesRatings,
  successFetchMovieRatings,
  errorFetchMovieRatings,
} from "../Actions/Movies";

const initialState = {
  isFetching: false,
  isLoading: true,
  error: null,
  succes: null,
  ratings: {},
};
const MoviesReducers = (state = initialState, action) => {
  switch (action.type) {
    case startFetchMoviesRatings.toString():
      return {
        ...state,
        isLoading: false,
        isFetching: true,
      };

    case successFetchMovieRatings.toString():
      return {
        ...state,
        isLoading: false,
        isFetching: false,
        ratings: action.payload.data,
        success: true,
        error: null,
      };

    case errorFetchMovieRatings.toString():
      return {
        ...state,
        isLoading: false,
        isFetching: false,
        ratings: {},
        succes: false,
        error: action.payload.error,
      };

    default:
      break;
  }

  return state;
};

export default MoviesReducers;
