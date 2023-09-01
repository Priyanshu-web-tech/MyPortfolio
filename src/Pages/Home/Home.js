import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";
import { Grid } from "react-loader-spinner";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-container">
          <Grid
            height={100}
            width={100}
            color={"white"}
            ariaLabel={"Loading"}
            className="loading-container"
          />
        </div>
      ) : (
        <div>
          <motion.div
            className="hero-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Navbar />
            <Hero />
          </motion.div>
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
