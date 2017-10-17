import React from 'react'

export default function List(props) {

  return (
    <div className="list-container">
      <ul className="list">
        {props.chosenItems.map((item, index) => {

          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}