import React from 'react'
import example from './example.jpeg'

export default function Restaurant(props) {

  return (
    <div className="restaurant">
      <h2 className="restaurant-title">{props.title}</h2>
      <img src={example} alt="example restaurant" />
      <h3 className="restaurant-review">Review: {props.review}</h3>
      <h3 className="restaurant-distance">Distance: {props.distance}</h3>
    </div>
  )
}
