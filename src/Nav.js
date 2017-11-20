import React from 'react'

export default function Nav(props) {

  return (
    <div className="collapse navbar-collapse justify-content-md-center">
      <ul className="navbar-nav">
        <li className="nav-item">Home</li>
        <li className="nav-item"><a href="#">Picks</a></li>
        <li className="nav-item">Maybe List</li>
      </ul>
    </div>
  )
}