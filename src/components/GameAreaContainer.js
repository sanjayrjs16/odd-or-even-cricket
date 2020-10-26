import React from 'react';
import GameAreaComponent from './GameAreaComponent';
import InfoComponent from './InfoComponent';
import PlayerMovesComponent from './PlayerMovesComponent';



export default function GameAreaContainer() {
    return (
        <div>
            
            <InfoComponent />
            <GameAreaComponent />
            <PlayerMovesComponent />
       
        </div>
        
    )
}
