import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import GameAreaContainer from './GameAreaContainer';

export default function StartGameComponent() {
    return (
        <div>
            <GameAreaContainer />
            <button className="game-button"><Link to="/">Back</Link></button>
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
