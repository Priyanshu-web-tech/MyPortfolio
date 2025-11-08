import  { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Loader from "./Components/Loader/Loader.jsx";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("RPtheme");

    if (savedTheme) document.body.classList.add(savedTheme);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
};

export default App;
