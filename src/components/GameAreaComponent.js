import React from 'react'

export default function GameAreaComponent(props) {
   
    return (
        <div className="game-area">
          <span className="player-icon" role="img" aria-label="Player">👤</span>
          {props.playerMove === undefined?<span className="player-fist" role="img" aria-label="Player">🤜</span>:<span className="player-fist" role="img" aria-label="Player">{props.playerMove.hand}</span>}
          {/* <span className="player-fist" role="img" aria-label="Player">{String.fromCodePoint(props.playerMove.hand)}</span> */}
          {/* <span className="player-fist" role="img" aria-label="Player">🤜</span> */}
          {props.computerMove === undefined?<span className="player-fist" role="img" aria-label="Player">🤛</span>:<span className="player-fist" role="img" aria-label="Player">{props.computerMove.hand}</span>}
         
           <span  className="player-icon" role="img" aria-label="Robot">🤖</span>
            
        </div>
    )
}
