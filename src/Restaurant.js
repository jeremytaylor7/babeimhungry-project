import React from 'react'
import example from './example.jpeg'
import './Restaurant.css';
export default function Restaurant(props) {

  return (
    <div className="restaurant container col-12">
      <h2 className="restaurant-title col-12" >{props.title}</h2>
      <img src={example} alt="example restaurant col-12" className="img" />
      <h3 className="restaurant-review col-6">Review: {props.review}</h3>
      <h3 className="restaurant-distance col-6">Distance: {props.distance}</h3>
    </div>
  )
}
