import React, { Component } from 'react';
import Restaurant from '../Restaurant.js';
import Vote from '../Vote.js';
import './Suggest.css';


export default class Suggest extends Component {
  constructor(props) {
    super(props)
    this.state = {};

  }


  render() {
    return (
      <div className="row">
        <Restaurant />
        <Vote />
      </div>
    )
  }

}