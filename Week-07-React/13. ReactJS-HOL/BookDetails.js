// src/BookDetails.js
import React from 'react';
import { books } from './data'; // Import data

function BookDetails() {
    const bookList = ( // Define list component
        <ul>
            {books.map((book) => ( // Explain React Map, map() function
                <div key={book.id}> {/* Explain about keys in React applications */}
                    <h3>{book.bname}</h3>
                    <h4>{book.price}</h4>
                </div>
            ))}
        </ul>
    );

    // Example of conditional rendering using an element variable
    const showBooks = true; // You can change this to false to hide books

    return (
        <div className="book-details" style={{ borderLeft: '2px solid green', padding: '0 20px' }}>
            <h1>Book Details</h1>
            {showBooks && bookList} {/* Conditional rendering: logical && operator */}
        </div>
    );
}

export default BookDetails;