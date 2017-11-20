import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import Home from './Home.js';
import List from './List.js';
import Cuisines from './Cuisines.js';
import Suggest from './suggestion/Suggest.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      info: ['Choose Cuisine', 'Choose Sub-Cuisine', 'Idea for Her', 'Your Picks'],
      cuisine: ['Fast Food', 'Buffet', 'Healthy', 'Sweets', 'Region'],
      subCuisine: [['Burgers', 'Sandwiches', 'Tacos'],
      ['Healthy', 'Traditional', 'Asian'],
      ['Vegan', 'Paleo', 'Smoothies', 'Salad'],
      ['Ice-Cream', 'Milkshakes', 'Crepes'],
      ['Japanese', 'Chinese', 'Vietnamese', 'Italian', 'American', 'Mexican']],
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

  render() {
    return (
      <Router>
        <div className="App container">
          <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse text-white">
            <ul className="navbar-nav">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/cuisines" className="nav-link">Cuisines</Link></li>
              <li className="nav-item"><Link to="/list" className="nav-link">My List</Link></li>
              <li className="nav-item"><Link to="/undecided" className="nav-link">Undecided</Link></li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/cuisines/" component={Cuisines} />
          <Route exact path="/cuisines/:subcuisine" component={Cuisines} />
          <Route path="/cuisines/:subcuisine/suggest" component={Suggest} />

        </div>

      </Router>

    )
  }
}

export default App;


/*
-quickstart on react app docs
-pluralsight react flux 1-6,
-all the pages with the routing
*/