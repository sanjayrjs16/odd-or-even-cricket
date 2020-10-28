import { SET_TOSS_CALLER, SET_TOSS_CALL, SET_TOSS_WINNER, SET_TOSS_SELECTED, SET_TOSS_COMPLETED } from '../actions/tossActionTypes';

const initialState = { tossCompleted: false, tossSelected: false };

const tossReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOSS_CALLER: {
            console.log("We int he toss reducer", action.payload)
            return { ...state, tossCaller: action.payload }
        }
        case SET_TOSS_CALL: {
            console.log("We int he toss reducer", action.payload)
            return { ...state, tossCall: action.payload }
        }
        case SET_TOSS_SELECTED: {
            return {...state, tossSelected: !state.tossSelected}
        }
        case SET_TOSS_WINNER: {
            return {...state, tossWinner: action.payload}
        }
        case SET_TOSS_COMPLETED: {
            return {...state, tossCompleted: !state.tossCompleted}
        }
        default:
            return state

    }
}
export default tossReducer;