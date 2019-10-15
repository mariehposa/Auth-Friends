import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FriendList from './components/FriendList';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink exact to='/'>Form</NavLink>
        <NavLink to='/friendList'>Friends</NavLink>
      </nav>

      <main>
        <Route exact path='/' component={LoginForm} />
        <Route path='/friendList' component={FriendList} />
      </main>
    </div>
  );
}

export default App;
