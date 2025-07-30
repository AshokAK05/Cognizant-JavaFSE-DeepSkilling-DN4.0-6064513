import React from 'react';

// Login button component
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
} // [cite: 18]

// Logout button component
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
} // [cite: 18]

export { LoginButton, LogoutButton };