import React from 'react';
import './App.css';
import Counter from './Counter';
import CurrencyConverter from './CurrencyConverter';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>React Event Examples</h1>
      <hr />
      <Counter />
      <hr />
      <CurrencyConverter />
    </div>
  );
}

export default App;