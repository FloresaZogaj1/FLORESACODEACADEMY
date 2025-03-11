import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <span className="logo-text">Floresa Code Academy</span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span>{menuOpen ? "✖" : "☰"}</span>
      </div>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
        <li><Link to="/students" onClick={() => setMenuOpen(false)}>Students</Link></li>
        <li><Link to="/apply" onClick={() => setMenuOpen(false)}>Apply</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
