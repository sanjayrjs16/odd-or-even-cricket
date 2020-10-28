import {SET_TOSS_CALLER,  SET_TOSS_CALL, SET_TOSS_WINNER} from './tossActionTypes';

export const setTossCaller = (caller ) => {
    return {
      type: SET_TOSS_CALLER,
      payload: caller
    }
  }