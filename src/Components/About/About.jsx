import React, { useState, useEffect } from "react";
import mypic from "../../Assets/mypic.jpg";
import { motion } from "framer-motion";
import "./About.css";
import Transition from "../Transition/Transition";

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");

  function openTab(tabName) {
    setActiveTab(tabName);
  }

  useEffect(() => {
    document.getElementById("defaultOpen").click();
  }, []);

  const educationData = [
    {
      year: "2017-2019",
      school: "INFANT JESUS SCHOOL, SAHARANPUR",
      details: "High School with Science",
    },
    {
      year: "2019-2021",
      school: "ST.MARY’S ACADEMY, SAHARANPUR",
      details: "Intermediate with PCM, English and CS",
    },
    {
      year: "2021-2025",
      school: "ABES ENGINEERING COLLEGE (AKTU LUCKNOW)",
      details: "B.Tech in Data Science",
    },
  ];

  return (
    <div id="about">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1>About Me</h1>
      </motion.div>
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: -100 }}
        transition={{ duration: 0.6 }}
        className="about"
      >
        <div className="about-inner">
          <div className="col1">
            <div className="tab-buttons">
              <button
                id="defaultOpen"
                className={activeTab === "overview" ? "active" : ""}
                onClick={() => openTab("overview")}
              >
                Who am I?
              </button>
              <button
                className={activeTab === "education" ? "active" : ""}
                onClick={() => openTab("education")}
              >
                Education
              </button>
            </div>

            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              id="overview"
              className={`tabcontent ${
                activeTab === "overview" ? "active" : ""
              }`}
            >
              <p>
                Hi, I'm a pre-final year student at ABESEC, majoring in Computer
                Science with a focus on Data Science. I'm passionate about Web
                Development and Machine Learning. I've worked on diverse
                projects, showcasing my skills in creating responsive web
                applications and exploring machine learning concepts like
                predictive modeling and pattern recognition. I'm actively
                seeking opportunities to further my knowledge and contribute to
                innovative projects. Feel free to reach out; I'm excited to
                connect and explore new possibilities!
              </p>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1O4ta115lkyK4T-mZ6IXr-KK9Q-ugwkzt/view?usp=drive_link"
              >
                <motion.button
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  name="submit"
                  type="submit"
                  className="btn"
                >
                  Download Resume
                </motion.button>
              </a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              id="education"
              className={`tabcontent education ${
                activeTab === "education" ? "active" : ""
              }`}
            >
              <ul className="education-list">
                {educationData.map((item, index) => (
                  <li key={index} className="education-item">
                    <div className="education-year">{item.year}</div>
                    <div className="education-info">
                      <p className="education-school">{item.school}</p>
                      <p className="education-details">{item.details}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="col2">
            <img className="pic" src={mypic} alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Transition(About);
