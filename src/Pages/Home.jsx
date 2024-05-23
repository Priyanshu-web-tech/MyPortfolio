import React from "react";
import Hero from "../Components/Hero/Hero";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import Transition from "../Components/Transition/Transition";
import Marquee from "../Components/Marquee/Marquee";
import EducationExperience from "../Components/EducationExperience/EducationExperience";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div id="content">
      <Hero />
      <Marquee />
      <div style={{ marginTop: "7rem" }}>
        <About />
      </div>
      <div style={{ marginTop: "7rem" }}>
        <Skills />
      </div>
      <div style={{ marginTop: "7rem" }}>
        <EducationExperience />
      </div>
      <div style={{ marginTop: "7rem" }}>
        <Projects />
      </div>
      <div style={{ marginTop: "7rem" }}>
        <Testimonial />
      </div>
      <div style={{ marginTop: "7rem" }}>
        <Contact />
      </div>
    </div>
  );
};

export default Transition(Home);
