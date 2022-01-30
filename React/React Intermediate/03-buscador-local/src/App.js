import { useState } from "react";
import SearchBox from "./Components/SearchBox.jsx";
import { SearchResults } from "./Components/SearchResults.jsx";
import "./Components/stylesSearches.css";

import data from "./Data/file.json";

const App = () => {
  const [isAtTop, setIsAtTop] = useState(false);
  const [results, setResults] = useState([]);

  const handleCloseSearch = () => {
    setIsAtTop(false);
    setResults([]);
  };
  const handleSearchClick = (searchText) => {
    setIsAtTop(true);
    if (data?.length) {
      const searchTextMinus = searchText.toLowerCase();
      const filteredData = data.filter(
        (value) =>
          value.name.toLowerCase().includes(searchTextMinus) ||
          value.phone.toLowerCase().includes(searchTextMinus) ||
          value.email.toLowerCase().includes(searchTextMinus) ||
          value.username.toLowerCase().includes(searchTextMinus)
      );
      setResults(filteredData);
    }
  };

  console.log(results);
  return (
    <>
      <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
        <SearchBox
          onSearch={handleSearchClick}
          onClose={handleCloseSearch}
          isSearching={isAtTop}
        />
        <SearchResults results={results} isSearching={isAtTop} />
      </div>
    </>
  );
};

export default App;
