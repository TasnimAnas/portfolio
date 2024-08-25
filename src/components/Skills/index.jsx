import React from "react";
import awsImg from "../../assets/aws.png";
import bengaliImg from "../../assets/bengali.png";
import cppImg from "../../assets/cpp.png";
import cssImg from "../../assets/css.png";
import dartImg from "../../assets/dart.png";
import englishImg from "../../assets/english.png";
import expressImg from "../../assets/express.png";
import firebaseImg from "../../assets/firebase.png";
import flaskImg from "../../assets/flask.png";
import flutterImg from "../../assets/flutter.png";
import gitImg from "../../assets/git.png";
import hindiImg from "../../assets/hindi.png";
import htmlImg from "../../assets/html.png";
import javascriptImg from "../../assets/javascript.png";
import kerasImg from "../../assets/keras.png";
import linuxImg from "../../assets/linux.png";
import mongoDBImg from "../../assets/mongo.jpg";
import mySQLImg from "../../assets/mysql.png";
import nodeImg from "../../assets/node.png";
import numPyImg from "../../assets/numpy.png";
import pandasImg from "../../assets/pandas.png";
import pythonImg from "../../assets/python.jpeg";
import pyTorchImg from "../../assets/pytorch.png";
import reactImg from "../../assets/react.png";
import tensorFlowImg from "../../assets/tensorflow.png";
import "./index.css";

const Skills = () => {
  const skillsData = {
    languages: [
      { name: "C++", icon: cppImg },
      { name: "JavaScript", icon: javascriptImg },
      { name: "Python", icon: pythonImg },
      { name: "Dart", icon: dartImg },
      // Add more languages
    ],
    libraries: [
      { name: "HTML", icon: htmlImg },
      { name: "CSS", icon: cssImg },
      { name: "Flutter", icon: flutterImg },
      { name: "React", icon: reactImg },
      { name: "Node", icon: nodeImg },
      { name: "Express", icon: expressImg },
      { name: "NumPy", icon: numPyImg },
      { name: "Pandas", icon: pandasImg },
      { name: "Keras", icon: kerasImg },
      { name: "TensorFlow", icon: tensorFlowImg },
      { name: "PyTorch", icon: pyTorchImg },
      { name: "Flask", icon: flaskImg },
      // Add more libraries
      //  HTML, CSS, Flutter, React, Node, Express, NumPy, Pandas, Tensorflow, Keras, Flask
    ],
    tools: [
      { name: "MySQL", icon: mySQLImg },
      { name: "MongoDB", icon: mongoDBImg },
      { name: "Git", icon: gitImg },
      { name: "Linux", icon: linuxImg },
      { name: "Firebase", icon: firebaseImg },
      { name: "AWS", icon: awsImg },
      //  SQL, MySQL, MongoDB, Git, Github, Linux, Firebase, Amazon Web Services (AWS)
      // Add more tools
    ],
    languagesSpoken: [
      { name: "Bengali\n(Native)", icon: bengaliImg },
      { name: "English\n(Fluent)", icon: englishImg },
      { name: "Hindi\n(Basic)", icon: hindiImg },
      // Add more languages
    ],
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <div className="skills-grid">
            {skillsData.languages.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-category">
          <h3>Libraries/Frameworks</h3>
          <div className="skills-grid">
            {skillsData.libraries.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-category">
          <h3>Tools</h3>
          <div className="skills-grid">
            {skillsData.tools.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-category">
          <h3>Language skill</h3>
          <div className="skills-grid">
            {skillsData.languagesSpoken.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
