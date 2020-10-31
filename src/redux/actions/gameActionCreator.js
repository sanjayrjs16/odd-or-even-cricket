import {SET_USER_MOVE, SET_COMPUTER_MOVE, SET_BAT_FIRST, UPDATE_TARGET, DECREMENT_BALLS, UPDATE_WICKETS, UPDATE_RUNS, SET_FIRST_INNINGS_DONE, RESET_BALLS} from './gameActionType';

export const setPlayerMove = (number, hand, startGame) => {
    return {
        type: SET_USER_MOVE,
        payload: { number: number,
                   hand: hand,
                   startGame: startGame }
    }
}

export const setComputerMove = (number, hand, startGame) => {
    return {
        type: SET_COMPUTER_MOVE,
        payload: { number: number,
            hand: hand,
            startGame: startGame }
    }
}

export const setBatFirst = (whoeverBatsFirst) => {
    return {
        type: SET_BAT_FIRST,
        payload: whoeverBatsFirst
    }
}

export const updateTarget = (runs) => {
    return {
        type: UPDATE_TARGET,
        payload: runs
    }
}

export const decrementBalls = () => {
    return {
        type: DECREMENT_BALLS
    }
}

export const updateWickets = (who) => {
   
        return {
            type: UPDATE_WICKETS,
            payload: who
        }
   
}

export const updateRuns = (who, runs) => {
  
        return {
            type: UPDATE_RUNS,
            who: who,
            runs: runs
        }
    
}
export const resetBalls = () => {
    return{
        type: RESET_BALLS
    }
}

export const setfirstInningsDone = () => {
    return {
        type: SET_FIRST_INNINGS_DONE
    }
}