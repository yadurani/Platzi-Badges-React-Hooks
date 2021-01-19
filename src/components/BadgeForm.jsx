import React from 'react'

import ErrorNewBadgeModal from './ErrorNewBadgeModal'

const BadgeForm = ({
  onChange,
  valuesForm,
  onSubmit,
  loading,
  error,
  titleForm,
  isOpen,
  onClose,
}) => {
  return (
    <div>
      <h1>{titleForm}</h1>
      <form onSubmit={onSubmit}>
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
        <button className="btn btn-primary" disabled={loading}>
          {loading ? 'Loading...' : 'Save'}
        </button>
      </form>
      <ErrorNewBadgeModal error={error} isOpen={isOpen} onClose={onClose} />
      {/* {error && <p className="text-danger">{error.message}</p>} */}
    </div>
  )
}

export default BadgeForm
