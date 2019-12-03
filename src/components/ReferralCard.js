import React from 'react'
import { Link } from 'gatsby'

const ReferralCard = (props) => {
  return (
    <div className="referral-card">
      <div className="referral-card-thumbnail">
        <img src={props.thumbnail} />
      </div>
      <div className="referral-card-body">
        <p className="referral-card-name">{props.name}</p>
        <p className="referral-card-text">{props.text}</p>
      </div>
    </div>
  )
}

export default ReferralCard
