import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login'
import axiosWithAuth from './utils/axiosWithAuth'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'

function App() {

  const logout = () => {
      axiosWithAuth()
        .post('/login')
        .then((res) => {
          localStorage.removeItem('token');
          window.location.href = '/login';
        })
        .catch((err => {
          console.log(err)
        }))
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
    }
  })

  return (
    <Router>
      <div>
            
            <Link onClick={logout}>Logout</Link>
         
        <Switch>
          <PrivateRoute exact path="/friendslist" component={Friends} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
