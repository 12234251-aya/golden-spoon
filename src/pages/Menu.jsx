import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageNavigation from "../components/PageNavigation";
import { Link } from "react-router-dom";

function Menu() {
  const foods = [
    {
      name: "Burger",
      price: "$12",
      image: "/images/burger.jpeg",
      ingredients:
        "Beef, Lettuce, Tomato, Cheese, Onion, Pickles, Burger Sauce."
    },
    {
      name: "Pizza",
      price: "$15",
      image: "/images/pizza.jpeg",
      ingredients:
        "Pizza Dough, Tomato Sauce, Mozzarella Cheese, Cheddar Cheese, Parmesan Cheese, and Oregano."
    },
    {
      name: "Pasta",
      price: "$14",
      image: "/images/pasta.jpeg",
      ingredients:
        "Pasta, Tomato Sauce, Olive Oil, and Basil."
    },
    {
      name: "Fresh Juice",
      price: "$5",
      image: "/images/drinks.jpeg",
      ingredients:
        "Fresh Fruits, Ice."
    },
    {
      name: "Chicken Vegetables Soup",
      price: "$10",
      image: "/images/soup.jpeg",
      ingredients:
        "Chicken, Parsley, Potato, Carrots, Peas."
    },
    {
      name: "Salad",
      price: "$10",
      image: "/images/salad.jpeg",
      ingredients:
        "Lettuce, Tomatoes, Cucumbers, Carrots, Bell Peppers, Olive Oil, Lemon Juice, and Salt."
    },
    {
      name: "CheeseCake",
      price: "$8",
      image: "/images/chessecake.jpeg",
      ingredients:
        "Cream Cheese, Biscuit Crust, Butter, Sugar, Eggs, Vanilla Extract, and Fresh Strawberry."
    },
    {
      name: "Coffee",
      price: "$3",
      image: "/images/coffee.jpeg",
      ingredients:
        "Freshly Brewed Coffee, Water, and Sugar (optional)."
    }
  ];

  return (
    <>
      <Navbar />

      <div className="bg-light">
        <div className="text-center p-4">
          <h1>Our Menu</h1>
          <p>
            Enjoy our delicious meals made with fresh ingredients.
          </p>
        </div>

        <div className="container mt-4 mb-5">
          <div className="row g-4">
            {foods.map((food, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 shadow">
                  <img
                    src={food.image}
                    className="card-img-top"
                    alt={food.name}
                    style={{
                      height: "350px",
                      objectFit: "cover"
                    }}
                  />

                  {/* Turn card-body into a column flex container */}
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title">{food.name}</h3>

                    <p className="mb-2">
                      <strong>Price:</strong> {food.price}
                    </p>

                    <p>
                      <strong>Ingredients:</strong> {food.ingredients}
                    </p>

                    {/* Push the button container to the bottom-right */}
                    <div className="mt-auto text-end">
                      <Link to="/order" className="btn btn-danger">
                        Order
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <PageNavigation active="menu" />
    </>
  );
}

export default Menu;