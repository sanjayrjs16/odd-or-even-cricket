
import { combineReducers } from 'redux';
import tossReducer from './tossReducer';
import gameReducer from './gameReducer';

export default combineReducers({
  toss: tossReducer,
  game: gameReducer
});