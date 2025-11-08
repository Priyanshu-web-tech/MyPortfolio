import { motion } from "framer-motion";

import Card from "../Cards/Card";
import Transition from "../Transition/Transition";
import { projectData } from "../../Constants/config";

import "./Projects.css";

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
