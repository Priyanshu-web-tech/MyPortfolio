import React from "react";
import Card from "../Cards/Card";
import "./Projects.css";
import { motion } from "framer-motion";
import Transition from "../Transition/Transition";

const projectData = [
  {
    name: "DocMate",
    intro:
      "DocMate optimizes clinic workflows with tailored interfaces, real-time queue management, and CRUD functionalities for seamless patient care",
    link: "https://clinic-management-sys.vercel.app/",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "CareerSync",
    intro:
      "MERN stack powered job platform connecting seekers and employers, streamlining applications.",
    link: "https://career-sync-gamma.vercel.app/",
    image: "https://ik.imagekit.io/pz4meracm/Portfolio/job.jpg",
  },
  {
    name: "PropertyPulse",
    intro:
      "Full Stack Property Listing application-simplifying property search and transactions",
    link: "https://property-pulse-seven.vercel.app/",
    image: "https://ik.imagekit.io/pz4meracm/Portfolio/property.jpg",
  },
  {
    name: "BitMap",
    intro:
      "A CryptoCurrency Tracker providing updated information about different cryptocurrencies.",
    link: "https://bit-map.netlify.app/",
    image: "https://ik.imagekit.io/pz4meracm/Portfolio/first.jpg",
  },
  {
    name: "PresentSeek",
    intro:
      "Attendance Management System with advanced facilities like attendance prediction",
    link: "https://github.com/Priyanshu-web-tech/PresentSeek",
    image: "https://ik.imagekit.io/pz4meracm/Portfolio/second.jpg",
  },
  {
    name: "Memory Quest",
    intro:
      "Memory Quest is an engaging memory game where you race against the clock to match pairs of cards. Test your memory skills, achieve the best score, and immerse yourself in the challenge.",
    link: "https://memory-quest.netlify.app/",
    image: "https://ik.imagekit.io/pz4meracm/Portfolio/fourth.jpg",
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
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
          >
            <Card
              name={project.name}
              intro={project.intro}
              link={project.link}
              image={project.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Transition(Projects);
