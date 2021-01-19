import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import PageLoading from '../components/PageLoading'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/platziconf-logo.svg'
import api from '../api'
import './styles/BadgeEdit.css'

const BadgeEdit = (props) => {
  const [valuesForm, setValuesForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const history = useHistory()
  const id = props.match.params.badgeId

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const detailBadge = await api.badges.read(id)
      setValuesForm(detailBadge)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

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
        message: `Estos campos son obligatorios ${valuesFilterEmpty.join(
          ', '
        )}`,
      })
      return
    }
    setLoading(true)
    setError(null)
    try {
      await api.badges.update(id, valuesForm)
      setLoading(false)
      history.push('/badges')
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  if (loading) {
    return <PageLoading />
  }

  return (
    <>
      <div className="BadgeEdit__hero">
        <img
          className="BadgeEdit__hero-image img-fluid"
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
              titleForm="Edit Attendant"
              onChange={handleChange}
              onSubmit={handleSubmit}
              valuesForm={valuesForm}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BadgeEdit
