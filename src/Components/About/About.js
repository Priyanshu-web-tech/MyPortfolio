import React from "react";
import "./About.css";
import Resume from "../../Assets/Resume.pdf";
import { Link } from "react-router-dom";
import mypic from "../../Assets/mypic.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="grid4">
        <div className="cola1">
          <img src={mypic} alt="" />
        </div>
        <div className="cola2">
          <p>
            Hi, I'm a Pre Final Year student at ABESEC, pursuing my Bachelor's of
            Technology in Computer Science with specialization in DATA SCIENCE.
            
            I am very passionate about Web Development & Machine Learning and have a
            keen interest to learn more about these technologies. I'm looking
            forward to new opportunities. Feel Free to contact me.
            <br />
            <div className="buttons">
              <Link to="aboutpg">
                <button>Read More</button>
              </Link>
              <a target="_blank" href={Resume}>
                <button>Download Resume</button>
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
