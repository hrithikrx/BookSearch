// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import BookshelfPage from './components/BookShelfPage';
import './App.css'; // Link the CSS file

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Search Books</Link>
          <Link to="/bookshelf">My Bookshelf</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/bookshelf" element={<BookshelfPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
