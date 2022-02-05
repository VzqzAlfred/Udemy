import { useEffect, useState } from "react";
import SearchBox from "./Components/SearchBox.jsx";
import { SearchResults } from "./Components/SearchResults.jsx";
import "./Components/stylesSearches.css";
import axios from "axios";

const App = () => {
  const [isAtTop, setIsAtTop] = useState(false);
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);

  //*     Haciendo la petición utilizando "Fetch"
  //   useEffect(() => {
  //     const getUsers = async () => {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       const data = await response.json();
  //       setData(data);
  //     };
  //     getUsers().catch(null);
  //   }, []);

  //*     Haciendo la petición con "axios"
  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers().catch(null);
  }, []);

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
