// src/BlogDetails.js
import React from 'react';
import { blogs } from './data'; // Import data

function BlogDetails() {
    // Example of conditional rendering using a ternary operator
    const isBlogContentAvailable = true; // You can change this to false

    return (
        <div className="blog-details" style={{ borderLeft: '2px solid green', padding: '0 20px' }}>
            <h1>Blog Details</h1>
            {isBlogContentAvailable ? (
                blogs.map((blog) => (
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <h3>{blog.author}</h3>
                        <p>{blog.content}</p>
                    </div>
                ))
            ) : (
                <p>No blog content available at the moment.</p> // Explain various ways of conditional rendering
            )}
        </div>
    );
}

export default BlogDetails;