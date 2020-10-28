import React from 'react'

export default function TossSelectComponent(props) {
    return (
        <div>
              <div className="game-container">
                <h1>Toss Time !!</h1>
                <h2> Odd or Even ?</h2>
                <button className="game-button" onClick={() => {props.setTossCaller("You"); props.setTossCall("ODD");props.setTossSelected();}}>Odd</button>
                <button className="game-button" onClick={() => {props.setTossCaller("You"); props.setTossCall("EVEN");props.setTossSelected();}}>Even</button>
                
            </div>
           <hr />
           <div className="game-container">
             <button className="game-button" onClick={() => {props.setTossCaller("Computer");Math.floor(Math.random()*2)===0?props.setTossCall("ODD"):props.setTossCall("EVEN");props.setTossSelected();}}>Let Computer make the call</button>
          
           </div>
           
        </div>
    )
}
