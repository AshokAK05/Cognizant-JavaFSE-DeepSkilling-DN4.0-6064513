import React from 'react';
import './App.css'; // You can remove this if you only use inline styles
import officeImage from './office-space.jpg'; // Make sure you have an image file here

function App() {
  // Create an element to display the heading of the page 
  const pageHeading = "Office Space";

  // Create an object of office to display the details 
  const officeDetails = {
    Name: 'DBS',
    Rent: 50000,
    Address: 'Chennai'
  };

  // Create a list of objects to display more data 
  const officeSpaces = [
    { Name: 'Tech Hub', Rent: 75000, Address: 'Bangalore' },
    { Name: 'Innovate HQ', Rent: 55000, Address: 'Hyderabad' },
    { Name: 'City Towers', Rent: 80000, Address: 'Mumbai' },
    { Name: 'Work Zone', Rent: 45000, Address: 'Delhi' }
  ];

  // Function to determine text color based on rent 
  const getRentColor = (rent) => {
    return { color: rent <= 60000 ? 'red' : 'green' }; // Apply inline CSS 
  };

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      {/* Display the heading of the page  */}
      <h1>{pageHeading} , at Affordable Range</h1>

      {/* Attribute to display the image of the office space  */}
      {/* Use JavaScript expressions in JSX for src, width, height  */}
      <img src={officeImage} alt="Office Space" style={{ width: '25%', height: 'auto', margin: '20px 0' }} />

      {/* Display details from the single office object  */}
      <h2>Name: {officeDetails.Name}</h2>
      <h3 style={getRentColor(officeDetails.Rent)}>Rent: Rs. {officeDetails.Rent}</h3> {/* Inline CSS for rent  */}
      <h3>Address: {officeDetails.Address}</h3>

      <hr />

      <h1>More Office Spaces:</h1>
      {/* Loop through the office space item to display more data  */}
      {officeSpaces.map((office, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '10px auto', padding: '10px', width: 'fit-content' }}>
          <h2>Name: {office.Name}</h2>
          <h3 style={getRentColor(office.Rent)}>Rent: Rs. {office.Rent}</h3> {/* Inline CSS for rent  */}
          <h3>Address: {office.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;