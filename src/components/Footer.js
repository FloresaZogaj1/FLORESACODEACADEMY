import React from "react";
import "./Footer.scss";
import { FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Rreth Nesh */}
        <div className="section">
          <h3>Rreth Nesh</h3>
          <p>Floresa Code Academy ofron kurse të programimit për të gjitha moshat. Qëllimi ynë është të përgatisim programuesit e së ardhmes.</p>
        </div>

        {/* Shërbimet Tona */}
        <div className="section">
          <h3>Shërbimet Tona</h3>
          <ul>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Programim për Fëmijë 7-12</li>
            <li>Programim për Fëmijë 13-18</li>
            <li>Kimi</li>
            <li>English</li>
          </ul>
        </div>

        {/* Kontaktet */}
        <div className="section">
          <h3>Kontakt</h3>
          <p><FaPhone /> 049 920 892</p>
          <p><FaMapMarkerAlt /> Malishevë</p>
          <p>Orari: Hënë - Premte, 09:00 - 18:00</p>
        </div>

        {/* Newsletter */}
        <div className="section newsletter-form">
          <h3>Abonohu</h3>
          <p>Regjistrohu për të marrë lajmet më të fundit mbi kurset tona.</p>
          <input type="email" placeholder="Email-i juaj" />
          <button>Abonohu</button>
        </div>

        {/* Rrjetet Sociale */}
        <div className="section social-links">
          <h3>Na Ndiqni</h3>
          <a href="https://www.facebook.com/profile.php?id=61571099964093" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/floresacodeacademy?igsh=MTdvODhvdjF0cDJqMQ==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy;2025 Floresa Code Academy. Të gjitha të drejtat e rezervuara.</p>
      </div>
    </footer>
  );
};

export default Footer;
