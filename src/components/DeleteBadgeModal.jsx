import React from 'react'

import Modal from '../components/Modal'

const DeleteBadgeModal = ({ isOpen, onClose, onDeleteBadge }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="DeleteBadgeModal">
        <h1>Are You Sure?</h1>
        <p>You are about to delete this badge.</p>
        <div>
          <button className="btn btn-danger mr-4" onClick={onDeleteBadge}>
            Delete
          </button>
          <button className="btn btn-primary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteBadgeModal
