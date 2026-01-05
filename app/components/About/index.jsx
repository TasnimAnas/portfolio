import Image from "next/image";
import profileImage from "../../assets/profile.webp"; // Replace with your image path
import styles from "./index.module.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaGoogleScholar, FaSquareXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about" className={styles["about-section"]}>
      <div className={styles["about-container"]}>
        <div className={styles["text-section"]}>
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
              <a href="https://www.instagram.com/tasnim__anas/" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/tasnim.ur.rahaman.anas"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://x.com/ImTasnimAnas" target="_blank">
                <FaSquareXTwitter />
              </a>
            </li>
            <li>
              <a href="mailto:tur.anas2000@gmail.com">
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles["image-section"]}>
          <Image
            src={profileImage}
            alt="Profile"
            className={styles["profile-image"]}
          />
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "black",
          padding: "12px",
          borderTopLeftRadius: "16px",
          boxShadow: "0 0 6px rgba(220, 220, 220, 0.1)",
          color: "white",
          fontSize: "12px",
          zIndex: 1000,
        }}
        className={styles["scale-down"]}
      >
        <p>Checkout Product</p>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<a href="https://www.producthunt.com/products/no-fap?embed=true&amp;utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_campaign=badge-no-fap" target="_blank" rel="noopener noreferrer"><img alt="No Fap - Quit masturbation addiction | Product Hunt" width="140" height="30" src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=310930&amp;theme=light&amp;period=daily&amp;t=1767635350765"></a>',
          }}
        ></div>
      </div>
    </section>
  );
};

export default About;
