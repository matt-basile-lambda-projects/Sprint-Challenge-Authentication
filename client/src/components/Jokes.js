import React, { Component } from 'react'
import axios from 'axios'
import requiresAuth from '../auth/requiresAuth'

class Jokes extends Component {
  state = {
    jokes: [],
  };
  componentDidMount() {
    const endpoint = 'http://localhost:3300/api/jokes';
    axios.get(endpoint).then(res => {
      console.log(res)
      this.setState({ jokes: res.data });
    });
  }
  logout = () => {
    localStorage.removeItem('jwt');

    this.props.history.push('/');
  };
  render() {
    console.log(this.state.jokes.joke)
    return (
      <div>
        <h2>Wanna hear a joke??</h2>
          <ul>
            {this.state.jokes.map(joke => (
              <li key={joke.id}>{joke.joke}</li>
            ))}
          </ul>
          <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

export default requiresAuth(Jokes)
