import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import Marquee from "../Components/Marquee/Marquee";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
};

export default Home;