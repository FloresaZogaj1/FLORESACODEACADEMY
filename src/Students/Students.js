import React from "react";
import "./Students.scss";
import Student1 from "../images/474628047_1373620407167222_2943893909655457000_n.jpg";
import Studenti2 from "../images/476877243_1208015507585442_7205353013524403199_n.jpg"
import Studenti3 from "../images/481690607_1646834025939250_5902563889174888800_n.jpg"
import Studenti4 from "../images/475874946_2007109136452582_1418932134712631005_n.jpg"
import Studenti5 from "../images/481231923_506790245795901_5367126321295196235_n.jpg"
import Studenti6 from "../images/1000029539.jpg"
import Studenti7 from "../images/1000029543.jpg"
import Studenti8 from "../images/1000029551.jpg"


const students = [
  { name: "Nil Mazreku", image: Student1 },
  { name: "Zinie Kastrati", image: Studenti2 },
  { name: "Korab Mazreku", image: Studenti3 },
  { name: "Sara Mazreku", image: Studenti4 },
  { name: "Diarta Bytyqi", image: Studenti5 },


];

const stars = [
  { name: "Arizona Mazreku", image: Studenti6},
  { name: "Shkëmb Mazreku", image: Studenti7 },
  { name: "Rejana Mazreku", image: Studenti8 },
];

const Students = () => {
  return (
    <div className="students-page">
      {/* Seksioni i Studentëve */}
      <div className="students-section">
        <h2>Studentët Tanë</h2>
        <div className="students-list">
          {students.map((student, index) => (
            <div key={index} className="student-card">
              <img src={student.image} alt={student.name} />
              <p>{student.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seksioni i Yjeve të Kursit */}
      <div className="stars-section">
        <h2>Yjet e Kursit</h2>
        <div className="stars-list">
          {stars.map((star, index) => (
            <div key={index} className="star-card">
              <img src={star.image} alt={star.name} />
              <p>{star.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
