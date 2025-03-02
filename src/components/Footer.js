import React from "react";
import "./Footer.scss";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 FloresaCodeAcademy. Të gjitha të drejtat e rezervuara.</p>
      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=61571099964093" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
