import Image from "next/image";
import mediAssistPic from "@/app/assets/medi-assist.webp";
import stopsmoke from "@/app/assets/stop_smoke.webp";
import pdfChatPic from "@/app/assets/pdf-chat.webp";
import apartmentPrice from "@/app/assets/apartment_price.webp";
import travelAgencyPic from "@/app/assets/travel-agency.webp";
import b2b from "@/app/assets/b2b.webp";
import styles from "./index.module.css";

const Projects = () => {
  const projectsData = [
    {
      title: "Medi Assist",
      description:
        "App providing healthcare access in remote areas using OpenAI (GPT 3) API.",
      image: mediAssistPic,
      link: "https://github.com/TasnimAnas/medi-assist",
    },
    {
      title: "Apartment Price Raise (Inflation) Prediction",
      description:
        "An ML model, trained trained on apartment price in different locality of the city to predict price for any size of apartment in any locality.",
      image: apartmentPrice,
      link: "https://github.com/TasnimAnas/apartment-price-prediction",
    },
    {
      title: "B2B Sales Prediction using ML",
      description:
        "Machine Learning model, trained on company invoice data to predict future order details for each customer.",
      image: b2b,
      link: "https://github.com/TasnimAnas/B2B-Sales-Dashboard-With-Prediction-System",
    },
    {
      title: "AI-Powered PDF Chat Website",
      description:
        "Developed a single-page website for PDF interaction using LLMs and Langchain integration.",
      image: pdfChatPic,
      link: "https://react-pdf-reader.web.app/",
    },
    {
      title: "Stop Smoke - Quit Addiction",
      description:
        "Android app for addiction management with Firebase Realtime Database chat feature.",
      image: stopsmoke,
      link: "https://play.google.com/store/apps/details?id=com.noobapps.stopsmoke",
    },
    {
      title: "Travel Agency Site",
      description:
        "A simple website for travel agency using HTML, CSS and JavaScript.",
      image: travelAgencyPic,
      link: "https://tasnimanas.github.io/travel-agency-site/",
    },
  ];

  return (
    <section id="projects" className={styles["projects-section"]}>
      <div className={styles["projects-container"]}>
        <h2>Projects</h2>
        <div className={styles["projects-grid"]}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles["project-card"]}>
              <Image
                src={project.image}
                alt={project.title}
                className={styles["project-image"]}
              />
              <div className={styles["project-content"]}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["project-link"]}
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
