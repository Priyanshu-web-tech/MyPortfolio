import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./EducationExperience.css";
import { FaBriefcase, FaGraduationCap, FaLaptopCode, FaSchool, FaUserGraduate } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  function openTab(tabName) {
    setActiveTab(tabName);
  }

  useEffect(() => {
    document.getElementById("defaultOpen").click();
  }, []);

  const timelineData = [
    {
      title: "ABES Engineering College, Ghaziabad",
      date: "2021 - 2025",
      description: "B.Tech in Computer Science Engineering-Data Science",
      icon: <FaUserGraduate />,
    },
    {
      title: "St. Mary's Academy, Saharanpur",
      date: "2019 - 2021",
      description: "Intermediate with PCM, English and CS",
      icon: <FaGraduationCap />,
    },
    {
      title: "Infant Jesus School, Saharanpur",
      date: "2017 - 2019",
      description: "High School with Science",
      icon: <FaSchool />,
    },
  ];

  const experienceData = [
    {
      title: "SDE Intern at Elanine Creatives",
      date: "April 2024 - Present",
      description: "Working as a Software Developer Intern, focusing on full-stack development and gaining practical experience in web technologies.",
      icon: <FaBriefcase />,
    },
    {
      title: "Freelance Developer",
      date: "2023 - Present",
      description: "Providing freelance development services, specializing in web and mobile application development using modern technologies.",
      icon: <FaLaptopCode />,
    },
  ];

  return (
    <div id="edExp">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1>Education & Experience</h1>
      </motion.div>
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: -100 }}
        transition={{ duration: 0.6 }}
        className="edExp"
      >
        <div className="col1">
          <div className="tab-buttons">
            <button
              id="defaultOpen"
              className={activeTab === "experience" ? "active" : ""}
              onClick={() => openTab("experience")}
            >
              Experience
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
            id="experience"
            className={`tabcontent ${activeTab === "experience" ? "active" : ""}`}
          >
            <VerticalTimeline className="vertical-timeline-custom-line">
              {experienceData.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "var(--primary-color)",
                    color: "var(--dark-black)",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  var(--primary-color)",
                  }}
                  iconStyle={{
                    background: "var(--primary-color)",
                    color: "var(--dark-black)",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                  icon={item.icon}
                >
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "var(--dark-black)",
                      fontWeight: "600",
                    }}
                  >
                    {item.description}
                  </p>
                  <p
                    style={{
                      color: "var(--dark-black)",
                      fontWeight: "600",
                    }}
                  >
                    {item.date}
                  </p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </motion.div>

          {/* Education */}
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            id="education"
            className={`tabcontent education ${
              activeTab === "education" ? "active" : ""
            }`}
          >
            <VerticalTimeline className="vertical-timeline-custom-line">
              {timelineData.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "var(--primary-color)",
                    color: "var(--dark-black)",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  var(--primary-color)",
                  }}
                  iconStyle={{
                    background: "var(--primary-color)",
                    color: "var(--dark-black)",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                  icon={item.icon}
                >
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "var(--dark-black)",
                      fontWeight: "600",
                    }}
                  >
                    {item.description}
                  </p>
                  <p
                    style={{
                      color: "var(--dark-black)",
                      fontWeight: "600",
                    }}
                  >
                    {item.date}
                  </p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationExperience;
