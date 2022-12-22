import "./App.css";
import { useState } from "react";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
