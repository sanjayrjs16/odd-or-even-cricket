import {SET_TOSS_CALLER,  SET_TOSS_CALL, SET_TOSS_WINNER} from '../actions/tossActionTypes';

const initialState = {tossComplete: false, };

const tossReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_TOSS_CALLER: {
            return { ...state, tossCaller: action.payload }
        }
        default:
            return state
        
    }
}
export default tossReducer;