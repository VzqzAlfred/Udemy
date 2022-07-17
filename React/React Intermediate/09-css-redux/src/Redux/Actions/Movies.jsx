import React from "react";
import { createAction } from "@reduxjs/toolkit";

// Importar actions de slices, solo para cuestiones demostrativas.
import {
  startFetchMoviesRatings as startFetchMoviesRatingsSlice,
  successFetchMovieRatings as successFetchMovieRatingsSlice,
  errorFetchMovieRatings as errorFetchMovieRatingsSlice,
  startFetchMovieDetail as startFetchMovieDetailSlice,
  succesFetchMovieDetail as succesFetchMovieDetailSlice,
  errorFetchMovieDetail as errorFetchMovieDetailSlice,
} from "../Slices/Movies";

export const startFetchMoviesRatings = createAction(
  "START_FETCH_MOVIE_RATINGS"
);

export const successFetchMovieRatings = createAction(
  "SUCCES_FETCH_MOVIE_RATINGS"
);

export const errorFetchMovieRatings = createAction("ERROR_FETCH_MOVIE_RATINGS");

const BASE_URL = "https://online-movie-database.p.rapidapi.com/title";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5e6938737fmsh5905a2647030b4fp1da7fdjsn8af18df41718",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

export const fetchMovieRatings = (movieId) => async (dispatch) => {
  try {
    dispatch(startFetchMoviesRatings());
    //dispatch(startFetchMoviesRatingsSlice());

    // Iniciar la llamada API

    const response = await fetch(
      `${BASE_URL}/get-ratings?tconst=${movieId}`,
      options
    );
    const data = await response.json();

    //console.log(data);
    // dispatch(successFetchMovieRatingsSlice({ data }));
    dispatch(successFetchMovieRatings({ data }));
  } catch (error) {
    // dispatch(errorFetchMovieRatingsSlice({ error }));
    dispatch(errorFetchMovieRatings({ error }));
  }
};

export const startFetchMovieDetail = createAction("START_FETCH_MOVIE_DETAIL");

export const succesFetchMovieDetail = createAction("SUCCES_FETCH_MOVIE_DETAIL");

export const errorFetchMovieDetail = createAction("ERROR_FETCH_MOVIE_DETAIL");

export const fetchMovieDetail = (movieId) => async (dispatch) => {
  try {
    dispatch(startFetchMovieDetail());
    //dispatch(startFetchMovieDetailSlice());
    const overViewDetailResponse = await fetch(
      `${BASE_URL}/get-overview-details?tconst=${movieId}&currentCountry=US`,
      options
    );
    const overViewDetailData = await overViewDetailResponse.json();

    const topCastResponse = await fetch(
      `${BASE_URL}/get-top-cast?tconst=${movieId}`,
      options
    );
    const topCastData = await topCastResponse.json();

    const detailResponse = await fetch(
      `${BASE_URL}/get-details?tconst=${movieId}`,
      options
    );

    const detailData = await detailResponse.json();

    const fullCreditsResponse = await fetch(
      `${BASE_URL}/get-full-credits?tconst=${movieId}`,
      options
    );

    const fullCreditsData = await fullCreditsResponse.json();

    dispatch(
      succesFetchMovieDetail({
        overview: overViewDetailData,
        topCast: topCastData,
        details: detailData,
        fullCredits: fullCreditsData,
      })
    );

    /*    dispatch(
      succesFetchMovieDetailSlice({
        overview: overViewDetailData,
        topCast: topCastData,
        details: detailData,
        fullCredits: fullCreditsData,
      })
    );*/
  } catch (error) {
    // dispatch(errorFetchMovieDetailSlice({ error }));
    dispatch(errorFetchMovieDetail({ error }));
  }
};
