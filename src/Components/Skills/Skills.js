import React, { useEffect } from "react";
import "./Skills.css";
import skill from "../../Assets/skill.jpg";
import { motion } from "framer-motion";
const Skills = () => {
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  useEffect(() => {
    // Simulate click on default open button when component mounts
    document.getElementById("defaultOpen").click();
  }, []);

  return (
    <div className="skills" id="skills">
      <h1>My Skills</h1>
      <div className="grids">
        <motion.div
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          className="container1"
        >
          <img src={skill} alt="" />
          <p>
            Experienced in modern frameworks,strong problem-solving,excellent
            communication skills and continuous learning.
          </p>
        </motion.div>
        <motion.div
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          className="container2"
        >
          <div className="tab">
            <button
              id="defaultOpen"
              className="tablinks"
              onClick={(e) => openCity(e, "Development")}
            >
              Development
            </button>

            <button
              className="tablinks"
              onClick={(e) => openCity(e, "Programming")}
            >
              Programming
            </button>
            <button className="tablinks" onClick={(e) => openCity(e, "Others")}>
              Others
            </button>
          </div>

          <div id="Development" className="tabcontent">
            <div className="sk">
              <div className="skill1">
                <ul>
                  <h2>Front-End</h2>
                  <li className="h">HTML</li>
                  <li className="p">Advanced</li>
                  <li className="h">CSS</li>
                  <li className="p">Intermediate</li>
                  <li className="h">JavaScript</li>
                  <li className="p">Intermediate</li>
                  <li className="h">React.js</li>
                  <li className="p">Basic</li>
                </ul>
              </div>
              <div className="skill2">
                <ul>
                <h2 className="h2">Back-End</h2>
                <li className="h">SQL</li>
                <li className="p">Intermediate</li>
                <li className="h">PHP</li>
                <li className="p">Intermediate</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="Programming" className="tabcontent">
            <ul>
              <li className="h">Python</li>
              <li className="p">Advanced</li>
              <li className="h">C++</li>
              <li className="p">Intermediate</li>
              <li className="h">C</li>
              <li className="p">Advanced</li>
            </ul>
          </div>

          <div id="Others" className="tabcontent">
            <ul>
              <li className="h">Leader Ship Skills</li>
              <li className="p">
                With me at the helm, my team achieved <br /> success in a mini
                project we undertook in our 3rd sem
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
