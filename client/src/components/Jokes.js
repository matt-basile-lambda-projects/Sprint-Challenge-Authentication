import React, { Component } from 'react'
import axios from 'axios'
import requiresAuth from '../auth/requiresAuth'
import JokeCard from './JokeCard'
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
        <div className="mt-8 flex justify-between w-4/5 mx-auto">
          <h2 className="text-center">Wanna hear a joke??</h2>
          <button className ="bg-red hover:bg-red-dark px-4 py-2 text-white rounded w-1/6" onClick={this.logout}>Logout</button>
        </div>
        
          <div className="w-full flex flex-wrap justify-center">
            {this.state.jokes.map((joke, i) => (
              <JokeCard id={i} joke={joke.joke} key={joke.id}/>
            ))}



          </div>
         
      </div>
    )
  }
}

export default requiresAuth(Jokes)
