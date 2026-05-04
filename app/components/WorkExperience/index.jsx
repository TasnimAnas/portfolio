import styles from "./index.module.css";

const workExperienceData = [
  {
    company: "Techneos",
    address: "Trento, Italy",
    jobTitle: "Software & AI Engineer",
    startYear: "December 2025",
    endYear: "Present",
    duties: [
      "Leading full-stack development of a cloud-native SaaS Manufacturing Operations Management (MOM) platform for SMEs, enabling Lean Manufacturing with real-time planning, tracking, and monitoring across 10+ operational metrics",
      "Architected and built the Web Planning Console using Next.js (Gantt-based scheduling, task management) and Python FastAPI, deployed as a Dockerized cloud SaaS solution",
      "Implemented real-time data pipelines for operational visibility and performance analytics (KPIs, OEE), tracking time-stamped events across planning, production, and logistics workflows",
      "Integrated time-series ML models for automated production scheduling, improving backlog prioritization and increasing resource utilization by 25% across multiple work centers",
      "Tech stack: TypeScript, React, Next.js, Python, Machine Learning, PostgreSQL, FastAPI, Docker, Cloud SaaS",
    ],
  },
  {
    company: "Ollyo",
    address: "Dhaka, Bangladesh",
    jobTitle: "Software Engineer",
    startYear: "July 2024",
    endYear: "August 2025",
    duties: [
      "Owned core feature development for Kirki, Ollyo's flagship no-code WordPress website builder, enabling users to design and deploy full sites via drag-and-drop without writing code",
      "Fine-tuned LLaMA-3 on internal template and prompt datasets and integrated it into the product workflow for prompt-to-layout generation, enabling editable block creation and reducing design time by 20%",
      "Reduced app startup latency and improved editor responsiveness by 10% by migrating frontend state to Redux, memoizing costly renders, and cutting API calls per load from 25 to 14",
      "Built a modular plugin framework for integrating third-party services (e.g., Google Auth, SMTP) through PHP hooks and custom post types, allowing users to extend site functionality without writing code",
      "Tech stack: JavaScript, React, Redux, PHP, WordPress, Python, Transformers, AI/LLM fine-tuning, MySQL",
    ],
  },
  {
    company: "HighRadius",
    address: "Bhubaneswar, India",
    jobTitle: "Software Engineer Intern",
    startYear: "May 2023",
    endYear: "May 2024",
    duties: [
      "Joined the AI/ML team building ML-powered financial automation tools used by 850+ global enterprises, including Fortune 500 firms; worked across the full stack over a 12-month co-op engagement",
      "Built ML models to forecast future sales from historical invoice data, helping clients reduce cash-flow volatility and improve liquidity planning",
      "Designed robust data pipelines using pandas to clean and normalize heterogeneous datasets (missing values, inconsistent schemas, outliers), improving model accuracy by 8%",
      "Refactored 40+ React components from class-based to functional using hooks, reducing code duplication by 30% and significantly easing ongoing feature development",
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
