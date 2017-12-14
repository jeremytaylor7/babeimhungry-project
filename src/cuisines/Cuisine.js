import React from 'react';
import './Cuisine.css';

export default function Cuisine(props) {

  return (
    <div className="col-3-md col-6-sm mr-auto">
      <button className="btn-secondary cuisine" value={props.value}
        onClick={(e) => props.onClick(e)} > {props.cuisine}</button>
    </div>
  )
}