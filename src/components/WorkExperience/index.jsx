import "./index.css";

const workExperienceData = [
  {
    company: "Ollyo",
    address: "Dhaka, Bangladesh",
    jobTitle: "Jr. Software Engineer",
    startYear: "July 2024",
    endYear: "Present",
    duties: [
      "Developing and maintaining React components for Droip, a no-code WordPress website builder, contributing to new feature development and continuous enhancements",
      "Building a new AI feature using Large Language Models, enabling automated website generation through fine-tuned LLM models and customized training processes tailored to user inputs within Droip.",
      "Responsible for Identifying and resolving bugs in the existing codebase, leading to improved UX and product stability",
      "Optimized React code, resulting in a 15% reduction in loading times and smoother user interactions, directly contributing to an increase in user satisfaction as reflected in product reviews.",
      "Technologies Used: JavaScript, React, Redux, PHP, Laravel, Git, WordPress, Plugin Development",
    ],
  },
  {
    company: "HighRadius",
    address: "Bhubaneswar, India",
    jobTitle: "Software Engineer Intern",
    startYear: "May 2023",
    endYear: "May 2024",
    duties: [
      "Part of the team of 1000+ developers that launched AI-based finance-related software products used by over 850 companies.",
      "Responsible for the daily operations and maintenance of the front end, utilizing React and Typescript to ensure the continuous improvement and error-free functionality of all company products.",
      "Achieved a notable optimization in UI load times and overall performance, contributing to a 20% increase in efficiency through effective bug resolution and performance enhancement strategies.",
      "Collaborated with the machine learning team to develop an AI-enabled B2B business management app, focusing on the sales forecasting feature that improved sales predictions and business decision-making processes.",
      "Technologies used: Python, Machine Learning, Typescript, jQuery, React, Redux, Router, REST API, Jest, Selenium, and MySQL.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="work-experience-section">
      <h1 className="section-heading">Work Experience</h1>
      <div className="work-experience-container">
        {workExperienceData.map((experience, index) => (
          <div key={index} className="experience">
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
