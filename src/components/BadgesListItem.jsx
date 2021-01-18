import React from 'react'
import Gravatar from './Gravatar'

const BadgesListItem = ({ badge }) => {
  return (
    <div className="BadgesListItem">
      <Gravatar email={badge.email} className="BadgesListItem__avatar" />
      <div>
        <strong>
          {badge.firstName} {badge.lastName}
        </strong>
        <br />@{badge.twitter}
        <br />
        {badge.jobTitle}
      </div>
    </div>
  )
}

export default BadgesListItem
