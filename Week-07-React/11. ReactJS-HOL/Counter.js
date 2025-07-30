import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1); // To increment the value [cite: 78]
    };

    const decrement = () => {
        setCount(count - 1); // To decrease the value
    };

    const sayHello = () => {
        console.log("Hello followed by a static message: Welcome to React Events!"); // Say Hello followed by a static message [cite: 79]
    };

    const incrementAndSayHello = () => {
        increment(); // The “Increase” button should invoke multiple methods [cite: 77]
        sayHello(); // The “Increase” button should invoke multiple methods [cite: 77]
    };

    const sayWelcome = (message) => {
        alert(message); // Create a button “Say Welcome” which invokes the function which takes “welcome” as an argument 
    };

    const handlePress = (event) => {
        console.log("I was clicked"); // Create a button which invokes synthetic event “OnPress” which display “I was clicked” 
        console.log("Synthetic Event:", event); // Demonstrates synthetic event 
    };

    return (
        <div>
            <h2>Counter: {count}</h2>
            {/* Create “Increment” button to increase the value of the counter and “Decrement” button to decrease the value of the counter.  */}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <br /><br />
            {/* The “Increase” button should invoke multiple methods. [cite: 77] */}
            <button onClick={incrementAndSayHello}>Increment & Say Hello</button>
            <br /><br />
            {/* Create a button “Say Welcome” which invokes the function which takes “welcome” as an argument.  */}
            <button onClick={() => sayWelcome("Welcome to Event Handling!")}>Say Welcome</button>
            <br /><br />
            {/* Create a button which invokes synthetic event “OnPress” which display “I was clicked”  */}
            <button onClick={handlePress}>Press Me (Synthetic Event)</button>
        </div>
    );
}

export default Counter;