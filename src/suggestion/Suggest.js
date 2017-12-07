import React, { Component } from 'react';
import Restaurant from '../Restaurant.js';
import Vote from '../Vote.js';
import './Suggest.css';
import fire from '../fire.js';
import withRouter from 'react-router-dom'


export default class Suggest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: this.props.match.params.subcuisine,
      isLoading: false,
      venues: [],
      venueId: 0,
      venueImage: '',
      index: 1,
      postalCode: 0,
      chosen: false
    };

  }

  fetchImage(venueId) {
    const urlImages = `https://api.foursquare.com/v2/venues/${venueId}/photos?ll=40.7,-74&client_id=4MCYPSFM4K1Q2JDRYONRSJTVHTVUVX1FS2SMRAX44F4W3JIC&client_secret=KE15X4X1S44X3QWX4MVQGXWYCE3U3GH5QK14GFSOBRUGISKZ&v=20171120`
    return fetch(urlImages)
      .then(response => response.json())
      .then(response => {
        if (response.response.photos.items[1] === undefined) {
          return 'https://cdn.pbrd.co/images/GVXKfA1.png'
        }

        return response.response.photos.items[1].prefix + '300x300' + response.response.photos.items[1].suffix
      })
  }

  fetchVenueDetails(venueId) {
    const detailUrl = `https://api.foursquare.com/v2/venues/${venueId}?client_id=4MCYPSFM4K1Q2JDRYONRSJTVHTVUVX1FS2SMRAX44F4W3JIC
&client_secret=KE15X4X1S44X3QWX4MVQGXWYCE3U3GH5QK14GFSOBRUGISKZ&v=20171120`
    return fetch(detailUrl)
      .then(response => response.json())
      .then(response => {
        return response;
      })
  }

  componentWillMount() {
    const referral = fire.database().ref('users/' + this.props.user.uid + '/zipcode');

    referral.on('value', y => {

      this.setState({
        postalCode: y.val().zipcode
      })
    })
  }
  componentDidMount() {
    const url = `https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=4MCYPSFM4K1Q2JDRYONRSJTVHTVUVX1FS2SMRAX44F4W3JIC
&client_secret=KE15X4X1S44X3QWX4MVQGXWYCE3U3GH5QK14GFSOBRUGISKZ
&v=20171120&near=${this.state.postalCode}&query=${this.props.match.params.subcuisine}`

    this.setState({ isLoading: true });

    const loadedState = {

    }
    fetch(url)
      .then(response => response.json())
      .then(response => {
        loadedState.venues = [...this.state.venues, ...response.response.venues];
        return this.fetchVenueDetails(response.response.venues[this.state.index].id);
      })

      .then(response => {
        console.log(response);
        if (response.response.venue.rating === undefined && response.response.venue.hours === undefined) {
          loadedState.hours = 'Times not available';
          loadedState.rating = 'no review';
        }
        else {
          loadedState.address = response.response.venue.location.address;
          loadedState.rating = response.response.venue.rating;
          loadedState.hours = response.response.venue.hours.status;

          console.log(loadedState);
        }
        return this.fetchImage(response.response.venue.id

        )
      })
      .then(img => {
        loadedState.venueImage = img;
        loadedState.isLoading = false;
        this.setState(loadedState);
      })
      .catch(err => {
        console.error(err);
      })
  }
  /*avoid calling setstate until ready for interface to be rendered
  //try to call it as little as possible.
  firebase/reactfire
  */

  handleVoteClick(e) {

    const today = new Date;
    const yy = today.getFullYear();
    const mm = today.getMonth();
    const dd = today.getDay();
    const tdFull = mm + "/" + dd + "/" + yy;

    console.log('Hey!')
    const ref = fire.database().ref();
    ref.child('users').on('value', snap => {
      console.log(snap.val());
      console.log(this.props.user);
    })
    ref.child('users/' + this.props.user.uid + '/choices').push({
      restaurant: this.state.venues[this.state.index].name,
      date: tdFull
    })
    this.setState({
      chosen: true
    })




  }
  handleRetry(e) {
    this.setState({ index: this.state.index += 1, chosen: false })
    this.componentDidMount();

  }
  handleMaybe(e) {
    console.log('Maybe');
  }

  render() {
    const index = this.state.index;
    const title = this.state.venues[index] !== undefined && this.state.venues[index].name;
    // const img = this.state.venues[index] !== undefined && this.state.venueImage;
    const img = this.state.venueImage;
    console.log(this.props);

    if (this.state.isLoading) {
      return (
        <h1>Loading...</h1>
      )
    }
    else if (this.props.user === null) {
      return (
        <h2> Please sign in to to continue using this application! </h2>
      )
    }
    return (

      <div className="row container" >
        <Restaurant title={title} review={this.state.rating} address={this.state.address} img={img}
          isopen={this.state.hours}
        />
        {this.state.chosen ?
          <h5 className="choice">Restaurant Successfully added to your list</h5>
          :
          null
        }
        <Vote
          voteClick={() => { this.handleVoteClick() }}
          retryClick={(e) => { this.handleRetry(e) }}
        />
      </div>
    )
  }

}

