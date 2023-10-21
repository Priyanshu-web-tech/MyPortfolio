import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <br />
      <motion.div
        className="connect"
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Let's Connect:</h3>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Priyanshu-web-tech"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaGithub size={20} />
          </motion.div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/__priyanshu.sharma/"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaInstagram size={20} />
          </motion.div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/Priyans72532451"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaTwitter size={20} />
          </motion.div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/priyanshu-sharma-025737216/"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaLinkedin size={20} />
          </motion.div>
        </a>
      </motion.div>

      <motion.p
        className="copyright"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Copyright &copy; 2023, All rights reserved. Made by <span>Priyanshu</span>
      </motion.p>
      <br />
    </div>
  );
};

export default Footer;
