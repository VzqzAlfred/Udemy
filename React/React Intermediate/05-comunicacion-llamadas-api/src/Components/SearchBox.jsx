import React, { useState } from "react";
import "./stylesSearches.css";

const SearchBox = ({ onSearch, onClose, isSearching }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    onClose();
    setSearchText("");
  };

  return (
    <>
      <div>
        <h1>Buscador de personal</h1>
        <div className="container-search">
          <input
            className="search-input"
            type="text"
            value={searchText}
            onChange={({ target: { value } }) => setSearchText(value)}
          />
          <button
            onClick={() => onSearch(searchText)}
            className="buttonSearch button-blue"
            disabled={!searchText.length}
          >
            Buscar
          </button>
          {isSearching && (
            <button
              onClick={handleSearchClick}
              className="buttonSearch button-close"
              disabled={!searchText.length}
            >
              Cerrar
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBox;
