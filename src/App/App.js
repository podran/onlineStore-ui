import React from 'react';
import './App.scss';
import Register from './Register/Register';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './Homepage/HomePage';
import Login from './Login/Login';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import Category from './Category/Category';


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
