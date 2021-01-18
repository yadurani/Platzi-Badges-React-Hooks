import React from 'react'
import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar'
import './styles/Badge.css'

const Badge = ({ firstName, lastName, jobTitle, twitter, email }) => {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo de la conferencia" />
      </div>
      <div className="Badge__section-name">
        <Gravatar email={email} className="Badge__avatar" />
        <h1>
          {firstName} <br /> {lastName}
        </h1>
      </div>
      <div className="Badge__section-info">
        <h3>{jobTitle}</h3>
        <div>@{twitter}</div>
      </div>
      <div className="Badge__footer">#platziconf</div>
    </div>
  )
}

export default Badge
