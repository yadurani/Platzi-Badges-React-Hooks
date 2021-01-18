import React from 'react'
import './styles/Error.css'

const Error = ({ error }) => {
  return (
    <div className="PageError">
      <span role="img" aria-label="x">
        ❌
      </span>
      {error.message}
      <span role="img" aria-label="surprise">
        😱
      </span>
    </div>
  )
}

export default Error
