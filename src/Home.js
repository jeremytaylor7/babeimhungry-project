import React, { Component } from 'react';
import './Home.css';
import Register from './Register';
export default function (props) {

  return (
    <div className="home-intro" container row>
      <h1 className="logo col-12">Grub Bot</h1>
      <hr />
      <p className="about">Can't find a place to eat? Get restaurant
        suggestions based upon what you're hungry for!</p>
      <hr />
      <p className="about">
        Simply choose from a list of cuisines until you narrow down to what
        you're craving for and then get a restaurant suggestion near you!
      </p>
      <hr />
      <Register handleLogin={props.handleLogin} />
    </div>
  )
}