import React from 'react'
import InfoComponent from './InfoComponent'

export default function ScoreBoardComponent(props) {
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
