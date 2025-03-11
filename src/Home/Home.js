import React, { useState } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Image1 from "../images/Untitled Feb 23 6_26 PM (5).png";
import Images2 from "../images/teen-teacher-chemistry-lesson-making-experiments.jpg";
import Images3 from "../images/close-up-kid-while-having-technology-education-class (1).jpg";
import Images4 from "../images/Untitled Feb 23 6_26 PM (10).png";
import Images6 from "../images/bb.jpg"
import Images7 from "../images/aaa.jpg"
import Images8 from "../images/istockphoto-1047570732-612x612.jpg"

const Home = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      title: "Programim për fëmijët (7-12)",
      img: Images3,
      description:
        "Ky kurs u mëson fëmijëve bazat e programimit përmes lojërave dhe projekteve argëtuese.",
    },
    {
      title: "Programim për fëmijët (13-18)",
      img: Images4,
      description:
        "Një kurs i avancuar për adoleshentët që duan të mësojnë programimin dhe zhvillimin e aplikacioneve.",
    },
    {
      title: "Frontend",
      img: Images7,
      description:
        "Mëso HTML, CSS, JavaScript, Netlify dhe GitHub për të krijuar faqe moderne dhe tërheqëse.",
    },
    {
      title: "Backend",
      img: Images6,
      description:
        "Hyrje në zhvillimin e backend-it me Java dhe Python, duke përfshirë bazat e të dhënave dhe API-të.",
    },
    {
      title: "English",
      img: Images8,
      description:
        "Përmirëso njohuritë e gjuhës angleze me fokus në terminologjinë teknologjike dhe komunikimin profesional.",
    },
    {
      title: "Kimi",
      img: Images2,
      description:
        "Kursi ideal për të kuptuar konceptet bazë të kimisë dhe aplikimet e saj në teknologji.",
    },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Mirësevini në <span className="highlight">Floresa Code Academy</span></h1>
          <p>Mëso kodimin me ne dhe bëhu një zhvillues i suksesshëm.</p>
          <Link to="/apply" className="btn">Apliko Tani</Link>
        </div>
        <div className="hero-image">
          <img src={Image1} alt="Coding Academy" />
        </div>
      </section>
      
      <section className="courses">
        <h2>Kursët Tonë</h2>
        <div className="course-list">
          {courses.map((course, index) => (
            <div
              key={index}
              className="course-card"
              onClick={() =>
                setSelectedCourse(selectedCourse === index ? null : index)
              }
            >
              <img src={course.img} alt={course.title} />
              <h3>{course.title}</h3>
              {selectedCourse === index && (
                <p className="course-description">{course.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="online-courses">
  <h2>Ndjek Kursët Online</h2>
  <p>
    Tani mund të ndjekësh kursët tona nga kudo përmes <strong>Zoom</strong> ose <strong>Google Meet</strong>.
    Bashkohu me ne dhe mëso programimin nga rehatia e shtëpisë tënde!
  </p>
  <div className="online-buttons">
    <a href="https://zoom.us/" target="_blank" rel="noopener noreferrer" className="btn zoom-btn">
      Mëso për Zoom
    </a>
    <a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer" className="btn meet-btn">
      Mëso për Google Meet
    </a>
  </div>
</section>

    </div>
  );
};

export default Home;