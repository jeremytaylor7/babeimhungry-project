import React from 'react';
import './Cuisine.css';

export default function Cuisine(props) {

  return (
    <div className="cuisine col-4">
      <h1>{props.cuisine}</h1>
    </div>
  )
}