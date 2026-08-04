import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageNavigation from "../components/PageNavigation";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="bg-light">

        {/* Header */}
        <div className="container text-center mt-5">
          <h1>Contact Us</h1>
          <p className="text-muted">
            We would love to hear from you!
          </p>
        </div>


        {/* Contact Section */}
        <div className="container mt-4 mb-5">

          <div className="row g-4">


            {/* Contact Information */}
            <div className="col-md-5">

              <div className="card shadow h-100">

                <div className="card-body">

                  <h3 className="mb-4">
                    Get In Touch
                  </h3>


                  <p>
                    📍 <strong>Address:</strong>
                    <br />
                    Beirut, Lebanon
                  </p>


                  <p>
                    📞 <strong>Phone:</strong>
                    <br />
                    +961 70 123 456
                  </p>


                  <p>
                    ✉️ <strong>Email:</strong>
                    <br />
                    goldenspoon@gmail.com
                  </p>


                  <p>
                    🕒 <strong>Opening Hours:</strong>
                    <br />
                    Monday - Sunday
                    <br />
                    10:00 AM - 11:00 PM
                  </p>


                </div>

              </div>

            </div>



            {/* Contact Form */}
            <div className="col-md-7">

              <div className="card shadow">

                <div className="card-body">

                  <h3 className="mb-4">
                    Send Us A Message
                  </h3>


                  <form>


                    <div className="mb-3">
                      <label className="form-label">
                        Full Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />

                    </div>



                    <div className="mb-3">

                      <label className="form-label">
                        Email
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="example@email.com"
                      />

                    </div>




                    <div className="mb-3">

                      <label className="form-label">
                        Subject
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />

                    </div>




                    <div className="mb-3">

                      <label className="form-label">
                        Message
                      </label>


                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Write your message..."
                      ></textarea>


                    </div>




                    <div className="text-center">

                      <button className="btn btn-danger px-5">
                        Send Message
                      </button>

                    </div>



                  </form>


                </div>

              </div>

            </div>


          </div>

        </div>


      </div>


      <Footer />
        <PageNavigation active="contact" />

    </>
  );
}

export default Contact;