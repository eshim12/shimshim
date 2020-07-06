import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About'
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={About} />
      </Switch>
    </Router>
  )
}


export default App;
