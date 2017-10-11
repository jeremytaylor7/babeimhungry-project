import React from 'react'

export default function Restaurant(props) {

  return (
    <div className="restaurant">
      <h2 className="restaurant-title">{props.title}</h2>
      <img src="test.jpg" />
      <h3 className="restaurant-review">{props.review}</h3>
      <h3 className="restaurant-distance">{props.distance}</h3>
    </div>
  )
}
