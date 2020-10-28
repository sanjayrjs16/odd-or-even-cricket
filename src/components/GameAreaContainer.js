import React from 'react';
import GameAreaComponent from './GameAreaComponent';
import InfoComponent from './InfoComponent';
import PlayerMovesComponent from './PlayerMovesComponent';
import TossSelectComponent from './TossSelectComponent';

import TossComponent from './TossComponent';


import { connect } from 'react-redux';
import { setTossCaller, setTossCall, setTossSelected, setTossCompleted, setTossWinner } from '../redux/actions/tossActionCreator';
import { setPlayerMove, setComputerMove } from '../redux/actions/gameActionCreator';




function GameAreaContainer(props) {
    if(props.tossCompleted) {
        return (
            <>
            <InfoComponent info={`${props.tossWinner} won the toss !!`}/> 
            <GameAreaComponent playerMove={props.playerMove} computerMove={props.computerMove}/>
            </>
        )
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
        setComputerMove: (number, hand) => dispatch(setComputerMove(number, hand))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameAreaContainer)