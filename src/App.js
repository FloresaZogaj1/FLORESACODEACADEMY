import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import Students from "./Students/Students";
import Apply from "./Apply/Apply";
import Location from "./Location/Location";
import ApplyForm from "./Apply/ApplyForm";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/apply/form" element={<ApplyForm />} /> 
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
