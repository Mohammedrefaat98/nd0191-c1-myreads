import "./App.css";
import { useState } from "react";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage setShowSearchpage={() => setShowSearchpage(!showSearchPage)}/>
      ) : (
        <HomePage setShowSearchpage={() => setShowSearchpage(!showSearchPage)}/>
      )}
    </div>
  );
}

export default App;
