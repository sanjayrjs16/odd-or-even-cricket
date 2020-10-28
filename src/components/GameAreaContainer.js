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
            {props.tossComplete ? console.log("Let's start") : <TossContainer /> }
            
            <InfoComponent />
            <GameAreaComponent />
            <PlayerMovesComponent />

        </div>

    )
}

const mapStateToProps = (state) => {
    return { tossCaller: state.toss.tossCaller }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTossCaller: () => dispatch(setTossCaller())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameAreaContainer)