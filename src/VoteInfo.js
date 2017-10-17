import React from 'react'

export default function VoteInfo(props) {

  return (
    <div className="vote-info">
      <h3 className="vote-h3">{props.info}</h3>
    </div>
  )
}