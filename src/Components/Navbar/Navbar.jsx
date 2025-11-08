import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaMoon, FaSun } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const lightlogo = "https://ik.imagekit.io/pz4meracm/Portfolio/light-logo.png";
  const logo = "https://ik.imagekit.io/pz4meracm/Portfolio/logo.png";

  useEffect(() => {
    const savedTheme = localStorage.getItem("RPtheme");
    if (savedTheme) setIsLightTheme(savedTheme === "light-theme");
  }, [isLightTheme]);

  const handleThemeToggle = () => {
    const currentTheme = isLightTheme ? "" : "light-theme";
    document.body.classList.toggle("light-theme");
    localStorage.setItem("RPtheme", currentTheme);

    setIsLightTheme(!isLightTheme);
  };

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
          <Link to="/">
            <img
              id="logo-img"
              src={`${isLightTheme ? lightlogo : logo}`}
              alt=""
            />
          </Link>
        </div>
        <div
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoCloseSharp /> : <CgMenuGridR />}
        </div>

        <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/aboutpg" onClick={closeMenu}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/skillpg" onClick={closeMenu}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link to="/projectspg" onClick={closeMenu}>
              MY WORK
            </Link>
          </li>
          <li>
            <Link to="/contactpg" onClick={closeMenu}>
              CONTACT
            </Link>
          </li>
        </ul>

        <div>
          <div className="right-icons">
            <a target="_blank" href="mailto:priyanshusharma6666@gmail.com">
              <BiMailSend size={"18px"} />
            </a>
            <a target="_blank" href="http://wa.me/918279707568">
              <FaWhatsapp size={"18px"} />
            </a>
            <div id="switch-icon" onClick={handleThemeToggle}>
              {isLightTheme ? <FaMoon /> : <FaSun />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
