import React, { Component } from 'react';
import logo from './logo.svg';
import Info from './Info.js'
import Buttons from './Buttons.js'
import VoteButtons from './VoteButtons.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      info: ['Choose Cuisine', 'Choose Sub-Cuisine', 'Idea for Babe'],
      cuisine: ['Asian', 'Spanish', 'African', 'American', 'Thai'],
      vote: ['Yes', 'Maybe', 'No'],
    }


  }
  render() {
    return (
      <div className="App">
        <h1>Hey There!</h1>
        <Info info={this.state.info} />
        <Buttons cuisine={this.state.cuisine} />
        <VoteButtons vote={this.state.vote} />
      </div>
    );
  }
}

export default App;
