import React from 'react';
import StartGameComponent from './components/StartGameComponent';
import RulesComponent from './components/RulesComponent';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
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
  );
}

export default App;
