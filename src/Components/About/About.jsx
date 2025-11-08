import { motion } from "framer-motion";
import "./About.css";
import Transition from "../Transition/Transition";

const About = () => {
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
           <div className="col2">
          <img
            className="pic"
            src="https://ik.imagekit.io/pz4meracm/Portfolio/mypic.jpg"
            alt=""
          />
        </div>
        <div className="col1">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            id="overview"
          >
            <p>
              Hi, I'm a pre-final year student at ABESEC, majoring in Computer
              Science with a focus on Data Science. I'm passionate about Web
              Development and Machine Learning. I've worked on diverse projects,
              showcasing my skills in creating responsive web applications and
              exploring machine learning concepts like predictive modeling and
              pattern recognition. I'm actively seeking opportunities to further
              my knowledge and contribute to innovative projects. Feel free to
              reach out; I'm excited to connect and explore new possibilities!
            </p>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1O4ta115lkyK4T-mZ6IXr-KK9Q-ugwkzt/view?usp=drive_link"
            >
              <button name="submit" type="submit" className="btn">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12 15.5v-10M12 15.5l4-4M12 15.5l-4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Download</span>
              </button>
            </a>
          </motion.div>
        </div>

     
      </motion.div>
    </div>
  );
};

export default Transition(About);
