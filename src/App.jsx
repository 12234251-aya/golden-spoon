import { Routes, Route } from "react-router-dom";

import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Order from "./pages/Order";


function Home() {
  return (
    <h1 className="text-center mt-5">
      Home Page
    </h1>
  );
}


function Reservation() {
  return (
    <h1 className="text-center mt-5">
      Reservation Page
    </h1>
  );
}


function App() {
  return (
    <Routes>

      <Route 
        path="/" 
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

    </Routes>
  );
}

export default App;