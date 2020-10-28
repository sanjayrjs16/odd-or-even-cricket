import {SET_TOSS_CALLER,  SET_TOSS_CALL, SET_TOSS_WINNER, SET_TOSS_SELECTED, SET_TOSS_COMPLETED} from './tossActionTypes';

export const setTossCaller = (caller) => {
  console.log("WE in the action creator", caller)
    return {
      type: SET_TOSS_CALLER,
      payload: caller
    }
  }
  export const setTossCall = (choice) => {
    console.log("WE in the toss calling", choice)
    return {
      type: SET_TOSS_CALL,
      payload: choice
    }
  }
  export const setTossSelected = () => {
    return {
      type: SET_TOSS_SELECTED
    }
  }
  export const setTossWinner = (winner) => {
    return {
      type: SET_TOSS_WINNER,
      payload: winner
    }
  }
  export const setTossCompleted = () => {
    return {
      type: SET_TOSS_COMPLETED
    }
  }