import React from "react";
import { createAction } from "@reduxjs/toolkit";

export const startFetchMoviesRatings = createAction(
  "START_FETCH_MOVIE_RATINGS"
);

export const successFetchMovieRatings = createAction(
  "SUCCES_FETCH_MOVIE_RATINGS"
);

export const errorFetchMovieRatings = createAction("ERROR_FETCH_MOVIE_RATINGS");

const BASE_URL = "https://online-movie-database.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b8978031d9mshfff5c38b76a7a10p10d0e0jsn38ab76f634d3",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

export const fetchMovieRatings = (movieId) => async (dispatch) => {
  try {
    dispatch(startFetchMoviesRatings());

    // Iniciar la llamada API

    const response = await fetch(
      `${BASE_URL}/title/get-ratings?tconst=${movieId}`,
      options
    );
    const data = await response.json();

    //console.log(data);
    dispatch(successFetchMovieRatings({ data }));
  } catch (error) {
    dispatch(errorFetchMovieRatings({ error }));
  }
};

const startFetchMovieDetail = createAction("START_FETCH_MOVIE_DETAIL");

const succesFetchMovieDetail = createAction("SUCCES_FETCH_MOVIE_DETAIL");

const errorFetchMovieDetail = createAction("ERROR_FETCH_MOVIE_DETAIL");
export const fetchMovieDetail = (movieId) => async (dispatch) => {
  try {
    dispatch(startFetchMovieDetail());
    const response = await fetch(
      `${BASE_URL}/title/get-overview-details?tconst=${movieId}&currentCountry=US`,
      options
    );
    const data = await response.json();

    dispatch(succesFetchMovieDetail({ data }));
  } catch (error) {
    dispatch(errorFetchMovieDetail({ error }));
  }
};
