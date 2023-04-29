import React from "react";
import "./About.css";
import Resume from "../../Assets/Resume.pdf";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import mypic from "../../Assets/mypic.jpg";

const About = () => {


  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <motion.div 
      initial={{ opacity: 0, x: 300 }}
      transition={{ duration: 1, type: "tween" }}
      whileInView={{ opacity: 1, x: 0 }}
      className="grid4">
        <div className="cola1">
        <motion.img
            whileHover={{ scale: 1.1 }}
              initial={{ x: 1000 }}
              animate={{ x: 10 }}
              transition={{ delay: 0.1, duration: 1, type: "spring" }}
              src={mypic}
              alt=""
            />
        </div>

        <div className="cola2">
         
        <p>

          Hi,I'm a second year student at ABESEC, pursuing my Bachelor's
          of Technology in Computer Science with specialization in DATA SCIENCE.
          <br />
          I am from Muzaffarnagar,UP.
          <br />
          I am very passionate about Web
          Development & Data Science and have a keen interest to learn more
          about these technologies.
          I'm looking forward for new opportunities,Feel Free to contact me.
          <br />
          <div className="buttons">
          <Link to="aboutpg"><motion.button
           transition={{duration:0.3}}
          whileHover={{scale:1.1}}
          >Read More</motion.button></Link>
          <a 
          target="_blank"
          href={Resume}>
            <motion.button
              transition={{duration:0.3}}
              whileHover={{scale:1.1}}
              >
              Download Resume
            </motion.button>
          </a>
          </div>
        </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
