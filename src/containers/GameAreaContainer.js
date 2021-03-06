import React, {useCallback} from 'react';
import GameScreenComponent from '../components/GameScreenComponent';
import InfoComponent from '../components/InfoComponent';
import PlayerMovesComponent from '../components/PlayerMovesComponent';
import TossSelectComponent from '../components/TossSelectComponent';

import TossComponent from '../components/TossComponent';


import { connect } from 'react-redux';
import { setTossCaller, setTossCall, setTossSelected, setTossCompleted, setTossWinner } from '../redux/actions/tossActionCreator';
import { setBatFirst, setPlayerMove, setComputerMove } from '../redux/actions/gameActionCreator';

import MatchContainer from './MatchContainer';




function GameAreaContainer(props) {

    const pickComputerChoice = useCallback(() => {
       Math.floor(Math.random() * 2) === 0?props.setBatFirst("Computer"):props.setBatFirst("You")
    })


    if(props.tossCompleted) {
        if(props.batFirst===undefined){
            if(props.tossWinner==="You"){
                return (
                    <>
                    <InfoComponent info={`It's ${(props.playerTossMove.number + props.computerTossMove.number)%2===0?"EVEN":"ODD"} ! ,  ${props.tossWinner} won the toss !!`}/> 
                    <GameScreenComponent playerMove={props.playerTossMove} computerMove={props.computerTossMove} startGame={false}/>
                    <button className="game-button" onClick={() => props.setBatFirst("You")}>Bat</button>
                    <button className="game-button"  onClick={() => props.setBatFirst("Computer")}>Bowl</button>
                    
                    </>
                )
            }
            else{
                return (
                    <>
                    <InfoComponent info={`It's ${(props.playerTossMove.number + props.computerTossMove.number)%2===0?"EVEN":"ODD"} ! ,  ${props.tossWinner} won the toss !!`}/> 
                    <GameScreenComponent playerMove={props.playerTossMove} computerMove={props.computerTossMove} startGame={false}/>
                    {setTimeout(() => {
                        pickComputerChoice()
                    }, 1678)}
                    </>
                )
            }    
        }
        else{
            return (
                <>
                 
                <MatchContainer tossWinner={props.tossWinner}/>
               
                </>

            )
        }
        
    }
    else{
        if(props.tossSelected){
           return ( <>
            <InfoComponent info={`TOSS TIME ! ! , ${props.tossCaller} chose ${props.tossCall}`} />
            <TossComponent tossCaller={props.tossCaller} tossCall={props.tossCall} setTossWinner={props.setTossWinner} setTossCompleted={props.setTossCompleted} playerMove={props.playerTossMove} computerMove={props.computerTossMove} setPlayerMove={props.setPlayerMove} setComputerMove={props.setComputerMove}/>
            
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
             playerTossMove: state.game.playerTossMove,
            computerTossMove: state.game.computerTossMove,
            playerGameMove: state.game.playerGameMove,
            computerGameMove: state.game.computerGameMove
                }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTossCaller: (caller) => dispatch(setTossCaller(caller)),
        setTossCall: (choice) => dispatch(setTossCall(choice)),
        setTossSelected: () => dispatch(setTossSelected()),
        setTossCompleted: () => dispatch(setTossCompleted()),
        setTossWinner: (winner) => dispatch(setTossWinner(winner)),
        setPlayerMove: (number, hand, startGame) => dispatch(setPlayerMove(number, hand, startGame)),
        setComputerMove: (number, hand, startGame) => dispatch(setComputerMove(number, hand, startGame)),
        setBatFirst: (whoeverBatsFirst) => dispatch(setBatFirst(whoeverBatsFirst))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameAreaContainer)