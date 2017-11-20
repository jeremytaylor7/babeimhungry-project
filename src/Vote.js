import React from 'react'

export default function Vote(props) {

  return (
    <div className="vote-container col-12">
      <button className="vote-btn col-4 btn-success" onClick={e => { props.handleVoteClick(e) }}>Yes</button>
      <button className="vote-btn col-4 btn-warning" onClick={e => { props.handleVoteClick(e) }}> Maybe</button>
      <button className="vote-btn col-4 btn-danger" onClick={e => { props.handleVoteClick(e) }}> Retry</button>
    </div>
  )
}