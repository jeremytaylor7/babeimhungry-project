import React from 'react';
import './RestaurantDetails.css';

export default function RestaurantDetails(props) {

  return (
    <div className="restaraunt-details" >
      <h2 className="restaurant-review">Review: {props.rating}</h2>
      <h2 className="restaurant-address">Address: {props.address}</h2>
      <h2 className="restaurant-desc">{props.description}</h2>
    </div>
  )
}