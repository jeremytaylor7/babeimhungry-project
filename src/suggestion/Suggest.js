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
    const url = `https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=4MCYPSFM4K1Q2JDRYONRSJTVHTVUVX1FS2SMRAX44F4W3JIC
&client_secret=KE15X4X1S44X3QWX4MVQGXWYCE3U3GH5QK14GFSOBRUGISKZ
&v=20171120&near=89147&query=tacos`;
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
    if (this.state.isLoading === true) {
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