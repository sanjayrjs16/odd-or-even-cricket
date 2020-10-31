import React , {useCallback, useEffect} from 'react';
import {connect } from 'react-redux';
import InfoComponent from '../components/InfoComponent'
import GameScreenComponent from '../components/GameScreenComponent'
import { setBatFirst, setPlayerMove, setComputerMove, decrementBalls, updateWickets, updateRuns, updateTarget, resetBalls } from '../redux/actions/gameActionCreator';
import PlayerMovesComponent from '../components/PlayerMovesComponent';


function MatchContainer(props) {
    const checkWinner = useCallback(() => {
        if(props.batFirst==="You"){
            if(props.balls === 0 || props.computerStats.wickets ===0){
                if(props.target<props.computerStats.runScored){
                    console.log("Computer WON!!")
                }
                else if(props.target===props.computerStats.runScored){
                    console.log("It's a draw!!")
                }
                else{
                    console.log("You WON!!")
                }
            }
        }
        else{
            if(props.balls === 0 || props.playerStats.wickets ===0){
                if(props.target<props.playerStats.runScored){
                    console.log("You WON!!")
                }
                else if(props.target===props.computerStats.runScored){
                    console.log("It's a draw!!")
                }
                else{
                    console.log("Computer WON!!")
                }
            }
        }
    })
    const checkFirstInningsDone = useCallback(() => {  // Used to see if first batting is done
       if(props.balls===0){ 
        props.resetBalls() 
        return true           //remember to reset balls for next innings
       }
       else{
        if(props.batFirst==='You'){
            if(props.playerStats.wickets===0){
                props.resetBalls() 
                return true
            }
            return false
        }
        else{
            if(props.computerStats.wickets===0){
                props.resetBalls() 
                return true
            }
            return false
        }
       }
    });
    const checkBallOutcome = useCallback((who) => {   // Used to determine the outcome of each ball
        
            if(who==="You"){  //if first batting is player
                if(props.playerMove.number===props.computerMove.number){  //if wicket, updates wicket and returns "wicket"
                    console.log("WICKET!!")
                    props.updateWickets("You")
                    return "Wicket"
                    
                }
                else{
                        props.updateRuns("You", props.playerMove.number) //else update   runs and returns "runs"
                        
                        return "Runs"
                }
            }
            else{
                if(props.playerMove.number===props.computerMove.number){
                    console.log("WICKET!!")
                    props.updateWickets("Computer")
                    return "Wicket"
                    
                }
                else{
                        props.updateRuns("Computer", props.computerMove.number)
                      
                        return "Runs"
                }
            }
        
        
    })
    useEffect(() => {
        if(!(checkFirstInningsDone())){
               if(props.batFirst==="You"){
                    if(checkBallOutcome("You")==="Runs"){
                        props.updateTarget(props.playerMove.number)
                        console.log("Your score ( ", props.playerStats.runScored," - ",3 - props.playerStats.wickets," ) - Target is :",props.target)
                    }
               }
               else{
                
                   if(checkBallOutcome("Computer")==="Runs"){
                        props.updateTarget(props.computerMove.number)
                        console.log("Computer score ( ", props.computerStats.runScored," - ",3 - props.computerStats.wickets," ) - Target is :",props.target)
                   }
               
               }
        }
        else{
           console.log("First innings Done. Target is ",props.target);
           if(props.batFirst==="You"){
               checkBallOutcome("Computer")
               
           }
           else{
               checkBallOutcome("You")
           }
           checkWinner()
        }

    }, [props.playerMove, props.computerMove]);
 return (
     <>
         <GameScreenComponent playerMove={props.playerMove} computerMove={props.computerMove}/>
        <PlayerMovesComponent setPlayerMove={props.setPlayerMove} setComputerMove={props.setComputerMove} countBalls={true} decrementBalls={props.decrementBalls}/>
        {console.log(props.balls)}
     </>
 )
    
}
const mapStateToProps = (state) => {
    return {
        balls: state.game.balls,
        target: state.game.target,
        playerStats: state.game.playerStats,
        computerStats: state.game.computerStats,
        batFirst: state.game.batFirst,
       
    playerMove: state.game.playerMove,
   computerMove: state.game.computerMove,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setPlayerMove: (number, hand) => dispatch(setPlayerMove(number, hand)),
        setComputerMove: (number, hand) => dispatch(setComputerMove(number, hand)),
        setBatFirst: (whoeverBatsFirst) => dispatch(setBatFirst(whoeverBatsFirst)),
        decrementBalls: () => dispatch(decrementBalls()),
        updateWickets: (who) => dispatch(updateWickets(who)),
        updateRuns: (who, runs) => dispatch(updateRuns(who, runs)),
        updateTarget: (runs) => dispatch(updateTarget(runs)),
        resetBalls: () => dispatch(resetBalls())
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MatchContainer)