import React from "react";
import Cast from "./Cast";
import Genres from "./Genres";
import Ratings from "./Ratings";

const RightContainer = ({ movieDetail, ratings }) => {
  return (
    <div className="flex flex-col w-2/3 items-start overflow-y-auto my-16 justify-center">
      <h2 className="text-4xl font-bold my-1">
        {movieDetail.details.title ?? "Title disable to this movie"} (
        {movieDetail.details.year ?? "Year disable"})
      </h2>
      <Ratings rating={ratings.rating} />
      <p className="text-left">
        {movieDetail.overview.plotSummary.text ?? "No Summary to this movie"}
      </p>
      {movieDetail.overview.genres.length > 0 && (
        <Genres
          genres={movieDetail.overview?.genres ?? "Genre disable to this movie"}
        />
      )}
      {movieDetail.fullCredits.cast.length > 0 && (
        <Cast cast={movieDetail.fullCredits.cast ?? "Cast disable"} />
      )}
    </div>
  );
};

export default RightContainer;
