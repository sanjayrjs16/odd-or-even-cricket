import React from 'react';
import StartGameComponent from './components/StartGameComponent';
import RulesComponent from './components/RulesComponent';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <div className="App">
     <Router>
      <h1>Hand Cricket 🏏</h1>
      
      <Switch>
        <Route path="/" exact >
        <button className="game-button"><Link to="/start">Start Game</Link></button>
        <button className="game-button"><Link to="/rules">Game Rules</Link></button>
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
