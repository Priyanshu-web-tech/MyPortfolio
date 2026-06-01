import { motion } from "framer-motion";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaDatabase,
  FaPython,
  FaCuttlefish,
  FaNode,
} from "react-icons/fa6";
import { BiLogoCPlusPlus, BiLogoCss3 } from "react-icons/bi";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiSequelize,
  SiMongoose,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFirebase,
  SiGithubactions,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import Transition from "../Transition/Transition";

import "./Skills.css";

const Skills = () => {
  const iconSize = {
    fontSize: "4rem",
  };

  const skills = [
    { icon: <FaHtml5 style={iconSize} />, name: "HTML" },
    { icon: <BiLogoCss3 style={iconSize} />, name: "CSS" },
    { icon: <SiTailwindcss style={iconSize} />, name: "Tailwind CSS" },
    { icon: <FaJs style={iconSize} />, name: "JavaScript" },
    { icon: <SiTypescript style={iconSize} />, name: "TypeScript" },
    { icon: <FaReact style={iconSize} />, name: "React.js" },
    { icon: <SiRedux style={iconSize} />, name: "Redux" },
    { icon: <TbBrandReactNative style={iconSize} />, name: "React Native" },
    { icon: <SiNextdotjs style={iconSize} />, name: "Next.js" },
    { icon: <FaNode style={iconSize} />, name: "Node.js" },
    { icon: <SiExpress style={iconSize} />, name: "Express.js" },
    { icon: <SiMongodb style={iconSize} />, name: "MongoDB" },
    { icon: <SiMongoose style={iconSize} />, name: "Mongoose" },
    { icon: <SiSequelize style={iconSize} />, name: "Sequelize" },
    { icon: <FaDatabase style={iconSize} />, name: "MySQL" },
    { icon: <SiFirebase style={iconSize} />, name: "Firebase" },
    { icon: <FaPython style={iconSize} />, name: "Python" },
    { icon: <FaCuttlefish style={iconSize} />, name: "C" },
    { icon: <BiLogoCPlusPlus style={iconSize} />, name: "C++" },
    { icon: <SiGit style={iconSize} />, name: "Git" },
    { icon: <SiGithub style={iconSize} />, name: "GitHub" },
    { icon: <SiGithubactions style={iconSize} />, name: "GitHub Actions" },
  ];

  return (
    <div id="skill-container" className="skill-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="section-title-wrap"
      >
        <h1 className="section-heading">My Skills</h1>
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
