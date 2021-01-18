import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonBadgesListItem = () => {
  return (
    <div className="BadgesListItem">
      <div className="BadgesListItem__avatar">
        <Skeleton circle={true} height={80} width={80} />
      </div>
      <div>
        <strong>
          <Skeleton count={1} width={390} />
        </strong>
        <br />
        <Skeleton count={1} width={390} />
        <br />
        <Skeleton count={1} width={390} />
      </div>
    </div>
  )
}

export default SkeletonBadgesListItem
