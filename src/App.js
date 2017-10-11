import React, { Component } from 'react';
import Info from './Info.js'
import Buttons from './Buttons.js'
import VoteButtons from './VoteButtons.js'
import SubCuisineButtons from './SubCuisineButtons.js'
import Restaurant from './Restaurant.js'
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
      vote: ['Yes', 'Maybe', 'No'],
      showCuisine: true,
      showSubs: false,
      showRestaurant: false,
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
    this.setState({ showRestaurant: true })
  }

  render() {
    return (
      <div className="App">
        <h1>Hey There!</h1>
        <Info info={this.state.info} />
        {this.state.showCuisine && <Buttons cuisine={this.state.cuisine} subCuisine={this.state.subCuisine}
          handleCuisineClick={(e) => { this.handleCuisineClick(e) }} />}
        {this.state.showRestaurant && <Restaurant title="Restaurant Title" review={4.5} distance={5.7}
          handleSubClick={(e) => { this.handleSubCuisineClick(e) }} />}
        {this.state.showSubs && <SubCuisineButtons subIndex={this.state.subIndex} subCuisine={this.state.subCuisine} />}
        <VoteButtons vote={this.state.vote} />
      </div>
    );
  }
}

export default App;
