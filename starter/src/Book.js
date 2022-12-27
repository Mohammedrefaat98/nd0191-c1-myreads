import "./App.css";
import React,{useEffect,useState} from "react";
import PropTypes from 'prop-types'
import * as BooksAPI from "./BooksAPI";

export default function Book({id,onUpdate}) {
  const getByID=async ()=>{
    await BooksAPI.get(id).then(res=>setBook(res));
  }
  const handleChange=(e)=>{
    onUpdate({id: id},e.target.value);
    setBook({...book,shelf: e.target.value});
  }
  const [book,setBook]=useState();
  useEffect(()=>{
    getByID();
  },[]);

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book?.imageLinks?.thumbnail}")`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={handleChange} value={book?.shelf}>
            <option value="moveTo" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book?.title}</div>
      <div className="book-authors">{(!book?.authors?[]:book?.authors).join(', ')}</div>
    </div>
  );
}

Book.propTypes={
  title: PropTypes.string,
  authors: PropTypes.array,
  url: PropTypes.string
}

