import profileImage from "../../assets/profile.png"; // Replace with your image path
import "./index.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="text-section">
          <h1>
            {`Hi, I'm`} <span>Tasnim Anas</span>
          </h1>
          <p>
            I’m a passionate developer specializing in full-stack and machine
            learning. I create innovative solutions and work on exciting
            projects. Welcome to my portfolio!
          </p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/TasnimAnas" target="_blank">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/TasnimAnas" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://scholar.google.com/citations?user=UPwnJoMAAAAJ"
                target="_blank"
              >
                <FaGoogleScholar />
              </a>
            </li>
            <li>
              <a href="https://blog.tasnimanas.com/" target="_blank">
                <FaMedium />
              </a>
            </li>
            <li>
              <a href="mailto:tur.anas2000@gmail.com">
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
        <div className="image-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
