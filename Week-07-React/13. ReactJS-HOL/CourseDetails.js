// src/CourseDetails.js
import React from 'react';
import { courses } from './data'; // Import data

function CourseDetails() {
    // Example of conditional rendering: Preventing component from rendering
    const shouldRenderCourses = true; // Set to false to prevent rendering

    if (!shouldRenderCourses) {
        return null; // Explain how to prevent components from rendering
    }

    return (
        <div className="course-details" style={{ borderLeft: '2px solid green', padding: '0 20px' }}>
            <h1>Course Details</h1>
            {courses.map((course) => (
                <div key={course.id}>
                    <h2>{course.name}</h2>
                    <p>{course.date}</p>
                </div>
            ))}
        </div>
    );
}

export default CourseDetails;