import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Tasnim`s portfolio</div>
      <div className={`nav-items ${isDropdownOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work-experience">Work Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
        </ul>
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            <span className="hideOnSmall">More</span>{" "}
            <span className="hideOnFull">
              <GiHamburgerMenu />
            </span>
          </button>
          <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
            <li className="hideOnFull">
              <a href="#about">About</a>
            </li>
            <li className="hideOnFull">
              <a href="#work-experience">Work Experience</a>
            </li>
            <li className="hideOnFull">
              <a href="#education">Education</a>
            </li>
            <li className="hideOnFull">
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            {/* <li>
              <a href="#research-publications">Research Publications</a>
            </li> */}
            <li>
              <a href="#coursework">Coursework</a>
            </li>
            {/* <li>
              <a href="#awards">Awards</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
