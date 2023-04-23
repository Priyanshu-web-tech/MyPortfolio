import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";
import { Grid } from 'react-loader-spinner';
import "./Home.css"

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
          <Grid height={100} width={100} color={"white"} ariaLabel={"Loading"} className="loading-container"/>
        </div>
      ) : (
        <div>
          <Navbar />
          <Hero />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <About />
          <br />
          <br />
          <br />
          <br />
          <Skills />
          <br />
          <br />
          <br />
          <br />
          <Projects />
          <br />
          <br />
          <br />
          <br />
          <Contact />
          <br />
          <br />
          <br />
          <br />
          <Footer />
         
        </div>
      )}
    </div>
  );
};

export default Home;