import React from "react";
import { SearchResultsItems } from "./SearchResultsItems";

export const SearchResults = ({ results, isSearching }) => {
  return (
    <div>
      {!results.length && isSearching && (
        <p className="item-result-error">Sin Resultados</p>
      )}
      {results?.map((el) => (
        <SearchResultsItems key={el.id} {...el} />
      ))}
    </div>
  );
};
