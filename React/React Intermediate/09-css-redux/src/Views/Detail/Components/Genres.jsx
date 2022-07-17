import React from "react";

const Genres = ({ genres }) => {
  return (
    <div className="flex flex-row my-1">
      <span className="font-bold mr-1">Genero: </span>
      {genres.map((el, index) => (
        <span id={index} className="mr-1">{`${el}${
          index !== genres.length - 1 ? "," : "."
        }`}</span>
      ))}
    </div>
  );
};

export default Genres;
