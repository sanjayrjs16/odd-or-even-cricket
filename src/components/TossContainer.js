import React from 'react';
import '../App.css';

export default function TossContainer() {
    return (
        <div className="game-container">
            <h1>Toss Time !!</h1>
            <h2> Odd or Even ?</h2>
            <button className="game-button">Odd</button>
            <button className="game-button">Even</button>
            <div>
            <div>
            <span role="img" aria-label="right-facing-fist">🤜</span>
            <span role="img" aria-label="left-facing-fist">🤛</span>
            </div>
            
            </div>
        </div>
    )
}
