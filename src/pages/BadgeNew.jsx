import React, { useState } from 'react'
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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { value, name } = e.target
    setValuesForm((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await api.badges.create(valuesForm)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
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
          <div className="col-12 col-md-6 mt-4">
            <BadgeForm
              onChange={handleChange}
              onSubmit={handleSubmit}
              valuesForm={valuesForm}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BadgeNew
