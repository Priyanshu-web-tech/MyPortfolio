import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import "./App.css";
import { IKContext } from "imagekitio-react";

import { AnimatePresence } from "framer-motion";

const Loader = () => {
  const ranges = [[0, 0]];
  for (let i = 10; i <= 100; i += 10) {
    ranges.push([i - 9, i]);
  }
  ranges.push([100, 100]);

  let currentIndex = 0;
  const [loading, setLoading] = useState(true);

  function GenNo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const loader = document.querySelector("#loader");

    function updateLoader() {
      if (currentIndex < ranges.length) {
        const [min, max] = ranges[currentIndex];
        const randomValue = `"${GenNo(min, max).toString().padStart(3, "0")}"`;

        loader.textContent = randomValue;

        setTimeout(function () {
          if (currentIndex === ranges.length - 1) {
            setLoading(false);
          }
          currentIndex++;
          updateLoader();
        }, Math.floor(Math.random() * 1200));
      }
    }

    updateLoader();
  }, []);

  return loading ? <div id="loader"> "000" </div> : null;
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    var savedTheme = localStorage.getItem("RPtheme");
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    }

    // Simulating a delay to show the loader
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay time as needed
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/pz4meracm">
      <div>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "var(--white)",
          }}
          outerStyle={{
            border: "3px solid var(--white)",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            "h1",
            "p",
          ]}
        />

        <Navbar />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/projectspg" element={<Projects />} />
            <Route path="/aboutpg" element={<About />} />
            <Route path="/skillpg" element={<Skills />} />
            <Route path="/contactpg" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </IKContext>
  );
};

export default App;
