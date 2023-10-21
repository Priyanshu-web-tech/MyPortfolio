import React, { useState, useEffect } from "react";
import "./Nav.css";
import open from "../../Assets/open.png";
import close from "../../Assets/close.png";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import {FaWhatsapp} from "react-icons/fa";
import {BiMailSend} from "react-icons/bi"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <>
      <nav className={` ${scrolling ? "scrolling" : ""}`}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <img
            className="bar"
            id="toggle-icon"
            src={isMenuOpen ? close : open}
            alt="Menu"
          />
        </div>

        <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutpg" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skillpg" onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projectspg" onClick={closeMenu}>
              My Work
            </Link>
          </li>
          <li>
            <Link to="/contactpg" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="right-icons">
          <a target="_blank" href="mailto:priyanshusharma6666@gmail.com"><BiMailSend size={"18px"}/></a>
          <a target="_blank" href="http://wa.me/918279707568"><FaWhatsapp size={"18px"}/></a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
