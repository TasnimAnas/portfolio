import styles from "./index.module.css";

const workExperienceData = [
  {
    company: "Techneos",
    address: "Trento, Italy",
    jobTitle: "Software & AI Engineer",
    startYear: "December 2025",
    endYear: "Present",
    duties: [
      "Leading full-stack development of a cloud-native SaaS Manufacturing Operations Management (MOM) platform for SMEs, enabling Lean Manufacturing workflows with real-time tracking and monitoring across 10+ operational metrics",
      "Architected and built the Web Planning Console using Next.js, Redux, tRPC, and WebSocket, helping manufacturers reduce manual production planning effort and improve cross-team operational visibility",
      "Implemented real-time data pipelines for operational analytics (KPIs, OEE), enabling factory managers to monitor planning, production, and logistics events in real time for faster bottleneck detection and decision-making",
      "Integrated time-series ML models for automated production scheduling and backlog prioritization, increasing resource utilization by 25% across multiple work centers and improving on-time production planning accuracy",
      "Tech stack: TypeScript, React, Next.js, Machine Learning, PostgreSQL, tRPC, WebSocket, Docker, Cloud SaaS",
    ],
  },
  {
    company: "Ollyo",
    address: "Dhaka, Bangladesh",
    jobTitle: "Software Engineer",
    startYear: "July 2024",
    endYear: "August 2025",
    duties: [
      "Part of the core team behind Kirki, Ollyo’s flagship no-code website builder for WordPress, enabling users to design and deploy sites via a drag-and-drop editor without writing code",
      "Trained LLaMA-3 AI model on internal templates and prompt data for prompt-based site creation feature, enabling automated, visually editable block generation, and reducing users’ site design time by 20%",
      "Reduced app startup latency and improved editor responsiveness by 10% by migrating frontend state logic to Redux store, memoizing costly renders, and cutting API calls per load from 25 to 14",
      "Developed a modular plugin framework for integrating third-party services (e.g., Google Auth, SMTP) through PHP hooks and custom post types, allowing users to add website functionalities without writing code",
      "Tech stack: JavaScript, React, Redux, PHP, WordPress, Python, Transformers, AI/LLM training, MySQL",
    ],
  },
  {
    company: "HighRadius",
    address: "Bhubaneswar, India",
    jobTitle: "Software Engineer Intern",
    startYear: "May 2023",
    endYear: "May 2024",
    duties: [
      "Joined the AI/ML team developing ML-powered tools for automating financial processes, used by 850+ global enterprises, including Fortune 500 firms",
      "Built machine learning models to predict future sales from historical invoice data, which helped clients better manage liquidity and reduce cash-flow volatility",
      "Designed robust data pipelines using pandas to clean and normalize heterogeneous datasets (missing values, inconsistent schemas, outliers), improving model accuracy by 8%",
      "Refactored 20+ React components from class to functional using hooks to align with the new design system, reducing code duplication by 30% and easing future feature work",
      "Tech stack: TypeScript, React, Redux, Java, Spring Boot, Python, Machine Learning, Data Analysis, MySQL",
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
