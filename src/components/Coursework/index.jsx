import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import arrow icons
import "./index.css";

const courseworkData = [
  {
    name: "Neural Networks and Deep Learning",
    provider: "DeepLearning.ai",
    date: "August 2024",
    outcome:
      "Understanding of neural networks, backpropagation, and deep learning architectures.",
  },
  {
    name: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization & Optimization",
    provider: "DeepLearning.ai",
    date: "July 2024",
    outcome:
      "Skills in hyperparameter tuning, regularization techniques, and optimization strategies.",
  },
  {
    name: "Cyber Security",
    provider: "Oxford Home Study Centre",
    date: "June 2024",
    outcome:
      "Knowledge in internet safety, cyber-attack prevention, and security protocols.",
  },
];

const Coursework = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="coursework" className="coursework-section">
      <h1 className="section-heading">Coursework</h1>
      <div className="coursework-container">
        {courseworkData.map((course, index) => (
          <div key={index} className="course">
            <div
              className="course-title"
              onClick={() => handleDropdownToggle(index)}
            >
              {course.name}
              <span className="dropdown-icon">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {activeIndex === index && (
              <div className="course-details">
                <p>
                  <strong>Provider:</strong> {course.provider}
                </p>
                <p>
                  <strong>Certification Date:</strong> {course.date}
                </p>
                <p>
                  <strong>Learning Outcome:</strong> {course.outcome}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coursework;
