import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,FaJs, FaReact,FaDatabase,FaPhp,FaPython,FaCuttlefish,} from "react-icons/fa6";
import { BiLogoCPlusPlus,BiLogoCss3 } from "react-icons/bi";
import "./Skills.css";

const Skills = () => {

  const iconSize = {
    fontSize: "4rem",
  };

  const skills = [
    { icon: <FaHtml5 style={iconSize} />, name: "HTML" },
    { icon: <BiLogoCss3 style={iconSize} />, name: "CSS" },
    { icon: <FaJs style={iconSize} />, name: "JavaScript" },
    { icon: <FaReact style={iconSize} />, name: "React.js" },
    { icon: <FaDatabase style={iconSize} />, name: "MySQL" },
    { icon: <FaPhp style={iconSize} />, name: "PHP" },
    { icon: <FaCuttlefish style={iconSize} />, name: "C" },
    { icon: <BiLogoCPlusPlus style={iconSize} />, name: "C++" },
    { icon: <FaPython style={iconSize} />, name: "Python" },
  ];

  return (
    <div id="skill-container" className="skill-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1>My Skills</h1>
      </motion.div>

      <section className="outer-container">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="skill-list"
        >
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;