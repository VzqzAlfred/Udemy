import React, { useState } from "react";
import "./stylesSearches.css";

const SearchBox = ({onSearch, onClose}) => {
  const [value, setValue] = useState("");

  const handleSearchClick = () => {
     onClose();  
     setValue("")
  }

  return (
    <>
      <div>
        <h1>Buscador de personal</h1>
        <div className="container-search">
          <input
            className="search-input"
            type="text"
            value={value}
            onChange={({target: {value}}) => setValue(value)}
          />
          <button onClick={onSearch} className="buttonSearch button-blue">
            Buscar
          </button>
          <button onClick={handleSearchClick} className="buttonSearch button-close">
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
