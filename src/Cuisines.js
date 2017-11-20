import React, { Component } from 'react';
import Choices from './Choices.js';
import Cuisine from './cuisines/Cuisine';
import './cuisines/Cuisine.css'

export default class Cuisines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisine: [{
        title: 'Fast Food',
        subCuisines: ['Burgers', 'Sandwiches', 'Tacos']

      },
      {
        title: 'Buffet',
        subCuisines: ['Healthy', 'Traditional', 'Asian']
      },
      {
        title: 'Healthy',
        subCuisines: ['Vegan', 'Paleo', 'Smoothies', 'Salad']
      },
      {
        title: 'Sweets',
        subCuisines: ['Ice-Cream', 'Milkshakes', 'Crepes']
      },
      {
        title: 'Region',
        subCuisines: ['Japanese', 'Chinese', 'Vietnamese', 'Italian', 'American', 'Mexican']

      }]

    }

  }

  createCuisines() {
    const params = this.props.match.params.subcuisine;
    const cuisines = this.state.cuisine;
    return cuisines.map(item => {
      if (params === item.title) {
        console.log('found the right param!');
        return item.subCuisines.map(item => {
          return <Cuisine key={item} cuisine={item} value={item}
            onClick={(e) => this.handleSubClick(e)} />
        })
      }
      else if (params === undefined) {
        return <Cuisine key={item.title} cuisine={item.title} value={item.title}
          onClick={(e) => this.handleCuisineClick(e)} />
      }
    })
  }

  handleCuisineClick(e) {
    this.props.history.push(`/cuisines/${e.target.value}`);
  }
  handleSubClick(e) {
    console.log(e.target.value);
    this.props.history.push(`/cuisines/${e.target.value}/suggest`);
  }
  render() {
    const params = this.props.match.params.subcuisine;
    const cuisineComponents = this.createCuisines();
    return (
      <div className="row">
        <h1 className="info col-12">Please Choose a Cuisine</h1>
        {cuisineComponents}
      </div>
    )
  }
}