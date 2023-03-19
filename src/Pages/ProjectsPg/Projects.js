import {React,useEffect} from "react";
import AnimatedCursor from "react-animated-cursor";
import { Link } from "react-router-dom";
import CardsPr from "../../Components/CardsPr/CardsPr";
import Footer from "../../Components/Footer/Footer";
import { motion } from "framer-motion";

import "./Projects.css";


const Projects = () => {

  useEffect(() => {
    const hiElement = document.getElementById("topProject");
    hiElement.scrollIntoView();
  }, []);
  return (
    <div>
      <div className="projectspg" >
        <AnimatedCursor
          innerSize={15}
          outerSize={8}
          color="204, 255, 255"
          outerAlpha={0.5}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "p",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            ".link",
          ]}
        />
        <h1 id="topProject" className="h1">My Projects</h1>
        <CardsPr
          name="My Gallery"
          intro="Image Gallery build with Unsplash API to provide images based on entered topic"
          link="https://wondrous-pixie-fe47ad.netlify.app/"
        />
        <CardsPr
          name="PresentSeek"
          intro="Attendance Management System build for our College with advanced features like Attendance Prediction,TECH STACK USED-HTML,CSS,JavaScript,PHP and MySql."
          link="https://github.com/Priyanshu-web-tech/PresentSeek"
        />
        <CardsPr
          name="Netflix Clone"
          intro="Netflix Clone build with simple vanilla CSS and HTML solving the page top up problem and providing carasoul for new releases "
          link="https://eloquent-lily-14a2f3.netlify.app/"
        />
        <CardsPr
          name="Online Quiz"
          intro="Simple Quiz Website build with the help of JavaScript"
          link="https://stalwart-fairy-7d2e97.netlify.app/"
        />
        <CardsPr
          name="CodeSeek"
          intro="A tech Blog Website,providing latest informations about new tech around the glob"
          link="https://coruscating-daffodil-8f4c52.netlify.app/"
        />
        <CardsPr
          name="Quiz"
          intro="One more Quiz Project!!,A fun quiz game build with Python and Mysql,giving us facility to play in 
        three categories-History,Sports,Technology also it allows the game Admin 
        to Add,Update,Delete Questions and it is personalized User Id and 
        Password based!"
        link="https://github.com/Priyanshu-web-tech/Quiz_Python-SQL"

        />

        <Link to="/">
          <motion.button
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
          >
            Go Back
          </motion.button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
