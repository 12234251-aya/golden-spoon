import { Link } from 'react-router-dom'
import { useState } from 'react'

function Reservation() {
  // keeping all the form fields in one state object instead of
  // a separate useState for each input
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '1 Person',
    requests: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // no backend yet, so just showing the data was captured
    console.log(formData)
    alert(
      'Thank you ' +
        formData.name +
        ', your reservation request has been received!',
    )
  }

  return (
    <>
      <div className="container mt-5 text-center">
        <h1 className="mb-3">Reserve Your Table</h1>
        <p className="text-muted">
          Fill in the form below and we will confirm your reservation.
        </p>
      </div>

      <div className="container mt-4 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="+961"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Reservation Date</label>
                      <input
                        type="date"
                        name="date"
                        className="form-control"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label className="form-label">Time</label>
                      <input
                        type="time"
                        name="time"
                        className="form-control"
                        value={formData.time}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4 mb-3">
                      <label className="form-label">Guests</label>
                      <select
                        name="guests"
                        className="form-select"
                        value={formData.guests}
                        onChange={handleChange}
                      >
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4 People</option>
                        <option>5 People</option>
                        <option>6+ People</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Special Requests</label>
                    <textarea
                      name="requests"
                      className="form-control"
                      rows="4"
                      placeholder="Birthday, anniversary, allergies..."
                      value={formData.requests}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button className="btn btn-warning px-5" type="submit">
                      Reserve Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reservation