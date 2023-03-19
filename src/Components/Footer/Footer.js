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
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.1, yoyo: Infinity },
    },
  };

  return (
    <div className="footer">
      <br />
      <div className="grid3">
        <div className="col1">
          <h1>Let's Connect</h1>
          <a 
          target="_blank"
          href={Resume}>
            <motion.button variants={buttonVariants} whileHover="hover">
              Download CV
            </motion.button>
          </a>
        </div>
        <div className="col2">
          <h4>Socials:</h4>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100069703429860&mibextid=ZbWKwL">
            <motion.div whileHover={{ scale: 1.2 }}>
              <AiFillFacebook size={30} />
            </motion.div>
          </a>
          <a target="_blank" href="https://www.instagram.com/__priyanshu.sharma/">
            <motion.div whileHover={{ scale: 1.2 }}>
              <AiFillInstagram size={30} />
            </motion.div>
          </a>
          <a target="_blank" href="https://twitter.com/Priyans72532451">
            <motion.div whileHover={{ scale: 1.2 }}>
              <AiFillTwitterSquare size={30} />
            </motion.div>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/priyanshu-sharma-025737216/">
            <motion.div whileHover={{ scale: 1.2 }}>
              <AiFillLinkedin size={30} />
            </motion.div>
          </a>
        </div>
      </div>
      <p>&copy; 2022,All right reserved</p>
    </div>
  );
};

export default Footer;
