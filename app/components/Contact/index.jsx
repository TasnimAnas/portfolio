"use client";

import { useState } from "react";
import { FaCopyright } from "react-icons/fa";
import styles from "./index.module.css";

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
    <footer id="contact" className={styles["contact-footer"]}>
      <div className={styles["footer"]}>
        <div className={styles["contact"]}>
          <h2>My Writings</h2>
          <p>
            Read the blog of Tasnim Anas at:{" "}
            <a href="https://blog.tasnimanas.com" target="_blank">
              https://blog.tasnimanas.com
            </a>
          </p>
        </div>
        <div className={styles["contactForm"]}>
          <h2>{`Let's Message me`}</h2>
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
            <input
              className={styles["submitBtn"]}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
      <div className={styles["lastFoot"]}>
        <FaCopyright />
        {`${new Date().getFullYear()} Tasnim Anas`}
      </div>
    </footer>
  );
};

export default Contact;
