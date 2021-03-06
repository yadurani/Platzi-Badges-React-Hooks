import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import PageLoading from '../components/PageLoading'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/platziconf-logo.svg'
import api from '../api'
import './styles/BadgeNew.css'

const BadgeNew = () => {
  const [valuesForm, setValuesForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const history = useHistory()
  const handleChange = (e) => {
    const { value, name } = e.target
    setValuesForm((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Devolver los campos que estan vacios
    const valuesFilterEmpty = Object.keys(valuesForm).filter((value) => {
      return valuesForm[value] === ''
    })
    if (valuesFilterEmpty.length !== 0) {
      setError({
        message: `This fields are required ${valuesFilterEmpty.join(', ')}`,
      })
      setOpenModal(true)
      return
    }
    setLoading(true)
    setError(null)
    try {
      await api.badges.create(valuesForm)
      setLoading(false)
      history.push('/badges')
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  const handleCloseModal = () => setOpenModal(false)

  if (loading) {
    return <PageLoading />
  }

  return (
    <>
      <div className="BadgeNew__hero">
        <img
          className="BadgeNew__hero-image img-fluid"
          src={header}
          alt="Logo"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mt-4">
            <Badge
              firstName={valuesForm.firstName || 'FIRST_NAME'}
              lastName={valuesForm.lastName || 'LAST_NAME'}
              jobTitle={valuesForm.jobTitle || 'JOB_TITLE'}
              twitter={valuesForm.twitter || 'twitter'}
              email={valuesForm.email || 'EMAIL'}
            />
          </div>
          <div className="col-12 col-md-6 mt-4 mb-4">
            <BadgeForm
              titleForm="New Attendant"
              onChange={handleChange}
              onSubmit={handleSubmit}
              valuesForm={valuesForm}
              loading={loading}
              error={error}
              isOpen={openModal}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BadgeNew
