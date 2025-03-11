import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaFlask, FaLanguage, FaLaptopCode } from "react-icons/fa";
import "./Courses.scss";
import { motion } from "framer-motion";
import imagess1 from "../images/close-up-kid-while-having-technology-education-class (1).jpg"
import imagess2 from "../images/close-up-kid-while-having-technology-education-class.jpg"
import imagess3 from "../images/aaa.jpg"
import imagess4 from "../images/bb.jpg"
import imagess5 from "../images/english-books-resting-table-working-space.jpg"
import imagess6 from "../images/teen-teacher-chemistry-lesson-making-experiments.jpg"

const courses = [
  { 
    id: 1, 
    title: "Programim për fëmijët (7-12 vjeç)", 
    image: imagess1,
    icon: <FaCode />, 
    description: "Mëso bazat e programimit përmes lojërave interaktive.", 
    duration: "3 muaj"
  },
  { 
    id: 2, 
    title: "Programim për të rinjtë (13-17 vjeç)", 
    image: imagess2, 
    icon: <FaLaptopCode />, 
    description: "Zhvillimi i aplikacioneve dhe lojërave me Python dhe JavaScript.", 
    duration: "4 muaj"
  },
  { 
    id: 3, 
    title: "Frontend Development", 
    image: imagess3, 
    icon: <FaLaptopCode />, 
    description: "HTML, CSS, JavaScript dhe React për krijimin e faqeve moderne.", 
    duration: "5 muaj"
  },
  { 
    id: 4, 
    title: "Backend (Java, Python)", 
    image: imagess4, 
    icon: <FaCode />, 
    description: "Mëso ndërtimin e API-ve dhe bazave të të dhënave me Java & Python.", 
    duration: "6 muaj"
  },
  { 
    id: 5, 
    title: "English (7-15 vjeç)", 
    image: imagess5, 
    icon: <FaLanguage />, 
    description: "Zhvillo aftësitë e tua në anglisht me metoda interaktive.", 
    duration: "3 muaj"
  },
  { 
    id: 6, 
    title: "Kimi për maturantët", 
    image: imagess6, 
    icon: <FaFlask />, 
    description: "Përgatitje intensive për maturën në lëndën e Kimisë.", 
    duration: "4 muaj"
  }
];

function Courses() {
  return (
    <div className="courses-container">
      <h2>Our Courses</h2>
      <div className="courses-list">
        {courses.map((course) => (
          <motion.div 
            key={course.id} 
            className="course-card"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="icon">{course.icon}</div>
            <img src={course.image} alt={course.title} className="course-image" />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <span className="duration">Kohëzgjatja: {course.duration}</span>
            <Link to="/apply">
              <motion.button 
                className="apply-button"
                whileHover={{ scale: 1.1, backgroundColor: "#02372A" }}
                whileTap={{ scale: 0.9 }}
              >
                Apliko Tani
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
