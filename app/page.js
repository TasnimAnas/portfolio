import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import ResearchPublications from "./components/ResearchPublications";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Coursework from "./components/Coursework";
import Contact from "./components/Contact";
import Awards from "./components/Awards";

export default function Home() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <About />
        <WorkExperience />
        <Education />
        <ResearchPublications />
        <Skills />
        <Projects />
        <Coursework />
        <Awards />
        <Contact />
      </div>
    </>
  );
}
