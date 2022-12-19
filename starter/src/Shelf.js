import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

export default function Shelf({ name, booksList }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksList.map((book) => (
            <li key={book.title}>
              <Book
                title={book.title}
                authors={book.authors}
                url={book.imageLinks.thumbnail}
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
