import React, { useState } from "react";
import "./index.css";

const educationData = [
  {
    institute: "Kalinga Institute of Industrial Technology",
    degree: "Bachelor of Technology",
    course: "Computer Science and Engineering",
    address: "Bhubaneswar, India",
    result: "8.41/10",
    coreSubjects:
      "Artificial intelligence, Big Data, Cryptography, Data Analytics, Engineering Economics, Machine Learning.",
    startYear: "September 2020",
    endYear: "May 2024",
    achievements: "Fully funded scholarship by the government of India.",
    extraCurricular: [
      {
        title: "Host of The International Student Podcast | ",
        link: "https://news.kiit.ac.in/ksac/ksac-organizes-international-student-podcast/",
      },
      {
        title: "Event Manager at KIIT International Students Society",
      },
    ],
  },
  {
    institute: "Dr. Mahbubur Rahman Mollah College",
    degree: "High School",
    course: "Science",
    address: "Dhaka, Bangladesh",
    result: "5.00/5.00",
    coreSubjects:
      "Biology, Chemistry, English, Math, Physics, Information and Communication Technology (ICT).",
    startYear: "June 2017",
    endYear: "July 2019",
    extraCurricular: [
      {
        title: "Vice President at DMRC Debating club",
      },
      {
        title: "General Secratary at DMRC Science club",
      },
    ],
  },
];

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="education" className="education-section">
      <h1 className="section-heading">Education</h1>
      <div className="education-container">
        <div className="tabs">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`tab ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {edu.degree}
            </div>
          ))}
        </div>
        <div className="tab-content">
          <h2>{educationData[activeIndex].institute}</h2>
          <h3>{educationData[activeIndex].course}</h3>
          <p>
            <strong>Address:</strong> {educationData[activeIndex].address}
          </p>
          <p>
            <strong>CGPA:</strong> {educationData[activeIndex].result}
          </p>
          <p>
            <strong>Core Subjects:</strong>{" "}
            {educationData[activeIndex].coreSubjects}
          </p>
          <p>
            <strong>Duration:</strong> {educationData[activeIndex].startYear} -{" "}
            {educationData[activeIndex].endYear}
          </p>
          {educationData[activeIndex].achievements && (
            <p>
              <strong>Achievements:</strong>{" "}
              {educationData[activeIndex].achievements}
            </p>
          )}

          {educationData[activeIndex].extraCurricular && (
            <p>
              <strong>Others Activities:</strong>{" "}
              <ol>
                {educationData[activeIndex].extraCurricular.map((activity) => (
                  <li style={{ marginLeft: "30px" }} key={activity.link}>
                    {activity.title}
                    {activity.link && (
                      <a
                        style={{
                          textDecoration: "none",
                        }}
                        target="_blank"
                        href={activity.link}
                      >
                        Link
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
