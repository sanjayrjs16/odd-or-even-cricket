import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';


//import thunk from 'redux-thunk';


const initialState = {};

//const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState
);

export default store;