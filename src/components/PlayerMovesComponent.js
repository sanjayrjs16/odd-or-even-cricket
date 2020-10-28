import React from 'react';
import { connect } from 'react-redux';

 function PlayerMovesComponent() {
    return (
        <div>
            <h2> Pick a move</h2>
            <div>
                <button className="game-button" ><span role="img" aria-label="fist">✊</span> </button> 
                <button className="game-button"><span role="img" aria-label="two-finger-hand">✌</span> </button>
                <button className="game-button"><span role="img" aria-label="super-hand">👌</span></button>
                <button className="game-button"><span role="img" aria-label="four">4️⃣</span> </button>
                <button className="game-button"><span role="img" aria-label="five-fingers">🖐</span> </button>
                <button className="game-button"><span role="img" aria-label="six">6️⃣</span> </button>
         
            </div>
        </div>
    )
}
// const mapStateToProps = (state) => {
//     playerMove: state.toss
// }

export default connect()(PlayerMovesComponent)