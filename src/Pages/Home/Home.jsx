import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";
import Marquee from "../../Components/Marquee/Marquee";
import "./Home.css";

const Home = () => {

  // Range Array
  const ranges = [[0, 0]];
  for (let i = 10; i <= 100; i += 10) {
    ranges.push([i - 9, i]);
  }
  ranges.push([100, 100]);

  
  let currentIndex = 0;
  const [loading, setLoading] = useState(true);

  //Random number generator
  function GenNo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const loader = document.querySelector("#loader"); 

    function updateLoader() {
      if (currentIndex < ranges.length) {
        const [min, max] = ranges[currentIndex];
        const randomValue = `"${GenNo(min, max).toString().padStart(3, "0")}"`; //Get number from function and make it 3 digit using padStart

        loader.textContent = randomValue;

        setTimeout(function () {
          if (currentIndex === ranges.length - 1) {
            // Hide the loader and display the content when the last number is reached
            setLoading(false); // Set loading to false
          }
          currentIndex++;
          updateLoader(); //Recursion use to re-call till range!=index
        }, 500);
      }
    }

    updateLoader();
  }, []);

  if (loading) {
    return <div id="loader"> "000" </div>;
  }

  return (
    <div id="content">
      <Navbar />
      <Hero />
      <Marquee />
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
      <Footer />
    </div>
  );
};

export default Home;
