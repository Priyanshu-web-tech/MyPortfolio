import React from "react";
import "./About.css";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";


const About = () => {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="grid4">
        <div className="cola1">
          <h2>My Introduction</h2>
          <motion.div 
           transition={{duration:0.3}}
          whileHover={{scale:1.1}}
          className="in-data">
          <div className="cards">
            <div className="card">
              <p>Completed <br/> 7+ projects</p>
            </div>
            <div className="card">
              <p>Proficient in <br/> Development</p>
            </div>
            
          </div>
          <br />
          <p className="sum">
            I'm a second year student at ABESEC, pursuing my Bachelor's of
            Technology in Computer Science with specialization in DATA SCIENCE.
            I am very passionate about Web Development & Data Science have a
            keen interest to learn more new technologies.
          </p>
          <br />
          <motion.div
  whileHover={{ scale: 1.05 }}
>
  <Link to="/about">
    <button>Know more About me</button>
  </Link>
</motion.div>
          </motion.div>
        </div>
        <div className="cola2">
          <h2>Education</h2>
          <motion.div
           whileHover={{scale:1.1}} 
           transition={{duration:0.3}}
           className="data">
            <div className="1st">
              <p className="years">2017-2019</p>
              <p> INFANT JESUS SCHOOL,SAHARANPUR-High School with Science</p>
              <br />
            </div>
            <div className="2nd">
              <p className="years">2019-2021</p>
              <p>
                ST.MARY’S ACADEMY,SAHARANPUR-Intermediate with PCM,English and
                CS
              </p>
              <br />
            </div>
            <div className="3rd">
              <p className="years">2021-2025</p>
              <p>
                ABES ENGINEERING COLLEGE(AKTU LUCKNOW)- B.Tech in Data Science
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
