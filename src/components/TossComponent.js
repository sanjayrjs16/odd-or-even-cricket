import React from 'react'
import GameAreaComponent from './GameAreaComponent'
import PlayerMovesComponent from './PlayerMovesComponent'

export default function TossComponent(props) {
    return (
        <div>
            <GameAreaComponent playerMove={props.playerMove} computerMove={props.computerMove}/>
            <PlayerMovesComponent setPlayerMove={props.setPlayerMove} setComputerMove={props.setComputerMove} />
            {console.log("You chose", props.playerMove, "and computer chose", props.computerMove)}
        </div>
    )
}
