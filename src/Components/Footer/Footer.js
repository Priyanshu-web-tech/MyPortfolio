import React from "react";
import "./Footer.css";
import Resume from "../../Assets/Resume.pdf";
import { motion } from "framer-motion";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  const footerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.1, yoyo: Infinity },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div className="footer" variants={footerVariants} initial="hidden" animate="visible">
      <br />
      <div className="grid3">
        <motion.div className="col1" variants={socialVariants}>
          <h1>Let's Connect</h1>
          <a href={Resume}>
            <motion.button variants={buttonVariants} whileHover="hover">
              Download CV
            </motion.button>
          </a>
        </motion.div>
        <motion.div className="col2" variants={socialVariants}>
          <h4>Socials:</h4>
          <a href="https://www.facebook.com/profile.php?id=100069703429860&mibextid=ZbWKwL">
            <motion.div whileHover={{ scale: 1.2 }}>
              <AiFillFacebook size={30} />
            </motion.div>
          </a>
          <a href="https://www.instagram.com/__priyanshu.sharma/">
            <motion.div whileHover={{ scale: 1.2 }}>
              <AiFillInstagram size={30} />
            </motion.div>
          </a>
          <a href="https://twitter.com/Priyans72532451">
            <motion.div whileHover={{ scale: 1.2 }}>
              <AiFillTwitterSquare size={30} />
            </motion.div>
          </a>
          <a href="https://www.linkedin.com/in/priyanshu-sharma-025737216/">
            <motion.div whileHover={{ scale: 1.2 }}>
              <AiFillLinkedin size={30} />
            </motion.div>
          </a>
        </motion.div>
      </div>
      <motion.p variants={socialVariants}>&copy; 2022,All right reserved</motion.p>
    </motion.div>
  );
};

export default Footer;
