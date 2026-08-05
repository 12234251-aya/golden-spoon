import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section
        className="position-relative text-white d-flex align-items-center"
        style={{
          minHeight: "90vh",
          backgroundImage: "url(/images/restaurant.jpeg)",
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
        />

        <div className="container position-relative">
          <div className="row align-items-center">

            
            <div className="col-lg-6">
              <span className="badge bg-warning text-dark mb-3 px-3 py-2">
                ★ Fresh Ingredients Daily
              </span>

              <h1
                className="fw-bold mb-4"
                style={{ fontSize: "3.5rem", lineHeight: "1.2" }}
              >
                Taste the Art of
                <span className="text-warning"> Fine Dining</span>
              </h1>

              <p
                className="lead mb-4"
                style={{ maxWidth: "520px" }}
              >
                Discover handcrafted dishes prepared with premium
                ingredients and served in a warm, welcoming atmosphere.
              </p>

              <div className="d-flex gap-3">
                <Link
                  to="/menu"
                  className="btn btn-warning btn-lg px-4"
                >
                  View Menu
                </Link>

                <Link
                  to="/reservation"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Book a Table
                </Link>
              </div>
            </div>

            
            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
              <div
                className="p-4 rounded-4"
                style={{
                  width: "320px",
                  background: "rgba(255,255,255,.12)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,.2)",
                }}
              >
                <h4 className="text-warning mb-3">Why Choose Us?</h4>

                <div className="mb-3">
                  <h2 className="fw-bold">15+</h2>
                  <small>Years of Experience</small>
                </div>

                <hr className="border-light" />

                <div className="mb-3">
                  <h2 className="fw-bold">4.9★</h2>
                  <small>Average Customer Rating</small>
                </div>

                <hr className="border-light" />

                <div>
                  <h2 className="fw-bold">100%</h2>
                  <small>Fresh Ingredients</small>
                </div>
              </div>
            </div>

          </div>
        </div>

        
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100px",
          }}
        >
          <path
            fill="#fff"
            d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32V120H0Z"
          />
        </svg>
      </section>

      <Footer />
    </>
  );
}

export default Home;