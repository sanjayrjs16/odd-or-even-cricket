import React from 'react'
import {connect} from 'react-redux';
import InfoComponent from './InfoComponent'

function ScoreBoardComponent(props) {
    if((props.gameEnd)){
        return (
            <div className="info-container">
               
             <InfoComponent info={`${props.winner}  won the Match.`} />
            </div>
        )
    }
    else{
        if((!props.firstInningsDone)){
            return (
                <div className="info-container">
                    <span>{props.who} : {props.runs} - {props.wickets}</span>
                 <InfoComponent info={`${props.balls} balls remaining.`} />
                </div>
            )
        }
        else{
            return (
                <div className="info-container">
                    <span>{props.who} : {props.runs} - {props.wickets}</span>
                 <InfoComponent info={`Need ${(props.target + 1) - props.runs} runs from ${props.balls} balls to win.`} />
                </div>
            )
        }
    }
}
const mapStateToProps = (state)  => {
    return {
        batFirst: state.game.batFirst,
        gameEnd: state.game.gameEnd,
        winner: state.game.winner
    }
}
export default connect(mapStateToProps)(ScoreBoardComponent)