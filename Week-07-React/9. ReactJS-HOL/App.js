import React from 'react';
import ListOfPlayers from './ListOfPlayers';
import { OddPlayers, EvenPlayers, ListofIndianPlayers, IndianTeam } from './IndianPlayers'; // Import components and IndianTeam

function App() {
  const flag = true; // You can change this to false to see the other output [cite: 28, 32]

  return (
    <div className="App">
      {flag === true ? (
        <div>
          <ListOfPlayers />
        </div>
      ) : (
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          <OddPlayers players={IndianTeam} />
          <hr />
          <h1>Even Players</h1>
          <EvenPlayers players={IndianTeam} />
          <hr />
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianTeam} />
        </div>
      )}
    </div>
  );
}

export default App;