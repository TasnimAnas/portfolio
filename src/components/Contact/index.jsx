import React, { useState } from "react";
import { FaCopyright, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./index.css";
import { FaGoogleScholar } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, subject, message } = formData;
    const mailtoLink = `mailto:tur.anas2000@gmail.com?subject=${subject}&body=${message}%0A%0ASender,%0A${name}`;
    window.location.href = mailtoLink;
  };

  return (
    <footer id="contact" className="contact-footer">
      <div class="footer">
        <div class="contact">
          <h2>My Writings</h2>
          <p>
            Read the blog of Tasnim Ur Rahaman Anas at:{" "}
            <a href="https://blog.tasnimanas.com" target="_blank">
              https://blog.tasnimanas.com
            </a>
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
              <a href="mailto:tur.anas2000@gmail.com">
                <FaEnvelope />
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
          </ul>
        </div>
        <div class="contactForm">
          <h2>Let's Message me</h2>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            <input
              required
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              required
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <input class="submitBtn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <hr />
      <div className="lastFoot">
        <FaCopyright />
        {"2025 Tasnim Anas"}
      </div>
    </footer>
  );
};

export default Contact;
