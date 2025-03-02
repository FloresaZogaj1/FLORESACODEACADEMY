import React, { useState } from "react";
import "./Apply.scss";

function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="apply-container">
      <h2>Apply for a Course</h2>
      {submitted ? (
        <p className="success-message">Thank you for applying! 🎉</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

<label>Choose Course:</label>
<select name="course" value={formData.course} onChange={handleChange} required>
  <option value="">Select a course</option>
  <option value="Programim për fëmijët 7-12">Programim për fëmijët 7-12</option>
  <option value="Programim për fëmijët 13-17">Programim për fëmijët 13-17</option>
  <option value="Frontend Development (HTML, CSS, JavaScript, GitHub, Netlify)">
    Frontend Development (HTML, CSS, JavaScript, GitHub, Netlify)
  </option>
  <option value="Backend (Java, Python)">Backend (Java, Python)</option>
  <option value="English për moshat 7-15">English për moshat 7-15</option>
  <option value="Kimi për maturantët">
    Kimi për maturantët (për studentët që dëshirojnë të ndjekin një karrierë në mjekësi, kimi, shkencë)
  </option>
</select>


          <button type="submit">Apply</button>
        </form>
      )}
    </div>
  );
}

export default Apply;
