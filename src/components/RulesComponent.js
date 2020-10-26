import React from 'react'
import { Link } from 'react-router-dom';

export default function RulesComponent() {
    return (
        <div>
           
                Inside Rules Component !
               <Link to="/"> <button className="game-button">Back</button></Link>
                <h1><span role="img" aria-label="fist">✊</span> - zero</h1>
                <h1><span role="img" aria-label="index-finger-hand">☝</span>- One</h1>
                <h1><span role="img" aria-label="two-finger-hand">✌</span> - Two</h1>
                <h1><span role="img" aria-label="super-hand">👌</span> - Three</h1>
                <h1><span role="img" aria-label="four">4️⃣</span> - Four</h1>
                <h1><span role="img" aria-label="five-fingers">🖐</span> - Five</h1>
                <h1><span role="img" aria-label="six">6️⃣</span> - Six</h1>
         
        </div>
    )
}
