import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import '../App.css'; 

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const q = e.target.value;
    setQuery(q);

    if (q.length > 2) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
      setResults(response.data.docs);
    } else {
      setResults([]);
    }
  };

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    bookshelf.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  };

  return (
    <div className="container">
      <h1>Book Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for a book"
      />
      <div className="book-list">
        {results.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
