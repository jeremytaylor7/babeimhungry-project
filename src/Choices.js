import React from 'react'

export default function Choices(props) {

  return (
    <div className="button-container">
      <button className="btn" value="0" onClick={(e) => { props.handleCuisineClick(e) }}>{props.cuisine[0]}</button>
      <button className="btn" value="1" onClick={(e) => { props.handleCuisineClick(e) }}>{props.cuisine[1]}</button>
      <button className="btn" value="2" onClick={(e) => { props.handleCuisineClick(e) }}>{props.cuisine[2]}</button>
      <button className="btn" value="3" onClick={(e) => { props.handleCuisineClick(e) }}>{props.cuisine[3]}</button>
      <button className="btn" value="4" onClick={(e) => { props.handleCuisineClick(e) }}>{props.cuisine[4]}</button>

    </div>
  )
}