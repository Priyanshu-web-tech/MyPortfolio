import React from "react";
import Card from "../Cards/Card";
import "./Projects.css";
import { motion } from "framer-motion";
import Transition from "../Transition/Transition";
import First from "../../Assets/first.jpg";
import Second from "../../Assets/second.jpg";
import third from "../../Assets/third.jpg";
import fourth from "../../Assets/fourth.jpg";
import fifth from "../../Assets/fifth.jpg";

const projectData = [
  {
    name: "BitMap",
    intro:
      "A CryptoCurrency Tracker providing updated information about different cryptocurrencies.",
    link: "https://bit-map.netlify.app/",
    image: First,
  },
  {
    name: "PresentSeek",
    intro:
      "Attendance Management System with advanced facilities like attendance prediction",
    link: "https://github.com/Priyanshu-web-tech/PresentSeek",
    image: Second,
  },
  {
    name: "My Gallery",
    intro:
      "Image Gallery build with Unsplash API to provide images based on entered topic",
    link: "https://wondrous-pixie-fe47ad.netlify.app/",
    image: third,
  },
  {
    name: "Memory Quest",
    intro:
      "Memory Quest is an engaging memory game where you race against the clock to match pairs of cards. Test your memory skills, achieve the best score, and immerse yourself in the challenge.",
    link: "https://memory-quest.netlify.app/",
    image: fourth,
  },
  {
    name: "GitHub Profile Viewer",
    intro:
      "A GitHub Profile View,It fetches details from GitHub API and present you in visually appealing manner",
    link: "https://github-prviewer.netlify.app/",
    image: fifth,
  },
];

const Projects = () => {
  return (
    <div className="projects" id="project">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1>My Work</h1>
      </motion.div>
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: -300 }}
        transition={{ duration: 1 }}
        className="work-list"
      >
        {projectData.map((project, index) => (
          <Card
            key={index}
            name={project.name}
            intro={project.intro}
            link={project.link}
            image={project.image}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Transition(Projects);
