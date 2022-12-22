import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

export default function Shelf({ name, booksList, onUpdate }) {
  const handleUpdate=(book, shelf)=>{
    onUpdate(book,shelf)
  }
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksList.map((book) => (
            <li key={book.id}>
              <Book
                id={book.id}
                title={book.title}
                authors={(!book.authors?[]:book.authors)}
                url={book?.imageLinks?.thumbnail}
                onUpdate={handleUpdate}
                shelf={book.shelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
Shelf.propTypes = {
  name: PropTypes.string,
  booksList: PropTypes.array,
};
