import {SET_USER_MOVE, SET_COMPUTER_MOVE} from './gameActionType';

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