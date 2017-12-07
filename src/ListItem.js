import React from 'react';
import './List.css'

export default function ListItem(props) {

  return (
    <div className="list-item row">
      <p className="col-6 restaurant-choice">{props.choice}</p>
      <p className="col-6 time">{props.time}</p>
    </div>
  )
}