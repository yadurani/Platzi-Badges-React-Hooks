import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'
import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgesDetails.css'

const BadgeDetails = ({ dataDetail, onDeleteBadge }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleOpenModal = () => setModalIsOpen(true)
  const handleCloseModal = () => setModalIsOpen(false)

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-sm-12 col-md-6 BadgeDetails__hero-attendant-name">
              <h1>
                {dataDetail.firstName} {dataDetail.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-4 mb-4">
            <Badge
              email={dataDetail.email}
              firstName={dataDetail.firstName}
              jobTitle={dataDetail.jobTitle}
              lastName={dataDetail.lastName}
              twitter={dataDetail.twitter}
            />
          </div>
          <div className="col-sm-12 col-md-6 mt-4 mb-4">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${dataDetail.id}/edit`}>
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={handleOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={modalIsOpen}
                  onClose={handleCloseModal}
                  onDeleteBadge={onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadgeDetails
