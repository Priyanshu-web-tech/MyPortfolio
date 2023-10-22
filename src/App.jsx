import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import ProjectsPg from "./Pages/Projects.jsx";
import AboutPg from "./Pages/AboutPg.jsx";
import AnimatedCursor from "react-animated-cursor";
import ContactPg from "./Pages/ContactPg.jsx";
import SkillPg from "./Pages/SkillPg.jsx";

function App() {
  return (
    <div className="App">
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

        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projectspg" element={<ProjectsPg />}></Route>
            <Route path="/aboutpg" element={<AboutPg />}></Route>
            <Route path="/skillpg" element={<SkillPg />}></Route>
            <Route path="/contactpg" element={<ContactPg />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
