import React from 'react';

// Component to display Odd Team Players using Destructuring [cite: 26]
export function OddPlayers({ players }) {
    const [first, , third, , fifth] = players; // Destructuring features of ES6 
    return (
        <div>
            <li>First : {first}</li>
            <li>Third : {third}</li>
            <li>Fifth : {fifth}</li>
        </div>
    );
}

// Component to display Even Team Players using Destructuring
export function EvenPlayers({ players }) {
    const [, second, , fourth, , sixth] = players; // Destructuring features of ES6 
    return (
        <div>
            <li>Second : {second}</li>
            <li>Fourth : {fourth}</li>
            <li>Sixth : {sixth}</li>
        </div>
    );
}

export function ListofIndianPlayers({ IndianPlayers }) {
    return (
        <div>
            <ul>
                {IndianPlayers.map((player, index) => (
                    <li key={index}>Mr. {player}</li>
                ))}
            </ul>
        </div>
    );
}


// Declare two arrays and merge them using the spread operator [cite: 27]
const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
export const IndianTeam = [...T20Players, ...RanjiTrophyPlayers]; // Merge the two arrays [cite: 27]