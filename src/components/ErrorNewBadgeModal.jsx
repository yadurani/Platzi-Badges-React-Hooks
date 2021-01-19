import React from 'react'

import Modal from './Modal'

const ErrorNewBadgeModal = ({ error, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="DeleteBadgeModal">
        <h1>Ops! We found an error</h1>
        <p>{error && error.message}</p>
        <div>
          <button className="btn btn-primary" onClick={onClose}>
            Try again!
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ErrorNewBadgeModal
