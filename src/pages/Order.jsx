import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageNavigation from "../components/PageNavigation";

function Order() {
  return (
    <>
      <Navbar />

      <div className="bg-light">

        {/* Header */}
        <div className="container text-center mt-5">
          <h1>Place Your Order</h1>

          <p className="text-muted">
            Fill in your information and choose your meal.
          </p>
        </div>


        {/* Order Form */}
        <div className="container mt-4 mb-5">

          <div className="row justify-content-center">

            <div className="col-lg-8">

              <div className="card shadow">

                <div className="card-body">

                  <form>


                    <div className="mb-3">

                      <label className="form-label">
                        Full Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your full name"
                      />

                    </div>



                    <div className="mb-3">

                      <label className="form-label">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+961"
                      />

                    </div>



                    <div className="mb-3">

                      <label className="form-label">
                        Delivery Address
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your address"
                      />

                    </div>




                    <div className="mb-3">

                      <label className="form-label">
                        Choose Your Meal
                      </label>


                      <select className="form-select">

                        <option>Burger</option>
                        <option>Pizza</option>
                        <option>Pasta</option>
                        <option>Fresh Juice</option>
                        <option>Chicken Vegetables Soup</option>
                        <option>Salad</option>
                        <option>Cheesecake</option>
                        <option>Coffee</option>

                      </select>

                    </div>




                    <div className="mb-3">

                      <label className="form-label">
                        Quantity
                      </label>


                      <input
                        type="number"
                        className="form-control"
                        min="1"
                        defaultValue="1"
                      />

                    </div>




                    <div className="mb-3">

                      <label className="form-label">
                        Payment Method
                      </label>


                      <select className="form-select">

                        <option>
                          Cash on Delivery
                        </option>

                        <option>
                          Credit Card
                        </option>

                      </select>

                    </div>




                    <div className="mb-3">

                      <label className="form-label">
                        Notes
                      </label>


                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Any special requests?"
                      ></textarea>


                    </div>




                    <div className="text-center">

                      <button className="btn btn-danger px-5">
                        Place Order
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
        <PageNavigation active="order" />

    </>
  );
}

export default Order;