import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "x-rapidapi-host": "online-movie-database.p.rapidapi.com",
  "x-rapidapi-key": "5e6938737fmsh5905a2647030b4fp1da7fdjsn8af18df41718",
};

export const moviesAPI = createApi({
  reducerPath: "moviesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://online-movie-database.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    fetchMovies: builder.query({
      query: (title) => ({
        url: `/title/find?q=${title}`,
        method: "GET",
        headers,
      }),
    }),
  }),
});

export const { useFetchMoviesQuery } = moviesAPI;
