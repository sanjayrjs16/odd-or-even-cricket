
import { combineReducers } from 'redux';
import tossReducer from './tossReducer';

export default combineReducers({
  toss: tossReducer
});