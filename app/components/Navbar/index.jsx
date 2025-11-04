"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./index.module.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropDown = () => {
    setIsDropdownOpen(false);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={reloadPage}>
        Tasnim`s portfolio
      </div>
      <div
        className={`${styles["nav-items"]} ${
          isDropdownOpen ? styles.open : ""
        }`}
      >
        <ul className={styles["nav-links"]}>
          <li onClick={closeDropDown}>
            <a href="#about">About</a>
          </li>
          <li onClick={closeDropDown}>
            <a href="#work-experience">Work Experience</a>
          </li>
          <li onClick={closeDropDown}>
            <a href="#education">Education</a>
          </li>
          <li onClick={closeDropDown}>
            <a href="#research-publications">Research</a>
          </li>
          <li onClick={closeDropDown}>
            <a href="#skills">Skills</a>
          </li>
        </ul>
        <div className={styles.dropdown}>
          <button
            className={styles["dropdown-button"]}
            onClick={toggleDropdown}
          >
            <span className={styles.hideOnSmall}>More</span>{" "}
            <span className={styles.hideOnFull}>
              <GiHamburgerMenu />
            </span>
          </button>
          <ul
            className={`${styles["dropdown-menu"]} ${
              isDropdownOpen ? styles.show : ""
            }`}
          >
            <li onClick={closeDropDown} className={styles.hideOnFull}>
              <a href="#about">About</a>
            </li>
            <li onClick={closeDropDown} className={styles.hideOnFull}>
              <a href="#work-experience">Work Experience</a>
            </li>
            <li onClick={closeDropDown} className={styles.hideOnFull}>
              <a href="#education">Education</a>
            </li>
            <li onClick={closeDropDown} className={styles.hideOnFull}>
              <a href="#research-publications">Research Publications</a>
            </li>
            <li onClick={closeDropDown} className={styles.hideOnFull}>
              <a href="#skills">Skills</a>
            </li>
            <li onClick={closeDropDown}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={closeDropDown}>
              <a href="#coursework">Coursework</a>
            </li>
            <li>
              <a href="#awards">Awards</a>
            </li>
            <li onClick={closeDropDown}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
