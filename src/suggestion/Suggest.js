import React, { Component } from 'react';
import Restaurant from '../Restaurant.js';
import Vote from '../Vote.js';
import './Suggest.css';


export default class Suggest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: this.props.match.params.subcuisine,
      isLoading: false,
      venues: [],
      index: 0
    };

  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({ venues: response.response.venues, isLoading: false });
        console.log(this.state.venues);
      })
      .catch(err => {
        console.error(err);
      })
  }


  handleVoteClick(e) {
    console.log('Hey!')
  }
  handleRetry(e) {
    this.setState({ index: +1 })
  }
  handleMaybe(e) {
    console.log('Maybe');
  }

  render() {
    if (this.state.isLoading) {
      return (
        <h1>Loading...</h1>
      )
    }
    return (

      <div className="row container">
        <Restaurant title={this.state.venues[5].name} review="5" distance={100}
          voteClick={() => { this.handleVoteClick() }}
          maybeClick={() => { this.maybeClick() }}
          retryClick={() => { this.retryClick() }}
        />
        <Vote />
      </div>
    )
  }

}