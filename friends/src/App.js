import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login'
import {axiosWithAuth} from './utils/axiosWithAuth'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'

function App() {

const [ loggedIn, setLoggedIn ] = useState(false);

  const logout = () => {
      axiosWithAuth()
        .post('http://localhost:5000/api/login')
        .then((res) => {
          loggedIn(false)
          localStorage.removeItem('token');
        })
        .catch((err => {
          console.log(err)
        }))
        window.location.href = '/login';
  }

 

  useEffect(() => {
    if(localStorage.getItem('token')){
      setLoggedIn(true)
    }
  })

  return (
    <Router>
      <div>
            
        <Link onClick={logout}>Logout</Link>
        {(localStorage.getItem('token') && <Link to="/friendslist">Protected Page</Link>)}
         
        <Switch>
          <PrivateRoute exact path="/friendslist" component={Friends} />
          <Route  component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
