import styles from "./index.module.css";

const workExperienceData = [
  {
    company: "Ollyo",
    address: "Dhaka, Bangladesh",
    jobTitle: "Software Engineer",
    startYear: "July 2024",
    endYear: "August 2025",
    duties: [
      "Developed an AI-powered automated website generation feature using fine-tuned Large Language Models (LLMs), tailored to user requirements.",
      "Trained and fine-tuned LLMs to align with business logic and functional data, enabling custom AI-driven website creation within Droip, a no-code platform.",
      "Diagnosed and resolved bugs in AI/ML model integration and front-end code, improving product stability and enhancing user experience (UX).",
      "Optimized React-based UI, reducing loading times by 15% and ensuring smoother interactions, contributing to increased user satisfaction as seen in reviews.",
      "Skills used: Python, Artificial Intelligence, LLM training and fine-tuning, React, Redux, Git, and WordPress.",
    ],
  },
  {
    company: "HighRadius",
    address: "Bhubaneswar, India",
    jobTitle: "Software Engineer Intern",
    startYear: "May 2023",
    endYear: "May 2024",
    duties: [
      "Contributed to the machine learning team in developing an AI-powered B2B business management app, focusing on sales forecasting to enhance sales predictions and business decision-making.",
      "Played an important role in testing and deploying AI-driven finance software adopted by 850+ companies, improving financial management and decision-making.",
      "Managed daily front-end operations and maintenance, leveraging React and TypeScript to ensure continuous improvement, stability, and error-free functionality across all company products.",
      "Optimized UI performance, reducing load times and enhancing efficiency by 20% through bug resolution and performance optimization strategies.",
      "Skills used: Python, Data Analytics, Machine Learning, Typescript, React, Redux, Jest, Selenium, and MySQL.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className={styles["work-experience-section"]}>
      <h1 className={styles["section-heading"]}>Work Experience</h1>
      <div className={styles["work-experience-container"]}>
        {workExperienceData.map((experience, index) => (
          <div key={index} className={styles.experience}>
            <h2>{experience.jobTitle}</h2>
            <h3>{experience.company}</h3>
            <div>
              <p>{experience.address}</p>
              <p>
                {experience.startYear} - {experience.endYear}
              </p>
            </div>
            <ul>
              {experience.duties.map((duty, i) => (
                <li key={i}>{duty}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
