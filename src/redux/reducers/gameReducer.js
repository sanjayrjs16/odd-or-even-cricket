import {SET_USER_MOVE, SET_COMPUTER_MOVE} from '../actions/gameActionType';

const gameReducer = (state = {}, action) => {
    switch(action.type){
        case SET_USER_MOVE:{
            return {
                ...state, playerMove: { number: action.payload.number, hand: action.payload.hand}
            }
        }
        case SET_COMPUTER_MOVE:{
            return {
                ...state, computerMove: {number: action.payload.number, hand: action.payload.hand}
            }
        }
        default:
            return state
    }
}
export default gameReducer;