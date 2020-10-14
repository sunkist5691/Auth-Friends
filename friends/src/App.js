import React from 'react';
import Login from './component/Login'
import FriendsForm from './component/FriendsForm'
import Home from './component/Home'
import PrivateRoute from './component/PrivateRoute'
import { Route, Link } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <div className="app">
      <div className='navigation'>
        <Link to ='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/friendsform'>FriendsList</Link>
      </div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/friendsform' component={FriendsForm} />
    </div>
  );
  
}

export default App;