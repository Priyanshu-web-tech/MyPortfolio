import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,FaJs, FaReact,FaDatabase,FaPhp,FaPython,FaCuttlefish, FaNode,} from "react-icons/fa6";
import { BiLogoCPlusPlus,BiLogoCss3 } from "react-icons/bi";
import { SiExpress, SiMongodb } from "react-icons/si";

import "./Skills.css";
import Transition from "../Transition/Transition";


const Skills = () => {

  const iconSize = {
    fontSize: "4rem",
  };

  const skills = [
    { icon: <FaHtml5 style={iconSize} />, name: "HTML" },
    { icon: <BiLogoCss3 style={iconSize} />, name: "CSS" },
    { icon: <FaJs style={iconSize} />, name: "JavaScript" },
    { icon: <FaReact style={iconSize} />, name: "React.js" },
    { icon: <FaNode style={iconSize} />, name: "Node" },
    { icon: <SiExpress style={iconSize} />, name: "Express" },
    { icon: <SiMongodb style={iconSize} />, name: "MongoDB" },
    { icon: <FaDatabase style={iconSize} />, name: "MySQL" },
    { icon: <FaPython style={iconSize} />, name: "Python" },
    { icon: <FaCuttlefish style={iconSize} />, name: "C" },
    { icon: <BiLogoCPlusPlus style={iconSize} />, name: "C++" },
   

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

export default Transition(Skills);