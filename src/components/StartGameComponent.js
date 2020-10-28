import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../App.css';
import GameAreaContainer from './GameAreaContainer';

function StartGameComponent(props) {
    return (
        <div>
            <GameAreaContainer />
            {! (props.tossSelected) && <button className="game-button"><Link to="/">Back</Link></button>}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tossSelected: state.toss.tossSelected
    }
}

export default connect(mapStateToProps)(StartGameComponent);