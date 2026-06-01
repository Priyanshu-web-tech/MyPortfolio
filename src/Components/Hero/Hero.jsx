import "./Hero.css";
import { motion } from "framer-motion";
import man from "../../Assets/man.json";
import LottiePlayer from "react-lottie-player";
import { Link } from "react-router-dom";

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
            style={{ width: '400px', padding: "1rem" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hero-content"
        >
          <div>
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
              Your Full Stack Expert
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.4 }}
            >
              <Link to="/projectspg">
                <button className="btn-primary-hero">View My Work</button>
              </Link>
              <Link to="/contactpg">
                <button className="btn-secondary-hero">Contact Me</button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll down</span>
      </motion.div>
    </>
  );
};

export default Hero;
