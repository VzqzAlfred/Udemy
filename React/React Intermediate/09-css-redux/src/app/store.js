import { configureStore } from "@reduxjs/toolkit";
import { moviesAPI } from "../Redux/API/Movies";
import MoviesReducers from "../Redux/Reducers/Movies";

export const store = configureStore({
  reducer: {
    [moviesAPI.reducerPath]: moviesAPI.reducer,
    MoviesReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesAPI.middleware),
});
