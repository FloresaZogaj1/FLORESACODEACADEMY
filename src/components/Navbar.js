import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>Floresa Code Academy</h2>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
        <li><Link to="/students" onClick={() => setMenuOpen(false)}>Students</Link></li>
        <li><Link to="/apply" onClick={() => setMenuOpen(false)}>Apply</Link></li>
        <li><Link to="/location" onClick={() => setMenuOpen(false)}>Location</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
