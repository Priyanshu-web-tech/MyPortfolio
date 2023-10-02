import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";

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
          href="https://www.facebook.com/profile.php?id=100069703429860&mibextid=ZbWKwL"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <i className="fab fa-facebook" />
          </motion.div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/__priyanshu.sharma/"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <i className="fab fa-instagram" />
          </motion.div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/Priyans72532451"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <i className="fab fa-twitter-square" />
          </motion.div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/priyanshu-sharma-025737216/"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <i className="fab fa-linkedin" />
          </motion.div>
        </a>
      </motion.div>

      <motion.p
        className="copyright"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Copyright &copy; 2023,All right reserved. Made by{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Priyanshu-web-tech"
        >
          Priyanshu
        </a>
      </motion.p>
      <br />
    </div>
  );
};

export default Footer;
