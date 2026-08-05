import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import FoodQuiz from "./pages/FoodQuiz";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
    <Routes>

      <Route 
        path="/" 
        element={<Home />} 
      />

      <Route 
        path="/home" 
        element={<Home />} 
      />

      <Route 
        path="/menu" 
        element={<Menu />} 
      />

      <Route 
        path="/reservation" 
        element={<Reservation />} 
      />

      <Route 
        path="/contact" 
        element={<Contact />} 
      />

      <Route 
        path="/order" 
        element={<Order />} 
      />
     <Route 
       path="/food-quiz" element={<FoodQuiz />} />
    </Routes>

    <Footer />
    </>
  );
}

export default App;