import React from 'react';
import './App.scss';
import Register from './Register';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './HomePage';
import Login from './Login';
import Header from './Header';
import Profile from './Profile';
import Category from './Category';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/category/:id" component={Category} />    
      </div>
    </Router>
  );
}

export default App;
