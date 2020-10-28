import React from 'react';
import StartGameComponent from './components/StartGameComponent';
import RulesComponent from './components/RulesComponent';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import store from './redux/store/store';

import {Provider} from 'react-redux';

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Router>
      <h1>Hand Cricket </h1>
      
      <Switch>
        <Route path="/" exact >
        <Link to="/start"><button className="game-button">Start</button></Link>
        <Link to="/rules"><button className="game-button">Rules</button></Link>
        </Route>
         <Route path="/start">
           <StartGameComponent />
         </Route>
         <Route path="/rules">
           <RulesComponent />
         </Route>
      </Switch>
     </Router>
     
    </div>
    </Provider>
  );
}

export default App;
