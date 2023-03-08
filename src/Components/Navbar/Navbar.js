import React, { useState, useEffect } from "react";
import "./Nav.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return (
    <div>
      <div className={`nav${scroll ? " scroll" : ""}`}>
        <div className="container">
          <ul>
            <li className="nav-item">
              <a href="#hero">Home</a>
              
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
              
            </li>
            <li className="nav-item">
              <a href="#project">My Work</a>
              
            </li>
            <li className="nav-item">
              <a href="#skills">Skills</a>
              
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
