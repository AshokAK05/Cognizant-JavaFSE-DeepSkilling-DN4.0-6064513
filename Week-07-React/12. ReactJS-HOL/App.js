import React, { useState } from 'react';
import './App.css';
import Greeting from './Greeting';
import { LoginButton, LogoutButton } from './AuthButtons';

function App() {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true); // When user clicks Login, set isLoggedIn to true
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false); // When user clicks Logout, set isLoggedIn to false
  };

  let button; // Declare an element variable 
  if (isLoggedIn) {
    // If logged in, display the Logout button
    button = <LogoutButton onClick={handleLogoutClick} />; // The Login and Logout buttons should accordingly display different pages. [cite: 15]
  } else {
    // If not logged in, display the Login button
    button = <LoginButton onClick={handleLoginClick} />; // The Login and Logout buttons should accordingly display different pages. [cite: 15]
  }

  return (
    <div className="App" style={{ textAlign: 'center', padding: '50px' }}>
      {/* Implement conditional rendering based on isLoggedIn state */}
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
      <p>
        {isLoggedIn ? (
          // Logged-in user can book tickets
          "You are logged in and can now book tickets. Flight details: [Details for booking]"
        ) : (
          // Guest user can only browse flight details
          "As a guest, you can browse flight details: [Flight details for guests]"
        )}
      </p>
    </div>
  );
}

export default App;