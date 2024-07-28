import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [playerNumber, setPlayerNumber] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/join')
            .then(response => response.json())
            .then(data => setPlayerNumber(data.number));
    }, []);

    const checkNumber = () => {
        fetch('/api/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ number: playerNumber })
        })
            .then(response => response.json())
            .then(data => setMessage(data.message));
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Number Sequence Game</h1>
                <p>Your number: {playerNumber}</p>
                <button onClick={checkNumber} disabled={playerNumber === null}>
                    Is this the next number?
                </button>
                <p>{message}</p>
            </header>
        </div>
    );
}

export default App;
