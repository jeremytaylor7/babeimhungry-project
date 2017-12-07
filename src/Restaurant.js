import React from 'react'
import example from './example.jpeg'
import RestaurantDetails from './RestaurantDetails';
import './Restaurant.css';

export default function Restaurant(props) {

  return (
    <div className="restaurant row col-12">
      <h2 className="restaurant-title col-12" >{props.title}</h2>
      <img src={props.img} alt="example restaurant" className="img col-4" />
      <RestaurantDetails rating={props.review} description={props.isopen} address={props.address} />
    </div>
  )
}
