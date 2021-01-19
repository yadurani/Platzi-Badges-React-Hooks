import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../api'
import Error from '../components/Error'
import PageLoading from '../components/PageLoading'
import BadgeDetails from './BadgeDetails'

const BadgeDetailsContainer = (props) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [dataDetail, setDataDetail] = useState({})
  const id = props.match.params.badgeId
  const history = useHistory()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await api.badges.read(id)
      setDataDetail(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  const handleDeleteBadge = async () => {
    setLoading(true)
    setError(null)
    try {
      await api.badges.remove(id)
      setLoading(false)
      history.push('/badges')
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  if (loading) {
    return <PageLoading />
  }

  if (error) {
    return <Error error={error} />
  }

  return (
    <BadgeDetails dataDetail={dataDetail} onDeleteBadge={handleDeleteBadge} />
  )
}

export default BadgeDetailsContainer
