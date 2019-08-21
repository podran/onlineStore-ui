import React from 'react';
import './App.css';
import Register from './Register';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './HomePage';
import Login from './Login';
import Header from './Header';
import Profile from './Profile';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />    
      </div>
    </Router>
  );
}

export default App;
