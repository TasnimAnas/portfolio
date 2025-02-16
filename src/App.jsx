import { Element } from "react-scroll";
import "./App.css";
import About from "./components/About";
// import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Coursework from "./components/Coursework";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ResearchPublications from "./components/ResearchPublications";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="about">
        <About />
      </Element>
      <Element name="work">
        <WorkExperience />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="publications">
        <ResearchPublications />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="coursework">
        <Coursework />
      </Element>
      {/* <Element name="awards">
        <Awards />
      </Element> */}
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
