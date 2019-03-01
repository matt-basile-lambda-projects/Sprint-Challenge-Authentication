import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import Jokes from './components/Jokes'
import Login from './components/Login'
import Register from './components/Register'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/jokes" component={Jokes}></Route>
      </div>
    );
  }
}

export default withRouter(App);
