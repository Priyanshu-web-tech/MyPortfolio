import {React,useEffect} from "react";
import AnimatedCursor from "react-animated-cursor";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import "./About.css";
import {motion} from "framer-motion";

const About = () => {

  
  useEffect(() => {
    const hiElement = document.getElementById("topAbout");
    hiElement.scrollIntoView();
  }, []);
  return (  
    <div>
      <div className="aboutpg">
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
            "h3",
            "h6",
            ".link",
          ]}
        />
       
        <h1 id="topAbout">Introduction</h1>
        <div className="intro">
        <p>
          Hi,My name is Priyanshu Sharma from Muzaffarnagar,UP.
          <br />
          Currently I'm a second year student at ABESEC, pursuing my Bachelor's
          of Technology in Computer Science with specialization in DATA SCIENCE.
          <br />I am very passionate about Development and specially Web
          Development & Data Science and have a keen interest to learn more
          about these technologies.
        </p>
        </div>

        <h1>Interests</h1>

        <div className="int">
        <p>
          I like to code on Competitive Programming Platforms like
          CodeChef,LeetCode,etc.
        </p>
        <h3>Codechef Rating</h3>
        <p>Rated 3 stars(1618) at Codechef one of the best coding platforms.</p>

        <h3>HackerRank Rating</h3>
        <p>
          Rated 4 stars at HackerRank in Python,one of most used programming
          language in top industries today.
        </p>

        <h3>LeetCode Rating</h3>
        <p>Rated 1452 on LeetCode,Solved 100+ Problems</p>

        <p className="link">
          Visit My LinkTree to find my CP Platform & other Handles:
          <a href="https://linktr.ee/__priyanshu__">LinkTree</a>
        </p>
        </div>
        <Link to="/">
          <motion.button transition={{duration:0.3}}
          whileHover={{scale:1.1}}>Go Back</motion.button>
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
