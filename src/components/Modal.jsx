import React from 'react'
import ReactDOM from 'react-dom'

import './styles/Modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <div className="Modal__close-button" onClick={onClose}>
          x
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
