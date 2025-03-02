import React from "react";
import "./Location.scss";

const Location = () => {
  return (
    <div className="location-page">
      <h2>Ku ndodhemi?</h2>
      <p>Na gjeni në Malishevë, Kosovë.</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.837099232142!2d20.73540687559262!3d42.48026722749952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13539fde43f97d89%3A0xada541ef8fd105b1!2sShkolla%20Ibrahim%20Mazreku!5e1!3m2!1sen!2s!4v1740907755110!5m2!1sen!2s" 
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Location;
