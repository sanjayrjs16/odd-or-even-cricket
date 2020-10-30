import {SET_USER_MOVE, SET_COMPUTER_MOVE, SET_BAT_FIRST} from './gameActionType';

export const setPlayerMove = (number, hand) => {
    return {
        type: SET_USER_MOVE,
        payload: { number: number,
                   hand: hand }
    }
}

export const setComputerMove = (number, hand) => {
    return {
        type: SET_COMPUTER_MOVE,
        payload: { number: number,
            hand: hand }
    }
}

export const setBatFirst = (whoeverBatsFirst) => {
    return {
        type: SET_BAT_FIRST,
        payload: whoeverBatsFirst
    }
}