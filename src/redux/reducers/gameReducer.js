import {SET_USER_MOVE, SET_COMPUTER_MOVE, SET_BAT_FIRST, UPDATE_TARGET, DECREMENT_BALLS, UPDATE_WICKETS, UPDATE_RUNS, RESET_BALLS, SET_FIRST_INNINGS_DONE} from '../actions/gameActionType';
const initialState = {
    firstInningsDone: false,
    balls: 6,
    target: 0,
    setFirstInningsDone: false,
    playerStats: {runScored: 0,
             wickets: 3  },
    computerStats: {runScored: 0,
        wickets: 3  },
            
}
const gameReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_MOVE:{
            if(action.payload.startGame){
                console.log("inside Game Reducer, game moves set")
                return {
                    ...state, playerGameMove: { number: action.payload.number, hand: action.payload.hand}
                }
            }
            else{
                return {
                    ...state, playerTossMove: { number: action.payload.number, hand: action.payload.hand}
                }
            }
            
        }
        case SET_COMPUTER_MOVE:{
            if(action.payload.startGame){
                return {
                    ...state, computerGameMove: { number: action.payload.number, hand: action.payload.hand}
                }
            }
            else{
                return {
                    ...state, computerTossMove: { number: action.payload.number, hand: action.payload.hand}
                }
            }
        }
        case SET_BAT_FIRST:{
            return{
                ...state, batFirst: action.payload, playerMove:{hand: "🤜", number: "0"}, computerMove: { hand: "🤛" , number: 0}
            }
        }
        case DECREMENT_BALLS: {
            return {
                ...state, balls: state.balls - 1 
            }
        }
        case UPDATE_WICKETS: {
            if(action.payload==="You"){
                return { ...state, playerStats: {runScored: state.playerStats.runScored, wickets: state.playerStats.wickets - 1}
                    }
            }
            else{
                return { ...state, computerStats: {runScored: state.computerStats.runScored, wickets: state.computerStats.wickets - 1}
                     }
            }
        }
        case UPDATE_RUNS: {
            if(action.who==="You"){
                return { ...state, playerStats:{runScored: state.playerStats.runScored + action.runs, wickets: state.playerStats.wickets} }
            }
            else{
                return { ...state, computerStats:{runScored: state.computerStats.runScored + action.runs, wickets: state.computerStats.wickets} }
            }
            
        }
        case UPDATE_TARGET: {
            return { ...state, target: state.target + action.payload}
        }
        case RESET_BALLS: {
            return { ...state, balls: 6}
        }
        case SET_FIRST_INNINGS_DONE: {
            return { ...state, firstInningsDone: true}
        }
        default:
            return state
    }
}
export default gameReducer;