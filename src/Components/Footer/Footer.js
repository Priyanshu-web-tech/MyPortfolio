import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <br />
      <motion.div
        className="connect"
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Let's Connect:</h2>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100069703429860&mibextid=ZbWKwL">
          <motion.div whileHover={{ scale: 1.2 }}>
            <AiFillFacebook size={25} />
          </motion.div>
        </a>
        <a target="_blank" href="https://www.instagram.com/__priyanshu.sharma/">
          <motion.div whileHover={{ scale: 1.2 }}>
            <AiFillInstagram size={25} />
          </motion.div>
        </a>
        <a target="_blank" href="https://twitter.com/Priyans72532451">
          <motion.div whileHover={{ scale: 1.2 }}>
            <AiFillTwitterSquare size={25} />
          </motion.div>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/priyanshu-sharma-025737216/">
          <motion.div whileHover={{ scale: 1.2 }}>
            <AiFillLinkedin size={25} />
          </motion.div>
        </a>
      </motion.div>
      <motion.p
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Copyright &copy; 2023,All right reserved.
      </motion.p>
      <motion.p
        className="copyright"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Made by{" "}
        <a target="_blank" href="https://github.com/Priyanshu-web-tech">
          Priyanshu
        </a>
      </motion.p>
      <br />
    </div>
  );
};

export default Footer;
