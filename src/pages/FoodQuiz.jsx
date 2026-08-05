import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const recommendations = {
  Happy: {
    Spicy: {
      "Soft Drink": {
        name: "Golden BBQ Burger",
        image: "/images/burger.jpeg",
        description:
          "Juicy grilled beef with smoky BBQ sauce and crispy fries.",
      },
      Coffee: {
        name: "Chicken Alfredo Pasta",
        image: "/images/pasta.jpeg",
        description:
          "Creamy pasta with grilled chicken and parmesan cheese.",
      },
      Juice: {
        name: "Grilled Chicken Salad",
        image: "/images/salad.jpeg",
        description:
          "Fresh vegetables topped with grilled chicken and citrus dressing.",
      },
      Mocktail: {
        name: "Mixed Grill Platter",
        image: "/images/burger.jpeg",
        
        description:
          "A delicious combination of burger and vegetables.",
      },
    },

    Creamy: {
      "Soft Drink": {
        name: "Chicken Alfredo Pasta",
        image: "/images/pasta.jpeg",
        description:
          "Rich and creamy pasta with grilled chicken.",
      },
    },
  },

  Relaxed: {
    Fresh: {
      Juice: {
        name: "Caesar Salad",
        image: "/images/salad.jpeg",
        description:
          "Fresh romaine lettuce with parmesan and grilled chicken.",
      },
    },
  },

  Adventurous: {
    Savory: {
      Mocktail: {
        name: "Chef's Special Steak",
        image: "/images/pasta.jpeg",
        description:
          "Rich and creamy pasta with grilled chicken.",
      },
    },
  },
};

function FoodQuiz() {
  const [step, setStep] = useState(1);

  const [answers, setAnswers] = useState({
    mood: "",
    flavor: "",
    drink: "",
  });

  const handleAnswer = (key, value) => {
    setAnswers({
      ...answers,
      [key]: value,
    });

    setStep(step + 1);
  };

  let recommendation =
    recommendations[answers.mood]?.[answers.flavor]?.[
      answers.drink
    ];

  return (
    <>
      <Navbar />

      <section className="bg-dark text-white py-5">
        <div className="container text-center">

          <h1 className="display-4 fw-bold">
            🍽 Food Personality Quiz
          </h1>

          <p className="lead">
            Answer 3 quick questions and we'll recommend the perfect meal.
          </p>

        </div>
      </section>

      <div className="container py-5">

        <div className="card shadow-lg border-0 rounded-4">

          <div className="card-body p-5">

            {step === 1 && (
              <>
                <h3 className="mb-4 text-center">
                  What's your mood today?
                </h3>

                <div className="d-flex justify-content-center gap-3 flex-wrap">

                  <button
                    className="btn btn-warning"
                    onClick={() => handleAnswer("mood", "Happy")}
                  >
                    😊 Happy
                  </button>

                  <button
                    className="btn btn-warning"
                    onClick={() => handleAnswer("mood", "Relaxed")}
                  >
                    😌 Relaxed
                  </button>

                  <button
                    className="btn btn-warning"
                    onClick={() =>
                      handleAnswer("mood", "Adventurous")
                    }
                  >
                    🔥 Adventurous
                  </button>

                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="mb-4 text-center">
                  Which flavor do you enjoy?
                </h3>

                <div className="d-flex justify-content-center gap-3 flex-wrap">

                  {["Spicy", "Creamy", "Fresh", "Savory"].map((item) => (
                    <button
                      key={item}
                      className="btn btn-warning"
                      onClick={() =>
                        handleAnswer("flavor", item)
                      }
                    >
                      {item}
                    </button>
                  ))}

                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h3 className="mb-4 text-center">
                  Pick your favorite drink
                </h3>

                <div className="d-flex justify-content-center gap-3 flex-wrap">

                  {[
                    "Soft Drink",
                    "Coffee",
                    "Juice",
                    "Mocktail",
                  ].map((item) => (
                    <button
                      key={item}
                      className="btn btn-warning"
                      onClick={() =>
                        handleAnswer("drink", item)
                      }
                    >
                      {item}
                    </button>
                  ))}

                </div>
              </>
            )}

            {step === 4 && (
              <div className="text-center">

                {recommendation ? (
                  <>
                    <img
                      src={recommendation.image}
                      alt={recommendation.name}
                      className="img-fluid rounded mb-4"
                      style={{
                        maxWidth: "350px",
                      }}
                    />

                    <h2>{recommendation.name}</h2>

                    <p className="text-muted">
                      {recommendation.description}
                    </p>

                    <button
                      className="btn btn-warning mt-3"
                      onClick={() => {
                        setStep(1);
                        setAnswers({
                          mood: "",
                          flavor: "",
                          drink: "",
                        });
                      }}
                    >
                      Try Again
                    </button>
                  </>
                ) : (
                  <>
                    <h2>Chef's Recommendation</h2>

                    <p>
                      We recommend exploring today's specials!
                    </p>

                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        setStep(1);
                        setAnswers({
                          mood: "",
                          flavor: "",
                          drink: "",
                        });
                      }}
                    >
                      Restart Quiz
                    </button>
                  </>
                )}

              </div>
            )}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default FoodQuiz;