import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import * as BooksAPI from "./BooksAPI";
import BooksGrid from "./BooksGrid";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    if(!e.target.value){
      setResult([]);
    }
  };
  
  useEffect(() => {
    let mounted = true;
    const search = async () => {
      input && await BooksAPI.search(input.trim())
        .then(res => {if(mounted)(Array.isArray(res) ? setResult(res) : setResult([]))})
        .catch(e => setResult([]));
    };
    search();
    return ()=>mounted=false;
  }, [input]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <form>
            <input
              type="text"
              value={input}
              placeholder="Search by title, author, or ISBN"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>

      {input && <BooksGrid booksList={result} />}
    </div>
  );
}
