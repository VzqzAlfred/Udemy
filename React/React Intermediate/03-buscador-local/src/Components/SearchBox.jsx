import React, { useState } from 'react';
import "./stylesSearches.css";

const SearchBox = () => {

     const [value, setValue] = useState("");
  return (
       <>
          <div className="containerSearch">
              <label>
                   Buscador de personal:
                    <input type="text" value={value}  onChange={({target: {value}}) => setValue(value)}/>
              </label>
               <button className='buttonSearch'>Buscar</button>
          </div>
       </>
  )
};

export default SearchBox;
