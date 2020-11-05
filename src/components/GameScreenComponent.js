import React, {useState, useCallback} from 'react'
import ScoreBoardComponent from './ScoreBoardComponent'

export default function GameScreenComponent(props) {
    // const [resetHand, setResetHand] = useState(() => false);
    // const resetHands = useCallback(() => {
    //   setTimeout(() => {
    //       setResetHand(true)
    //   }, 1000);
    //  })
    if(props.startGame){
        return (
            <div className="game-area">
               
              <span className="player-icon" role="img" aria-label="Player">👤</span>
              {props.playerMove === undefined?<span className="player-fist" role="img" aria-label="Player">🤜</span>:<span className="player-fist" role="img" aria-label="Player">{props.playerMove.hand }</span>}
              <ScoreBoardComponent firstInningsDone={props.firstInningsDone} who={props.who} runs={props.runs} wickets={1 - props.wickets} target={props.target} balls={props.balls}/>
             {props.computerMove === undefined?<span className="player-fist" role="img" aria-label="Player">🤛</span>:<span className="player-fist" role="img" aria-label="Player">{props.computerMove.hand}</span>}
             
               <span  className="player-icon" role="img" aria-label="Robot">🤖</span>
                {/* {resetHands()} */}
            </div>
        )
    }
    else{
        return (
            <div className="game-area">
               
              <span className="player-icon" role="img" aria-label="Player">👤</span>
              {props.playerMove === undefined?<span className="player-fist" role="img" aria-label="Player">🤜</span>:<span className="player-fist" role="img" aria-label="Player">{props.playerMove.hand }</span>}
             {props.computerMove === undefined?<span className="player-fist" role="img" aria-label="Player">🤛</span>:<span className="player-fist" role="img" aria-label="Player">{props.computerMove.hand}</span>}
             
               <span  className="player-icon" role="img" aria-label="Robot">🤖</span>
                {/* {resetHands()} */}
            </div>
        )
    }

}
