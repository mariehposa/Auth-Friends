import React from 'react';
import './App.css';
import { Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FriendList from './components/FriendList';
import NewFriend from './components/NewFriend';

export function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink exact to='/'>Form</NavLink>
        <NavLink to='/friendList'>Friends</NavLink>
        <NavLink to='newFriend' >New Friend</NavLink>
      </nav>

      <main>
        <Route exact path='/' component={LoginForm} />
        <Route path='/friendList' render={props => withAuthCheck(FriendList, props) } />
        <Route path='/newFriend' render={props => withAuthCheck(NewFriend, props) } />
      </main>
    </div>
  );
}

function withAuthCheck (Component, props) {
  if (localStorage.getItem('token')) {
    return <Component {...props} />
  }
  else {
    return <Redirect to='/' />;
  }
}

export default withRouter(App);
