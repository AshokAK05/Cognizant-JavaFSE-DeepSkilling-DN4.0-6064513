import React from 'react';

// Component for a logged-in user
function UserGreeting() {
    return <h1>Welcome back!</h1>; // Once the user is logged in the User page should be displayed. 
}

// Component for a guest user
function GuestGreeting() {
    return <h1>Please sign up.</h1>;
}

// Component to render different greetings based on login status
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn; // [cite: 18]
    if (isLoggedIn) {
        return <UserGreeting />; // [cite: 18]
    }
    return <GuestGreeting />; // [cite: 18]
}

export default Greeting;