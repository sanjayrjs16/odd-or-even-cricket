import React from 'react'

export default function ScoreBoardComponent(props) {
    return (
        <div className="info-container">
            <span>{props.who} : {props.runs} - {props.wickets}</span>
         
        </div>
    )
}
