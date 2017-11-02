import React from 'react'

export default function Nav(props) {

  return (
    <div className="nav-bar">
      <ul className="nav-list">
        <li>Home</li>
        <li><a href="#">Picks</a></li>
        <li>Maybe List</li>
      </ul>
    </div>
  )
}