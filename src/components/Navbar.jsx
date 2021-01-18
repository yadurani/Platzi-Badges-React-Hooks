import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import './styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <img className="Navbar__logo" src={logo} alt="Logo platzi" />
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
