import React from 'react'

const BadgeForm = ({ onChange, valuesForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Algo sucedio', valuesForm)
  }

  return (
    <div>
      <h1>New Attendant</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="firstName"
            value={valuesForm.firstName}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="lastName"
            value={valuesForm.lastName}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            onChange={onChange}
            className="form-control"
            type="email"
            name="email"
            value={valuesForm.email}
          />
        </div>
        <div className="form-group">
          <label>Job Title</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="jobTitle"
            value={valuesForm.jobTitle}
          />
        </div>
        <div className="form-group">
          <label>Twitter</label>
          <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="twitter"
            value={valuesForm.twitter}
          />
        </div>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  )
}

export default BadgeForm
