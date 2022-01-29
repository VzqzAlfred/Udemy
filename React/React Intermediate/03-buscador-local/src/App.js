import { useState } from "react";
import SearchBox from "./Components/SearchBox.tsx";
import "./Components/stylesSearches.css";

const App = () => {
  const [isAtTop, setIsAtTop] = useState(false);

  const handleCloseOpenSearch = () => setIsAtTop(!isAtTop);

  return (
    <>
      <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
        <SearchBox
          onSearch={handleCloseOpenSearch}
          onClose={handleCloseOpenSearch}
        />
      </div>
    </>
  );
};

export default App;
