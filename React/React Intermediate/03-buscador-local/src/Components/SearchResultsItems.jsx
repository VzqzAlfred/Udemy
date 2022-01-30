import React from "react";

export const SearchResultsItems = ({ name, email }) => {
  return (
    <>
      <div className="item-result">
        <p>{name}</p>
        <i>{email}</i>
      </div>
    </>
  );
};
