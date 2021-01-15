import React from 'react'

const BadgesList = ({ data }) => {
  return (
    <div className="list-unstyled">
      {data.map((badge) => (
        <li key={badge.id}>
          <p>
            {badge.firstName} {badge.lastName}
          </p>
        </li>
      ))}
    </div>
  )
}

export default BadgesList
