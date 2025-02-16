import { useState } from "react";
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
    name: "Machine Learning & Data Science A-Z: Hands-on Python 2024",
    date: "September 2024",
    provider: "Udemy",
    outcome: "A-Z Machine learning theories and implementation using python",
  },
  {
    name: "Advanced Cyber Security - Threats and Governance",
    provider: "GreatLearning",
    date: "September 2024",
    outcome:
      "Completed this course, covering threats, vulnerabilities, attacks, policy frameworks, and ISO27001 certification, in collaboration with Stanford Centre for Professional Development.",
  },
  {
    date: "September 2024",
    name: "Ethical Hacking - Mobile Platforms and Network Architecture",
    provider: "GreatLearning",
    outcome:
      "The course is on Android OS, Ethical Hacking for Mobile Platforms, Network Security Tools, and Metasploit Framework with practical demonstrations and security market insights.",
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
