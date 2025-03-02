import React, { useState } from "react";
import "./ApplyForm.scss";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const courses = [
    "Programim për fëmijët 7-12",
    "Programim për fëmijët 13-17",
    "Frontend Development (HTML, CSS, JavaScript, GitHub, Netlify)",
    "Backend (Java, Python)",
    "English për moshat 7-15",
    "Kimi për maturantët (për studentët që dëshirojnë të ndjekin një karrierë në mjekësi, kimi, shkencë)",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Aplikimi i dërguar:", formData);
    alert("Aplikimi juaj u dorëzua me sukses!");
    setFormData({ name: "", email: "", course: "" });
  };

  return (
    <div className="apply-form-container">
      <h2>Apliko për një Kurs</h2>
      <form onSubmit={handleSubmit}>
        <label>Emri:</label>
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

        <label>Zgjidh Kursin:</label>
        <select name="course" value={formData.course} onChange={handleChange} required>
          <option value="">Zgjidh një kurs</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>

        <button type="submit">Dërgo Aplikimin</button>
      </form>
    </div>
  );
};

export default ApplyForm;
