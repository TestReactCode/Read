import React from 'react';

import './App.css';

import Login from './Login'
import Dashboard from './Dahboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>    
      <div className="wrapper">    
       
        <div>
       
        <Switch>  
        <Route exact path='/Login' component={Login} />
        </Switch>  
        </div>
      </div>    
    </Router> 
  );
}

export default App;
