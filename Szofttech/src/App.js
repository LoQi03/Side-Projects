import React  from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPlan from "./pages/projectplanPage";
import F2 from "./pages/h2Page";
import F3 from "./pages/h3Page";
import F4 from "./pages/h4Page";
import ErrorPage from "./pages/errorpage";
import Navbar from "./components/navbar.components";
import F5 from "./pages/h5Page";
import ASCII from "./assets/ASCII.png"
function App() {
  document.body.classList.add('bg-amber-400');
  return (
    <div className="flex flex-col items-center h-full">
    <Router>
      <div className="bg-white px-8 py-1 rounded-lg shadow-xl my-2">
      <div className="flex flex-col items-center mt-4">
      <img className="w-[1080px] h-[200px] border-solid border-black border-[6px]" src={ASCII} alt=""></img>
      <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<ProjectPlan />} />
        <Route path="/f2" element={<F2 />} />
        <Route path="/f3" element={<F3 />} />
        <Route path="/f4" element={<F4 />} />
        <Route path="/f5" element={<F5 />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      </div>
    </Router>
    </div>
  );
}


export default App;
