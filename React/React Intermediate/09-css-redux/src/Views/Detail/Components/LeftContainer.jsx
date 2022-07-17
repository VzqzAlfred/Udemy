import React from "react";

const LeftContainer = ({ movieDetail }) => {
  return (
    <div className="w-1/3 flex justify-center">
      <img
        src={movieDetail.details.image.url}
        className="w-80"
        alt="movie-detail"
      />
    </div>
  );
};

export default LeftContainer;
