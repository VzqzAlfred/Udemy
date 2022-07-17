import React from "react";
import { createSlice } from "@reduxjs/toolkit";

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

const MoviesSlice = createSlice({
  name: "movies-slices",
  initialState,
  reducers: {
    startFetchMoviesRatings(state, action) {
      state.isLoading = false;
      state.isFetchingMovieRatings = true;
    },
    successFetchMovieRatings(state, action) {
      state.isLoading = false;
      state.isFetchingMovieRatings = false;
      state.ratings = action.payload.data;
      state.succesFetchingMovieRatings = true;
      state.erroFetchingMovieRatings = null;
    },
    errorFetchMovieRatings(state, action) {
      state.isLoading = false;
      state.isFetchingMovieRatings = false;
      state.ratings = {};
      state.succesFetchingMovieRatings = false;
      state.erroFetchingMovieRatings = action.payload.error;
    },
    startFetchMovieDetail(state, action) {
      state.isFetchingMovieDetail = true;
    },
    succesFetchMovieDetail(state, action) {
      state.succesFetchMovieDetail = true;
      state.errorFetchMovieDetail = null;
      state.movieDetail = action.payload;
      state.isFetchingMovieDetail = false;
    },
    errorFetchMovieDetail(state, action) {
      state.isFetchingMovieDetail = false;
      state.succesFetchMovieDetail = false;
      state.erroFetchingMovieDetail = action.payload.error;
      state.movieDetail = {};
    },
  },
});

const { actions, reducer } = MoviesSlice;
const {
  startFetchMoviesRatings,
  successFetchMovieRatings,
  errorFetchMovieRatings,
  startFetchMovieDetail,
  succesFetchMovieDetail,
  errorFetchMovieDetail,
} = actions;

export {
  startFetchMoviesRatings,
  successFetchMovieRatings,
  errorFetchMovieRatings,
  startFetchMovieDetail,
  succesFetchMovieDetail,
  errorFetchMovieDetail,
};

export default reducer;
