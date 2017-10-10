import React from 'react'

export default function Buttons(props) {

  return (
    <div className="button-container">
      <button className="btn">{props.cuisine[0]}</button>
      <button className="btn">{props.cuisine[1]}</button>
      <button className="btn">{props.cuisine[2]}</button>
      <button className="btn">{props.cuisine[3]}</button>
      <button className="btn">{props.cuisine[4]}</button>

    </div>
  )
}