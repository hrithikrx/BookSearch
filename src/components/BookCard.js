
import React from 'react';
import '../App.css'; 

function BookCard({ book, addToBookshelf }) {
  return (
    <div className="book-card">
      <div>
        <h3>{book.title}</h3>
        <p>{book.author_name && book.author_name.join(', ')}</p>
      </div>
      <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
    </div>
  );
}

export default BookCard;
