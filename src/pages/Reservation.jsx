import { useState } from "react";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2 People",
    requests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Thank you ${formData.name}! Your reservation request has been received.`
    );
  };

  return (
    <>
      <section
        className="position-relative text-white d-flex align-items-center"
        style={{
          height: "350px",
          backgroundImage: "url('/images/restaurant.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.55))",
          }}
        ></div>

        <div className="container position-relative text-center">
          <h1 className="display-4 fw-bold">Reserve Your Table</h1>

          <p className="lead">
            Book your dining experience in just a few clicks.
          </p>
        </div>
      </section>

     
      <section className="py-5 bg-light">
        <div className="container">

          <div className="row g-5">

           
            <div className="col-lg-4">

              <div
                className="text-white rounded-4 p-4 h-100"
                style={{
                  background: "#212529",
                }}
              >
                <h2 className="mb-4 text-warning">
                  Reservation Information
                </h2>

                <div className="mb-4">
                  <h5>📍 Address</h5>
                  <p className="text-light">
                    Main Street 123
                    <br />
                    Beirut, Lebanon
                  </p>
                </div>

                <div className="mb-4">
                  <h5>📞 Phone</h5>
                  <p className="text-light">+961 70 123 456</p>
                </div>

                <div className="mb-4">
                  <h5>🕒 Opening Hours</h5>
                  <p className="text-light">
                    Monday - Friday
                    <br />
                    11:00 AM - 11:00 PM
                  </p>

                  <p className="text-light">
                    Saturday & Sunday
                    <br />
                    10:00 AM - Midnight
                  </p>
                </div>

                <hr className="border-secondary" />

                <p className="mb-0">
                  ✔ Reservations are confirmed by phone or email.
                </p>
              </div>

            </div>

            
            <div className="col-lg-8">

              <div
                className="card border-0 shadow-lg rounded-4"
              >
                <div className="card-body p-5">

                  <h2 className="mb-4">
                    Book Your Table
                  </h2>

                  <form onSubmit={handleSubmit}>

                    <div className="row">

                      <div className="col-md-6 mb-4">
                        <label className="form-label">
                          Full Name
                        </label>

                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="John Smith"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <label className="form-label">
                          Phone Number
                        </label>

                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          placeholder="+961"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                    </div>

                    <div className="mb-4">

                      <label className="form-label">
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="example@email.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    <div className="row">

                      <div className="col-md-4 mb-4">

                        <label className="form-label">
                          Date
                        </label>

                        <input
                          type="date"
                          className="form-control form-control-lg"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />

                      </div>

                      <div className="col-md-4 mb-4">

                        <label className="form-label">
                          Time
                        </label>

                        <input
                          type="time"
                          className="form-control form-control-lg"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                        />

                      </div>

                      <div className="col-md-4 mb-4">

                        <label className="form-label">
                          Guests
                        </label>

                        <select
                          className="form-select form-select-lg"
                          name="guests"
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

                    <div className="mb-4">

                      <label className="form-label">
                        Special Requests
                      </label>

                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Birthday celebration, allergies, window seat..."
                        name="requests"
                        value={formData.requests}
                        onChange={handleChange}
                      ></textarea>

                    </div>

                    <button
                      type="submit"
                      className="btn btn-warning btn-lg px-5"
                    >
                      Reserve Table
                    </button>

                  </form>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Reservation;