import React from 'react';
import GameScreenComponent from './GameScreenComponent';
import InfoComponent from './InfoComponent';
import PlayerMovesComponent from './PlayerMovesComponent';
import TossSelectComponent from './TossSelectComponent';

import TossComponent from './TossComponent';


import { connect } from 'react-redux';
import { setTossCaller, setTossCall, setTossSelected, setTossCompleted, setTossWinner } from '../redux/actions/tossActionCreator';
import { setBatFirst, setPlayerMove, setComputerMove } from '../redux/actions/gameActionCreator';




function GameAreaContainer(props) {
    if(props.tossCompleted) {
        if(props.batFirst===undefined){
            if(props.tossWinner==="You"){
                return (
                    <>
                    <InfoComponent info={`It's ${(props.playerMove.number + props.computerMove.number)%2===0?"EVEN":"ODD"} ! ,  ${props.tossWinner} won the toss !!`}/> 
                    <GameScreenComponent playerMove={props.playerMove} computerMove={props.computerMove}/>
                    <button className="game-button" onClick={() => props.setBatFirst("You")}>Bat</button>
                    <button className="game-button"  onClick={() => props.setBatFirst("Computer")}>Bowl</button>
                    {console.log(props.batFirst, "Will BAT first")}
                    </>
                )
            }
            else{
                return (
                    <>
                    <InfoComponent info={`It's ${(props.playerMove.number + props.computerMove.number)%2===0?"EVEN":"ODD"} ! ,  ${props.tossWinner} won the toss !!`}/> 
                    <GameScreenComponent playerMove={props.playerMove} computerMove={props.computerMove}/>
                    {Math.floor(Math.random() * 2) === 0?props.setBatFirst("Computer"):props.setBatFirst("You")}
                    </>
                )
            }    
        }
        
    }
    else{
        if(props.tossSelected){
           return ( <>
            <InfoComponent info={`TOSS TIME ! ! , ${props.tossCaller} chose ${props.tossCall}`} />
            <TossComponent tossCaller={props.tossCaller} tossCall={props.tossCall} setTossWinner={props.setTossWinner} setTossCompleted={props.setTossCompleted} playerMove={props.playerMove} computerMove={props.computerMove} setPlayerMove={props.setPlayerMove} setComputerMove={props.setComputerMove}/>
            
            </> )
        }
        else{
            return (
                <TossSelectComponent setTossCall={props.setTossCall} setTossCaller={props.setTossCaller} setTossSelected={props.setTossSelected} />
            )
        }
      
    }

}

const mapStateToProps = (state) => {
    return { 
             tossCompleted: state.toss.tossCompleted,
             tossSelected: state.toss.tossSelected,
             tossCaller: state.toss.tossCaller,
             tossCall: state.toss.tossCall,
             tossWinner: state.toss.tossWinner,
             batFirst: state.game.batFirst,
             playerMove: state.game.playerMove,
            computerMove: state.game.computerMove
                }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTossCaller: (caller) => dispatch(setTossCaller(caller)),
        setTossCall: (choice) => dispatch(setTossCall(choice)),
        setTossSelected: () => dispatch(setTossSelected()),
        setTossCompleted: () => dispatch(setTossCompleted()),
        setTossWinner: (winner) => dispatch(setTossWinner(winner)),
        setPlayerMove: (number, hand) => dispatch(setPlayerMove(number, hand)),
        setComputerMove: (number, hand) => dispatch(setComputerMove(number, hand)),
        setBatFirst: (whoeverBatsFirst) => dispatch(setBatFirst(whoeverBatsFirst))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameAreaContainer)