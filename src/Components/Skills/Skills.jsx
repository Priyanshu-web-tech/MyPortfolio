import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Development");
  const [maxTabContentHeight, setMaxTabContentHeight] = useState(0);

  function openTab(tabName) {
    setActiveTab(tabName);
  }

  useEffect(() => {
    document.getElementById("defaultOpen").click();
  }, []);

  const developmentSkills = [
    { icon: "fab fa-html5", name: "HTML" },
    { icon: "fab fa-css3", name: "CSS" },
    { icon: "fab fa-js", name: "JavaScript" },
    { icon: "fab fa-react", name: "React.js" },
    { icon: "fas fa-database", name: "SQL" },
    { icon: "fab fa-php", name: "PHP" },
  ];

  const programmingSkills = [
    { icon: "fa-solid fa-c", name: "C++" },
    { icon: "fa-solid fa-c", name: "C" },
    { icon: "fab fa-python", name: "Python" },
  ];

  useEffect(() => {
    const developmentHeight = document.getElementById("Development").offsetHeight;
    const programmingHeight = document.getElementById("Programming").offsetHeight;
    setMaxTabContentHeight(Math.max(developmentHeight, programmingHeight));
  }, []);

  return (
    <div id="skill-container" className="skill-container">
      <h1>My Skills</h1>
      <div className="outer-container">
        <div className="container">
          <div className="tab">
            <button
              id="defaultOpen"
              className={`tablinks ${
                activeTab === "Development" ? "active" : ""
              }`}
              onClick={() => openTab("Development")}
            >
              Development
            </button>
            
            <button
              className={`tablinks ${
                activeTab === "Programming" ? "active" : ""
              }`}
              onClick={() => openTab("Programming")}
            >
              Programming
            </button>
          </div>

          <motion.div
            style={{ minHeight: maxTabContentHeight + "px" }}
            whileInView={{ opacity: 1 }}
            initial={{opacity: 0 }}
            transition={{ duration: 2 }}
            id="Development"
            className={`tabcontent ${
              activeTab === "Development" ? "active" : ""
            }`}
          >
            <section id="skills">
              <div className="skills-content">
                <div className="skill-list">
                  {developmentSkills.map((skill, index) => (
                    <div className="skill" key={index}>
                      <i className={skill.icon}></i>
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>

          <motion.div
            style={{ minHeight: maxTabContentHeight + "px" }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            
            id="Programming"
            className={`tabcontent ${
              activeTab === "Programming" ? "active" : ""
            }`}
          >
            <section id="skills">
              <div className="skills-content">
                <div className="skill-list">
                  {programmingSkills.map((skill, index) => (
                    <div className="skill" key={index}>
                      <i className={skill.icon}></i>
                      
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
