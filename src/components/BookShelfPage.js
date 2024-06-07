
import React, { useState, useEffect } from 'react';
import '../App.css'; 

function BookshelfPage() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBooks);
  }, []);

  return (
    <div className="container">
      <h1>My Bookshelf</h1>
      <div className="book-list">
        {bookshelf.map((book, index) => (
          <div className="book-card" key={index}>
            <div>
              <h3>{book.title}</h3>
              <p>{book.author_name && book.author_name.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookshelfPage;
