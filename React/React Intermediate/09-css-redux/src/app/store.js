import { configureStore } from "@reduxjs/toolkit";
import { moviesAPI } from "../Redux/API/Movies";
import MoviesReducers from "../Redux/Reducers/Movies";
import moviesReducerSlice from "../Redux/Slices/Movies";

export const store = configureStore({
  reducer: {
    [moviesAPI.reducerPath]: moviesAPI.reducer,
    moviesReducerSlice,
    MoviesReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesAPI.middleware),
});
