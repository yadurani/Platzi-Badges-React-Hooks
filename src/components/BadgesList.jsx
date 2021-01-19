import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import useSearchFilter from '../hooks/useSearchFilter'

import BadgesListItem from './BadgesListItem'
import SkeletonBadgesListItem from './skeleton/SkeletonBadgesListItem'
import './styles/BadgesList.css'

const BadgesList = ({ badges, loading }) => {
  const { query, setQuery, filteredBadges } = useSearchFilter(badges)

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <ul className="list-unstyled">
        {loading ? (
          new Array(3).fill(1).map((_, i) => (
            <li key={i}>
              <SkeletonBadgesListItem />
            </li>
          ))
        ) : filteredBadges.length === 0 ? (
          <div>
            <h3>No badges were found</h3>
            <Link to="/badges/new" className="btn btn-primary">
              Create new badge
            </Link>
          </div>
        ) : (
          filteredBadges.map((badge) => (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default BadgesList
