import React, { Component } from 'react';
import './Home.css';
import Register from './Register';
export default function (props) {

  return (
    <div className="home-intro" container row>
      <h1 className="logo col-12">Grubinator</h1>
      <p className="about">Can't find a place to eat? Get restaurant
        suggestions based upon what you're hungry for!</p>
      <h2 className="create-account ">Create Your Account to get started.</h2>
      <Register />
    </div>
  )
}