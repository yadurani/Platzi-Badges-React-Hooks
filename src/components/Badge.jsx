import React from 'react'
import confLogo from '../images/badge-header.svg'

const Badge = () => {
  return (
    <div>
      <div>
        <img src={confLogo} alt="Logo de la conferencia" />
      </div>
      <div>
        <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
        <h1>
          Yadu <br /> Lopez
        </h1>
      </div>
      <div>
        <p>Frontend Engineer</p>
        <p>@yadulopez</p>
      </div>
      <div>#platziconf</div>
    </div>
  )
}

export default Badge
