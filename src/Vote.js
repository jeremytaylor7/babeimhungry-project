import React from 'react'

export default function Vote(props) {

  return (
    <div className="vote-container col-12">
      <button className="vote-btn col-6 btn-success" onClick={e => { props.voteClick(e) }}>Yes</button>
      <button className="vote-btn col-6 btn-danger" onClick={e => { props.retryClick(e) }}> Retry</button>
    </div>
  )
}