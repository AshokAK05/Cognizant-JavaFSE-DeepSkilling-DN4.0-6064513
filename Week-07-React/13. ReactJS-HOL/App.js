// src/App.js
import React from 'react';
import './App.css'; // You can add some basic CSS here for layout
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <CourseDetails />
      <BookDetails />
      <BlogDetails />
    </div>
  );
}

export default App;