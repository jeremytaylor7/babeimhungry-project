import React, { Component } from 'react';
import Info from './Info.js'
import Buttons from './Buttons.js'
import VoteButtons from './VoteButtons.js'
import SubCuisineButtons from './SubCuisineButtons.js'
import Restaurant from './Restaurant.js'
import VoteInfo from './VoteInfo.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      info: ['Choose Cuisine', 'Choose Sub-Cuisine', 'Idea for Her'],
      cuisine: ['Asian', 'Spanish', 'African', 'American', 'Europe'],
      subCuisine: [['Japanese', 'Chinese', 'Korean', 'Vietnamese', 'Thai'],
      ['Mexican', 'Puerto Rican', 'Honduras', 'El Salvador'],
      ['Soul-Food', 'Nigerian'],
      ['BBQ', 'Diner', 'Fine', 'Cafe'],
      ['Greek', 'Italian', 'Irish', 'French']],
      chosenItems: ['French Fries World', 'KFC', 'McDonalds'],
      vote: ['Yes', 'Maybe', 'No'],
      voteInfo: ['Selection has been added to list!',
        'Selection has been added to maybe list'],
      voteInfoCurrent: '',
      showCuisine: true,
      showSubs: false,
      showRestaurant: false,
      showVote: false,
      showList: false,
      showVoteInfo: false,
      currentCuisine: '',
      subIndex: 0

    }


  }
  handleCuisineClick(e) {
    const subIndex = e.target.value;
    this.setState({ subIndex: subIndex })
    this.setState({ showCuisine: false })
    this.setState({ showSubs: true })
  }

  handleSubCuisineClick(e) {
    const foodType = e.target.innerText;
    console.log(foodType);
    this.setState({ subIndex: 2 })
    this.setState({ showRestaurant: true })
    this.setState({ currentCuisine: foodType })
    this.setState({ showVote: true })
  }

  handleVoteClick(e) {
    if (e.target.innerText === 'Yes') {
      this.setState({ showVote: false })
      this.setState({ showVoteInfo: true })
    }
    else if (e.target.innerText === 'Maybe') {
      this.setState({ showVoteInfo: true });
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Hey There!</h1>
        <Info info={this.state.info} subIndex={this.state.subIndex} />
        {this.state.showCuisine && <Buttons cuisine={this.state.cuisine} subCuisine={this.state.subCuisine}
          handleCuisineClick={(e) => { this.handleCuisineClick(e) }} />}
        {this.state.showRestaurant && <Restaurant title={this.state.currentCuisine} review={4.5} distance={5.7}
          handleSubClick={(e) => { this.handleSubCuisineClick(e) }} />}
        {this.state.showVoteInfo && <VoteInfo info={this.state.voteInfo} />}
        {this.state.showVote && <VoteButtons vote={this.state.vote} handleVoteClick={(e) => { this.handleVoteClick(e) }} />}
        {this.state.showSubs && <SubCuisineButtons subIndex={this.state.subIndex} subCuisine={this.state.subCuisine}
          handleSubClick={(e) => { this.handleSubCuisineClick(e) }} />}
      </div>
    );
  }
}

export default App;
