import React from 'react';
import '../App.css';
import {connect} from 'react-redux';


import { setTossCaller, setTossCall, setTossSelected, setTossCompleted } from '../redux/actions/tossActionCreator';
import TossSelectComponent from './TossSelectComponent';

import TossComponent from './TossComponent';
import InfoComponent from './InfoComponent';



function TossContainer(props) {
 
    return (
       <>
       
         {props.tossSelected?<><InfoComponent info={`${props.tossCaller} chose ${props.tossCall}`}/><TossComponent /></>:<TossSelectComponent setTossCall={props.setTossCall} setTossCaller={props.setTossCaller} setTossSelected={props.setTossSelected}/>}
           
           
      </>

    )
}
const mapStateToProps = (state) => {
    return {
        tossSelected: state.toss.tossSelected,
        tossCaller: state.toss.tossCaller,
        tossCall: state.toss.tossCall

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTossCaller: (caller) => dispatch(setTossCaller(caller)),
        setTossCall: (choice) => dispatch(setTossCall(choice)),
        setTossSelected: () => dispatch(setTossSelected()),
        setTossCompleted: () => dispatch(setTossCompleted())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TossContainer);