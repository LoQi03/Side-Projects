import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from "./Pages/home";
import ContactUs from "./Pages/contactus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/errorpage";
import Navbar from "./components/Navbar/navbar.component";
import Department from "./Pages/department";
import Employee from "./Pages/employee";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/department" element={<Department />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
