import React from 'react';
import './Register.css'
import './Home.css';
export default function (props) {

  return (
    <div className="auth-btn container row">
      <button className="google-auth" onClick={() => { props.handleLogin() }}>Log in with Google</button>
    </div>
  )
}