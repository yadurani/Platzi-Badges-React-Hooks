import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Error from '../components/Error'
import BadgesList from '../components/BadgesList'
import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'
import api from '../api'

const Badges = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await api.badges.list()
      setLoading(false)
      setData(data)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  useEffect(() => {
    fetchData()
    return () => {}
  }, [])

  if (error) {
    return <Error error={error} />
  }
  return (
    <>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="Badges_conf-logo" src={confLogo} alt="Conf logo" />
          </div>
        </div>
      </div>
      <div className="Badges__container">
        <div className="Badges__buttons">
          <Link to="/badges/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>
        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={data} loading={loading} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Badges
