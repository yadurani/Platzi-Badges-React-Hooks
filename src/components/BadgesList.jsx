import React from 'react'
import { Link } from 'react-router-dom'

import BadgesListItem from './BadgesListItem'
import SkeletonBadgesListItem from './skeleton/SkeletonBadgesListItem'
import './styles/BadgesList.css'

const BadgesList = ({ badges, loading }) => {
  return (
    <div className="BadgesList">
      <ul className="list-unstyled">
        {loading ? (
          new Array(3).fill(1).map((_, i) => (
            <li key={i}>
              <SkeletonBadgesListItem />
            </li>
          ))
        ) : badges.length === 0 ? (
          <div>
            <h3>No badges were found</h3>
            <Link to="/badges/new" className="btn btn-primary">
              Create new badge
            </Link>
          </div>
        ) : (
          badges.map((badge) => (
            <li key={badge.id}>
              <BadgesListItem badge={badge} />
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default BadgesList
