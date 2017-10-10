import React from 'react'

export default function VoteButtons(props) {

  return (
    <div className="vote-container">
      <button className="vote-btn">{props.vote[0]}</button>
      <button className="vote-btn">{props.vote[1]}</button>
      <button className="vote-btn">{props.vote[2]}</button>
    </div>
  )
}