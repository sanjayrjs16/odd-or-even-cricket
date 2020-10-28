import React from 'react';
import GameAreaComponent from './GameAreaComponent';
import InfoComponent from './InfoComponent';
import PlayerMovesComponent from './PlayerMovesComponent';
import TossContainer from './TossContainer';

import { connect } from 'react-redux';
import { setTossCaller } from '../redux/actions/tossActionCreator';




function GameAreaContainer(props) {
    return (
        <div>
            {props.tossCompleted ? console.log("Let's start") : <TossContainer /> }
            
           

        </div>
        
    )
}

const mapStateToProps = (state) => {
    return { 
             tossCompleted: state.toss.tossCompleted    }
}

export default connect(mapStateToProps)(GameAreaContainer)