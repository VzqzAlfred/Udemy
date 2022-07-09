import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovieRatings } from "../../Redux/Actions/Movies";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieRatings(movieId));
  }, [dispatch, movieId]);

  return <div>Detail</div>;
};

export default Detail;
