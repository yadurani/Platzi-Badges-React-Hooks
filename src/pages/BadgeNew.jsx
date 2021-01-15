import React, { useState } from 'react'
import Badge from '../components/Badge'
import Navbar from '../components/Navbar'
import BadgeForm from '../components/BadgeForm'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'

const BadgeNew = () => {
  const [valuesForm, setValuesForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  })

  const handleChange = (e) => {
    const { value, name } = e.target
    setValuesForm((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div>
      <Navbar />
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={header} alt="Logo" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mt-4">
            <Badge
              {...valuesForm}
              firstName={valuesForm.firstName || 'Yadu'}
              lastName={valuesForm.lastName || 'López'}
              jobTitle={valuesForm.jobTitle || 'Frontend Engineer'}
              twitter={valuesForm.twitter || 'yadulopez'}
              avatarUrl="https://www.gravatar.com/avatar?d=identicon"
            />
          </div>
          <div className="col-12 col-md-6 mt-4">
            <BadgeForm onChange={handleChange} valuesForm={valuesForm} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadgeNew
