import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import InfoComponent from '../components/InfoComponent'
import GameScreenComponent from '../components/GameScreenComponent'
import { setBatFirst, setPlayerMove, setComputerMove, decrementBalls, updateWickets, updateRuns, updateTarget, resetBalls, setfirstInningsDone, declareWinner, setEndGame } from '../redux/actions/gameActionCreator';
import PlayerMovesComponent from '../components/PlayerMovesComponent';
import { Link } from 'react-router-dom';


function MatchContainer(props) {

    const checkWinner = useCallback(() => {
        console.log("checkWinner(): Checking Winner....", "YOur Wickets remaining: ",props.playerStats.wickets," Computer wickets remaining: ", props.computerStats.wickets)
        if (!(props.firstInningsDone)) {
            console.log("checkWinner(): Winner undecided, first innings in progress, batting:",props.batFirst," Computer wickets remaining: ", props.computerStats.wickets, " Player wickets remaining: ", props.playerStats.wickets)
            return false
        }
        else {
            if (props.batFirst === "You") {
                if (props.balls === 0 || props.computerStats.wickets === 0) {
                    if ((props.target) < props.computerStats.runScored) {
                        console.log("Computer WON!!")
                        props.declareWinner("Computer")
                        props.setEndGame()
                        return true
                    }
                    else if (props.target === props.computerStats.runScored) {
                        props.declareWinner("Draw")
                        props.setEndGame()
                        return true
                    }
                    else {
                        props.declareWinner("You")
                        props.setEndGame()
                        return true
                    }
                }
                else {
                    if ((props.target) < props.computerStats.runScored) {
                        console.log("Computer WON!!")
                        props.declareWinner("Computer")
                        props.setEndGame()
                        return true
                    }


                }
            }
            else {
                if (props.balls === 0 || props.playerStats.wickets === 0) {
                    if (props.target < props.playerStats.runScored) {
                        console.log("You WON!!")
                        props.declareWinner("You")
                        props.setEndGame()
                        return true
                    }
                    else if (props.target === props.playerStats.runScored) {
                        console.log("It's a draw!!")
                        props.declareWinner("Draw")
                        props.setEndGame()
                        return true
                    }
                    else {
                        console.log("Computer WON!!")
                        props.declareWinner("Computer")
                        props.setEndGame()
                        return true
                    }
                }
                else {
                    if (props.target < props.playerStats.runScored) {
                        console.log("You WON!!")
                        props.declareWinner("You")
                        props.setEndGame()
                        return true
                    }


                }
            }

        }
    })
    const checkFirstInningsDone = useCallback(() => {  // Used to see if first batting is done
        console.log("checkFirstInningsDone(): Checking for completion of first innings.....")
        if (props.balls === 0) {
            console.log("checkFirstInningsDone() : First innings is complete (Balls finished)")
            props.resetBalls()
            props.setfirstInningsDone()          //remember to reset balls for next innings
        }
        else {
            if (props.batFirst === 'You') {
                if (props.playerStats.wickets === 0) {
                    console.log("checkFirstInningsDone(): First innings is complete (Player wickets are 0)")
                    props.resetBalls()
                    props.setfirstInningsDone()
                }

            }
            else {
                if (props.computerStats.wickets === 0) {
                    console.log("checkFirstInningsDone(): First innings is complete (Computer wickets are 0)")
                    props.resetBalls()
                    props.setfirstInningsDone()
                }

            }
        }
    });
    const checkBallOutcome = useCallback((who) => {   // Used to determine the outcome of each ball
        console.log("Checnking ball outcome....")
        if (who === "You") {  //if first batting is player
            if (props.playerGameMove.number === props.computerGameMove.number) {  //if wicket, updates wicket and returns "wicket"
                console.log("WICKET!!")
                props.updateWickets("You")
                return "Wicket"

            }
            else {
                props.updateRuns("You", props.playerGameMove.number) //else update   runs and returns "runs"

                return "Runs"
            }
        }
        else {
            if (props.playerGameMove.number === props.computerGameMove.number) {
                console.log("WICKET!!")
                props.updateWickets("Computer")
                return "Wicket"

            }
            else {
                props.updateRuns("Computer", props.computerGameMove.number)

                return "Runs"
            }
        }


    })
    useEffect(() => {
        if (props.playerGameMove != undefined && props.computerGameMove != undefined) { //we have begun the game
            if (!(props.firstInningsDone)) {
                console.log("First innings not complete (Inside useEffect)")
                if (props.batFirst === "You") {
                    if (checkBallOutcome("You") === "Runs") {
                        props.updateTarget(props.playerGameMove.number)
                        console.log("Your score ( ", props.playerStats.runScored, " - ", 1 - props.playerStats.wickets, " ) - Target is :", props.target)
                    }
                }
                else {

                    if (checkBallOutcome("Computer") === "Runs") {
                        props.updateTarget(props.computerGameMove.number)
                        console.log("Computer score ( ", props.computerStats.runScored, " - ", 1 - props.computerStats.wickets, " ) - Target is :", props.target)
                    }

                }
                checkFirstInningsDone()
            }
            else {

                if (props.batFirst === "You") {
                    checkBallOutcome("Computer")

                    console.log("Computer score ( ", props.computerStats.runScored, " - ", 1 - props.computerStats.wickets, " ) - Target is :", props.target)
                }
                else {
                    checkBallOutcome("You")

                    console.log("Your score ( ", props.playerStats.runScored, " - ", 1 - props.playerStats.wickets, " ) - Target is :", props.target)
                }

            }
        }
        else {
            console.log("Game hasn't begun yet!!, select a move")
        }

    }, [props.playerGameMove, props.computerGameMove, props.winner, props.firstInningsDone]);

    if (!(checkWinner())) {
        if (props.firstInningsDone) {
            return (
                <>
                    <InfoComponent info={`The target is ${props.target + 1}`} />
                    <GameScreenComponent playerMove={props.playerGameMove} computerMove={props.computerGameMove} startGame={true} firstInningsDone={props.firstInningsDone} who={props.batFirst === "You" ? "Computer" : "You"} runs={props.batFirst === "You" ? props.computerStats.runScored : props.playerStats.runScored} wickets={props.batFirst === "You" ? props.computerStats.wickets : props.playerStats.wickets} target={props.target} balls={props.balls} />
                    <PlayerMovesComponent setPlayerMove={props.setPlayerMove} setComputerMove={props.setComputerMove} countBalls={true} decrementBalls={props.decrementBalls} startGame={true} />

                </>
            )
        }
        return (
            <>   <InfoComponent info={`${props.tossWinner} won the toss and chose to ${props.batFirst === props.tossWinner ? "Bat" : "Bowl"} first !`} />
                <GameScreenComponent playerMove={props.playerGameMove} computerMove={props.computerGameMove} startGame={true} firstInningsDone={props.firstInningsDone} who={props.batFirst} runs={props.batFirst === "You" ? props.playerStats.runScored : props.computerStats.runScored} wickets={props.batFirst === "You" ? props.playerStats.wickets : props.computerStats.wickets} balls={props.balls} />
                <PlayerMovesComponent setPlayerMove={props.setPlayerMove} setComputerMove={props.setComputerMove} countBalls={true} decrementBalls={props.decrementBalls} startGame={true} />
                {console.log(props.balls)}
            </>
        )
    }
    else {
        if (props.winner == "Draw") {
            return (
                <>
                    <InfoComponent info={"It's a draw !!"} />
                    <GameScreenComponent gameEnd={true} playerMove={props.playerGameMove} computerMove={props.computerGameMove} startGame={true} firstInningsDone={props.firstInningsDone} who={props.batFirst} runs={props.batFirst === "You" ? props.playerStats.runScored : props.computerStats.runScored} wickets={props.batFirst === "You" ? props.playerStats.wickets : props.computerStats.wickets} balls={props.balls} />
                    <button className="game-button" onClick={() => window.location.reload()}>Rematch</button>
                </>
            )
        }
        else {
            return (
                <>
                    <InfoComponent info={`${props.winner} won the match !!`} />
                    <GameScreenComponent gameEnd={true} playerMove={props.playerGameMove} computerMove={props.computerGameMove} startGame={true} firstInningsDone={props.firstInningsDone} who={props.batFirst} runs={props.batFirst === "You" ? props.playerStats.runScored : props.computerStats.runScored} wickets={props.batFirst === "You" ? props.playerStats.wickets : props.computerStats.wickets} balls={props.balls} />
                    <button className="game-button" onClick={() => window.location.reload()} >Rematch</button>
                </>
            )
        }
    }

}
const mapStateToProps = (state) => {
    return {
        balls: state.game.balls,
        target: state.game.target,
        playerStats: state.game.playerStats,
        computerStats: state.game.computerStats,
        batFirst: state.game.batFirst,
        firstInningsDone: state.game.firstInningsDone,
        gameEnd: state.game.gameEnd,
        playerGameMove: state.game.playerGameMove,
        computerGameMove: state.game.computerGameMove,
        winner: state.game.winner

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setPlayerMove: (number, hand, startGame) => dispatch(setPlayerMove(number, hand, startGame)),
        setComputerMove: (number, hand, startGame) => dispatch(setComputerMove(number, hand, startGame)),
        setBatFirst: (whoeverBatsFirst) => dispatch(setBatFirst(whoeverBatsFirst)),
        decrementBalls: () => dispatch(decrementBalls()),
        updateWickets: (who) => dispatch(updateWickets(who)),
        updateRuns: (who, runs) => dispatch(updateRuns(who, runs)),
        updateTarget: (runs) => dispatch(updateTarget(runs)),
        resetBalls: () => dispatch(resetBalls()),
        setfirstInningsDone: () => dispatch(setfirstInningsDone()),
        declareWinner: (winner) => dispatch(declareWinner(winner)),
        setEndGame: () => dispatch(setEndGame())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MatchContainer)