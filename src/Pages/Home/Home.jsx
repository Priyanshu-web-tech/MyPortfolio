import React from "react";
import Hero from "../../Components/Hero/Hero";
import Contact from "../../Components/Contact/Contact";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";
import Transition from "../../Components/Transition/Transition";
import "./Home.css";

const Home = () => {
  return (
    <div id="content">
      <Hero />

      <div className="marquee-container">
        <marquee
          behavior="scroll"
          direction="left"
          className="marquee"
          scrollamount="20"
        >
          Elevating user experiences through creative design and cutting-edge
          technology
        </marquee>

        <marquee
          behavior="scroll"
          direction="right"
          className="marquee"
          scrollamount="20"
        >
          Transforming ideas into reality – one line of code at a time.{" "}
        </marquee>
      </div>
      
      <div style={{ marginTop: "7rem" }}>
        <About />
      </div>
      <div style={{ marginTop: "7rem" }}>
        <Skills />
      </div>
      <div style={{ marginTop: "7rem" }}>
        <Projects />
      </div>
      <div style={{ marginTop: "7rem" }}>
        <Contact />
      </div>
    </div>
  );
};

export default Transition(Home);
