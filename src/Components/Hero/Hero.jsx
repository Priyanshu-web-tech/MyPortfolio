import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import man from "../../Assets/man.json";
import LottiePlayer from "react-lottie-player";

const Hero = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        id="hero"
      >
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lottie-container"
        >
          <LottiePlayer
            loop
            play
            animationData={man}
            style={{ width: 400,padding:"1rem"}}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hero-content"
        >
          <h2>Hi, I'm</h2>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Priyanshu
          </motion.h1>
          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            Your Front End Expert
          </motion.p>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Hero;
