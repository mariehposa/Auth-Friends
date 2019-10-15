import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink exact to='/'>Form</NavLink>
      </nav>

      <main>
        <Route exact path='/' component={LoginForm} />
      </main>
    </div>
  );
}

export default App;
