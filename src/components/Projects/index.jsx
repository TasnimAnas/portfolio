import mediAssistPic from "../../assets/medi-assist.png";
import noFapPic from "../../assets/no-fap.png";
import pdfChatPic from "../../assets/pdf-chat.png";
import travelAgencyPic from "../../assets/travel-agency.png";
import "./index.css";

const Projects = () => {
  const projectsData = [
    {
      title: "AI-Powered PDF Chat Website",
      description:
        "Developed a single-page website for PDF interaction using LLMs and Langchain integration.",
      image: pdfChatPic,
      link: "https://react-pdf-reader.web.app/",
    },
    {
      title: "Travel Agency Site",
      description:
        "A simple website for travel agency using HTML, CSS and JavaScript.",
      image: travelAgencyPic,
      link: "https://tasnimanas.github.io/travel-agency-site/",
    },
    {
      title: "Medi Assist",
      description:
        "App providing healthcare access in remote areas using OpenAI (GPT 3) API.",
      image: mediAssistPic,
      link: "https://github.com/TasnimAnas/medi-assist",
    },
    {
      title: "No FAP - Quit Addiction",
      description:
        "Android app for addiction management with Firebase Realtime Database chat feature.",
      image: noFapPic,
      link: "https://play.google.com/store/apps/details?id=com.TasnimAnas.NoFap&hl=en",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
