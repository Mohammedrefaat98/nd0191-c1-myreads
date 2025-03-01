import React from "react";
import "./App.css";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

export default function BooksGrid({ booksList }) {

  const onUpdate=(book,shelf)=>{
    const updateBook= async () =>{
      const res= await BooksAPI.update(book,shelf);
      console.log(res);
    }
    updateBook();
  }

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {booksList.map((book) => (
          <li key={book.id}>
            <Book
              id={book.id}
              onUpdate={onUpdate}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
