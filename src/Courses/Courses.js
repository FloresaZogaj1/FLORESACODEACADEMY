import React from "react";
import { Link } from "react-router-dom";
import "./Courses.scss";

const courses = [
  { title: "Programim për fëmijët (7-12 vjeç)", image: "/images/programim-7-12.jpg" },
  { title: "Programim për të rinjtë (13-17 vjeç)", image: "/images/programim-13-17.jpg" },
  { title: "Frontend Development", image: "/images/frontend.jpg" },
  { title: "Backend (Java, Python)", image: "/images/backend.jpg" },
  { title: "English (7-15 vjeç)", image: "/images/english.jpg" },
  { title: "Kimi për maturantët", image: "/images/chemistry.jpg" },
];

function Courses() {
  return (
    <div className="courses-container">
      <h2>Our Courses</h2>
      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link to="/apply">
  <button className="apply-button">Apliko Tani</button>
</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
