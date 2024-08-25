import React from "react";
import profileImage from "../../assets/profile.png"; // Replace with your image path
import "./index.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="text-section">
          <h1>
            Hi, I'm <span>Tasnim Anas</span>
          </h1>
          <p>
            I’m a passionate developer specializing in full-stack and machine
            learning. I create innovative solutions and work on exciting
            projects. Welcome to my portfolio!
          </p>
        </div>
        <div className="image-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
