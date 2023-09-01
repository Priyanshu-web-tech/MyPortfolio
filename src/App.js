import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import ProjectsPg from "./Pages/ProjectsPg/Projects";
import AboutPg from "./Pages/AboutPg/About";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<Home/>} ></Route>
          <Route  path="/projectspg" element={<ProjectsPg/>} ></Route>
          <Route  path="/aboutpg" element={<AboutPg/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;