import React, { useEffect, useState } from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import Shelf from "./Shelf";

export default function HomePage({ setShowSearchpage }) {
  const [crBooks, setCrBooks] = useState([]);
  const [wrBooks, setWrBooks] = useState([]);
  const [rBooks, setRBooks] = useState([]);
  
  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    console.log(res);
    setCrBooks(res.filter(book => book.shelf === "currentlyReading"));
    setWrBooks(res.filter(book => book.shelf === "wantToRead"));
    setRBooks(res.filter(book => book.shelf === "read"));
  };

  const onUpdate=(book,shelf)=>{
    const updateBook= async () =>{
      const res= await BooksAPI.update(book,shelf);
      console.log(res);
    }
    updateBook().then(()=>getBooks());
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf name="Currently Reading" booksList={crBooks} onUpdate={onUpdate}/>
          <Shelf name="Want to Read" booksList={wrBooks} onUpdate={onUpdate}/>
          <Shelf name="Read" booksList={rBooks} onUpdate={onUpdate}/>
        </div>
      </div>
      <div className="open-search">
        <a onClick={setShowSearchpage}>Add a book</a>
      </div>
    </div>
  );
}
