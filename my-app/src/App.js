import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from "./Pages/home";
import ContactUs from "./Pages/contactus";
import Products from "./Pages/products";
import Services from "./Pages/services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/errorpage";
import Navbar from "./components/Navbar/navbar.component";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
