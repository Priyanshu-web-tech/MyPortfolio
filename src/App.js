import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import Projects from "./Pages/Projects/Projects";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<Home/>} ></Route>
          <Route  path="projects" element={<Projects/>} ></Route>
          <Route  path="about" element={<About/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;