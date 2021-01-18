import React from 'react'
import { Link } from 'react-router-dom'
import './styles/NotFound.css'

const NotFound = () => {
  return (
    <section className="Hero">
      <div className="Hero-container">
        <h2>404 Error</h2>
        <p> Ooooop!! Not found this page. </p>
        <Link to="/" className="btn btn-primary">
          Comeback
        </Link>
      </div>
    </section>
  )
}

export default NotFound
