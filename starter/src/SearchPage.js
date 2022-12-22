import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import * as BooksAPI from "./BooksAPI"
import BooksGrid from "./BooksGrid"
import { Link } from "react-router-dom";

export default function SearchPage({ setShowSearchpage }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const mounted = useRef();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(()=>{
    const search=async ()=>{
      const res = await BooksAPI.search(input);
      (Array.isArray(res) ? setResult(res):setResult([]))
    }
    if (!mounted.current) {
      // do componentDidMount logic
      mounted.current = true;
    } else {
      // do componentDidUpdate logic
      search()
    }
  },[input])

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleChange}
          />
        </div>
      </div>

      <BooksGrid booksList={result}/>
    </div>
  );
}
