import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Home from './containers/home/Home';
import Users from './containers/users/Users';
import Menu from './components/menu/Menu';
import User from './containers/user/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route path="/users/:userId">
          <User />
        </Route>
      </Router>
    </div>
  );
}

export default App;
