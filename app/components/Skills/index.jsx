import awsImg from "../../assets/aws.webp";
import bengaliImg from "../../assets/bengali.webp";
import cppImg from "../../assets/cpp.webp";
import cssImg from "../../assets/css.webp";
import dartImg from "../../assets/dart.webp";
import englishImg from "../../assets/english.webp";
import expressImg from "../../assets/express.webp";
import firebaseImg from "../../assets/firebase.webp";
import flaskImg from "../../assets/flask.webp";
import flutterImg from "../../assets/flutter.webp";
import gitImg from "../../assets/git.webp";
import hindiImg from "../../assets/hindi.webp";
import htmlImg from "../../assets/html.webp";
import javascriptImg from "../../assets/javascript.webp";
import kerasImg from "../../assets/keras.webp";
import linuxImg from "../../assets/linux.webp";
import mongoDBImg from "../../assets/mongo.webp";
import mySQLImg from "../../assets/mysql.webp";
import nodeImg from "../../assets/node.webp";
import numPyImg from "../../assets/numpy.webp";
import pandasImg from "../../assets/pandas.webp";
import pythonImg from "../../assets/python.webp";
import pyTorchImg from "../../assets/pytorch.webp";
import reactImg from "../../assets/react.webp";
import tensorFlowImg from "../../assets/tensorflow.webp";
import styles from "./index.module.css";
import Image from "next/image";

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
    <section id="skills" className={styles["skills-section"]}>
      <div className={styles["skills-container"]}>
        <h2>Skills</h2>
        <div className={styles["skills-category"]}>
          <h3>Programming Languages</h3>
          <div className={styles["skills-grid"]}>
            {skillsData.languages.map((skill, index) => (
              <div key={index} className={styles["skill-item"]}>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  className={styles["skill-icon"]}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["skills-category"]}>
          <h3>Libraries/Frameworks</h3>
          <div className={styles["skills-grid"]}>
            {skillsData.libraries.map((skill, index) => (
              <div key={index} className={styles["skill-item"]}>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  className={styles["skill-icon"]}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["skills-category"]}>
          <h3>Tools</h3>
          <div className={styles["skills-grid"]}>
            {skillsData.tools.map((skill, index) => (
              <div key={index} className={styles["skill-item"]}>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  className={styles["skill-icon"]}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["skills-category"]}>
          <h3>Language skill</h3>
          <div className={styles["skills-grid"]}>
            {skillsData.languagesSpoken.map((skill, index) => (
              <div key={index} className={styles["skill-item"]}>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  className={styles["skill-icon"]}
                />
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
