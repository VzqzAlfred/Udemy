import React from "react";

const Cast = ({ cast }) => {
  const movieCast = cast?.slice(0, 20) ?? [];
  return (
    <div className="flex flex-row my-1 flex-wrap">
      <span className="font-bold mr-1">Cast: </span>
      {movieCast.map(({ name }, index) => (
        <span id={index} className="mr-1">{`${name}${
          index !== movieCast.length - 1 ? "," : "."
        }`}</span>
      ))}
    </div>
  );
};

export default Cast;
