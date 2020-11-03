import React from 'react'
import { Link } from 'react-router-dom';

export default function RulesComponent() {
    return (
        <div>
           
             
               <Link to="/"> <button className="game-button">Back</button></Link>
               <div className="info-container">
               <p> Relive the nostalgic childhood memories of the Odd-or-Even Hand Cricket with the web-version Hand-Cricket.</p>
               <h3>Rules:</h3>
               <h4>1. Toss:</h4>
               <p>Similar to cricket, the Game Starts with a toss. Player can call Odd or Even (Or let computer make a call). Then choose one of he following moves.(Computer also drops a move, simultaneously)</p>
                
                <div>
                    <span role="img" aria-label="fist">✊</span> - Zero
                        <span role="img" aria-label="index-finger-hand">☝</span>- One
                        <span role="img" aria-label="two-finger-hand">✌</span> - Two
                        <span role="img" aria-label="super-hand">👌</span> - Three
                        <span role="img" aria-label="four">4️⃣</span> - Four
                        <span role="img" aria-label="five-fingers">🖐</span> - Five
                        <span role="img" aria-label="six">6️⃣</span> - Six
                </div>
                <p>The sum of the two numbers is taken, and checked if odd or even and toss winner is one who made the right call, can choose to bowl or bat first. </p>
                <h4>2. The Game</h4>
                <p>There is one-over(6 Balls) and each player has 3 wickets. Game begins with player choosing, one of the moves(Computer will choose too). The Aim of the bowling side, is to guess the move of the opponent and drop the same, earning him a wicket.And the batting side, must do the opposite, prevent opponents from guessing your move, and score more runs. The first innings is done, when either, an ove(6 balls) is done or when 3 wickets of batting side is lost, and a target is set for for opponent. The winner, is one who can score more runs.</p>
                </div>
        </div>
    )
}
